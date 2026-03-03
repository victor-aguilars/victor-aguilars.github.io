import { Letter, LetterHeight } from './types';

// Mapping of phonemes to their height classifications
// Based on Alethi Women's Script specifications
const PHONEME_HEIGHTS: Record<string, LetterHeight> = {
  // E Group - Vertical lines (differentiated by height)
  'e': 'large',
  'a': 'medium',
  'o': 'medium',
  'i': 'small',
  'u': 'small',

  // P Group
  'p': 'large',
  'b': 'large',
  'm': 'medium',
  'f': 'large',
  'v': 'medium',

  // T Group
  't': 'large',
  'd': 'large',
  'l': 'medium',

  // K Group
  'k': 'large',
  'g': 'medium',

  // S Group
  's': 'large',
  'z': 'medium',
  'n': 'small',

  // R Group
  'r': 'small',

  // Y Group
  'y': 'medium',

  // H (special)
  'h': 'medium',

  // Special phonemes
  'ch': 'large',
  'sh': 'large',
  'th': 'large',
};

// Mapping of phonemes to their SVG file names and widths
const PHONEME_DATA: Record<string, { file: string; width: number }> = {
  'a': { file: 'A.svg', width: 7 },
  'b': { file: 'B.svg', width: 25 },
  'ch': { file: 'CH.svg', width: 22 },
  'd': { file: 'D.svg', width: 16 },
  'e': { file: 'E.svg', width: 7 },
  'f': { file: 'F.svg', width: 30 },
  'g': { file: 'G.svg', width: 16 },
  'h': { file: 'H.svg', width: 14 },
  'i': { file: 'I.svg', width: 10 },
  'y': { file: 'J.svg', width: 14 },  // J maps to Y phoneme
  'k': { file: 'K.svg', width: 20 },
  'l': { file: 'L.svg', width: 14 },
  'm': { file: 'M.svg', width: 15 },
  'n': { file: 'N.svg', width: 11 },
  'o': { file: 'O.svg', width: 7 },
  'p': { file: 'P.svg', width: 33 },
  'r': { file: 'R.svg', width: 11 },
  's': { file: 'S.svg', width: 20 },
  'sh': { file: 'SH.svg', width: 21 },
  't': { file: 'T.svg', width: 20 },
  'th': { file: 'TH.svg', width: 22 },
  'u': { file: 'U.svg', width: 13 },
  'v': { file: 'V.svg', width: 18 },
  'z': { file: 'Z.svg', width: 16 },
};

// Height marker data
const HEIGHT_MARKER = {
  file: '][.svg',
  width: 18,
};

const BASELINE = 30.5;
const VIEWBOX_HEIGHT = 61;

/**
 * Load SVG content from file path
 * In production, these would be imported or fetched
 */
async function loadSVGContent(filename: string): Promise<string> {
  try {
    const response = await fetch(`/symbols/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return '';
  }
}

/**
 * Get letter definition for a phoneme
 */
export async function getLetterByPhoneme(phoneme: string): Promise<Letter | null> {
  const data = PHONEME_DATA[phoneme];
  if (!data) {
    console.warn(`No letter definition for phoneme: ${phoneme}`);
    return null;
  }

  const svgContent = await loadSVGContent(data.file);

  return {
    phoneme,
    height: PHONEME_HEIGHTS[phoneme] || 'medium',
    svgContent,
    width: data.width,
    viewBoxHeight: VIEWBOX_HEIGHT,
    baseline: BASELINE,
  };
}

/**
 * Get height marker definition
 */
export async function getHeightMarker(): Promise<Letter> {
  const svgContent = await loadSVGContent(HEIGHT_MARKER.file);

  return {
    phoneme: 'height-marker',
    height: 'large',
    svgContent,
    width: HEIGHT_MARKER.width,
    viewBoxHeight: VIEWBOX_HEIGHT,
    baseline: BASELINE,
  };
}

/**
 * Get all available phonemes
 */
export function getAvailablePhonemes(): string[] {
  return Object.keys(PHONEME_DATA);
}

/**
 * Check if a phoneme has a letter definition
 */
export function hasLetter(phoneme: string): boolean {
  return phoneme in PHONEME_DATA;
}
