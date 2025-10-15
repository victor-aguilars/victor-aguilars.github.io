import { Letter, RenderOptions } from './types';
import { getLetterByPhoneme, getHeightMarker } from './letterDefinitions';

/**
 * Extract path elements from SVG content
 */
function extractPaths(svgContent: string): string[] {
  const paths: string[] = [];
  const pathRegex = /<path[^>]*>/g;
  const matches = svgContent.match(pathRegex);

  if (matches) {
    paths.push(...matches);
  }

  return paths;
}

interface PositionedLetter {
  letter: Letter;
  x: number;
  y: number;
}

/**
 * Generate SVG markup for an array of phonemes with word wrapping
 */
export async function generateSVG(
  phonemes: string[],
  options: RenderOptions
): Promise<string> {
  const letters: (Letter | null)[] = await Promise.all(
    phonemes.map(async (phoneme) => {
      if (phoneme === ' ') return null; // Space handling
      return await getLetterByPhoneme(phoneme);
    })
  );

  const letterHeight = 61; // Standard height from viewBox
  const spaceWidth = 15; // Width for space character
  const heightMarker = options.includeHeightMarker ? await getHeightMarker() : null;

  // Split into words for wrapping
  const words: Array<{ letters: Letter[], startIndex: number }> = [];
  let currentWord: Letter[] = [];
  let wordStartIndex = 0;

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const phoneme = phonemes[i];

    if (phoneme === ' ') {
      if (currentWord.length > 0) {
        words.push({ letters: currentWord, startIndex: wordStartIndex });
        currentWord = [];
      }
      wordStartIndex = i + 1;
    } else if (letter) {
      if (currentWord.length === 0) {
        wordStartIndex = i;
      }
      currentWord.push(letter);
    }
  }

  // Don't forget the last word
  if (currentWord.length > 0) {
    words.push({ letters: currentWord, startIndex: wordStartIndex });
  }

  // Position letters with word wrapping
  const letterPositions: PositionedLetter[] = [];
  let currentX = 0;
  let currentY = 0;
  let currentLineWidth = 0;
  let maxWidth = 0;

  // Add height marker at the start of first line
  if (heightMarker) {
    letterPositions.push({ letter: heightMarker, x: currentX, y: currentY });
    currentX += heightMarker.width + options.spacing;
    currentLineWidth = currentX;
  }

  for (const word of words) {
    // Calculate word width
    const wordWidth = word.letters.reduce(
      (sum, letter) => sum + letter.width + options.spacing,
      0
    );

    // Check if we need to wrap
    if (currentX > 0 && currentLineWidth + spaceWidth + wordWidth > options.maxLineWidth) {
      // Move to next line
      currentY += letterHeight + options.lineSpacing;
      currentX = 0;
      currentLineWidth = 0;

      // Add height marker at start of new line
      if (heightMarker) {
        letterPositions.push({ letter: heightMarker, x: currentX, y: currentY });
        currentX += heightMarker.width + options.spacing;
        currentLineWidth = currentX;
      }
    } else if (currentX > 0) {
      // Add space before word (except at start of line)
      currentX += spaceWidth;
      currentLineWidth += spaceWidth;
    }

    // Position letters in this word
    for (const letter of word.letters) {
      letterPositions.push({ letter, x: currentX, y: currentY });
      currentX += letter.width + options.spacing;
      currentLineWidth += letter.width + options.spacing;
    }

    maxWidth = Math.max(maxWidth, currentLineWidth);
  }

  const totalWidth = maxWidth;
  const totalHeight = currentY + letterHeight;

  // Generate SVG
  const svgParts: string[] = [];

  // Calculate scale factor
  let effectiveScale: number;
  if (options.autoScale) {
    // Auto-fit to target width
    effectiveScale = options.targetWidth / totalWidth;
  } else {
    // Use manual scale
    effectiveScale = options.scale;
  }

  // SVG opening tag with viewBox that fits all content
  // Set explicit dimensions based on calculated scale
  const scaledWidth = totalWidth * effectiveScale;
  const scaledHeight = totalHeight * effectiveScale;
  svgParts.push(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} ${totalHeight}" width="${scaledWidth}" height="${scaledHeight}">`
  );

  // Optional baseline for each line
  if (options.includeBaseline) {
    for (let y = 0; y <= currentY; y += letterHeight + options.lineSpacing) {
      svgParts.push(
        `<line x1="0" y1="${y + 30.5}" x2="${totalWidth}" y2="${y + 30.5}" stroke="#ccc" stroke-width="0.5" stroke-dasharray="2,2" />`
      );
    }
  }

  // Render each letter
  for (const { letter, x, y } of letterPositions) {
    const paths = extractPaths(letter.svgContent);

    // Create a group for this letter
    svgParts.push(`<g transform="translate(${x}, ${y})">`);

    // Add each path, modifying the stroke color and width
    for (const path of paths) {
      // Replace stroke color and width
      let modifiedPath = path
        .replace(/stroke:#[0-9a-fA-F]{6}/g, `stroke:${options.color}`)
        .replace(/stroke-width:[^;"]*/g, `stroke-width:${options.strokeWidth}`);

      svgParts.push(modifiedPath);
    }

    svgParts.push('</g>');
  }

  // Close SVG
  svgParts.push('</svg>');

  return svgParts.join('\n');
}

/**
 * Generate a data URL for the SVG (useful for downloads)
 */
export function svgToDataURL(svgString: string): string {
  const encoded = encodeURIComponent(svgString);
  return `data:image/svg+xml,${encoded}`;
}

/**
 * Trigger download of SVG
 */
export function downloadSVG(svgString: string, filename: string = 'womens-script.svg') {
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

/**
 * Convert SVG to PNG and trigger download
 */
export async function downloadPNG(
  svgString: string,
  filename: string = 'womens-script.png',
  scale: number = 2
): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      // Fill with white background
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Could not create blob'));
          return;
        }

        const pngUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(pngUrl);
        URL.revokeObjectURL(url);
        resolve();
      });
    };

    img.onerror = () => {
      reject(new Error('Failed to load SVG'));
      URL.revokeObjectURL(url);
    };

    img.src = url;
  });
}
