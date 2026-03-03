/**
 * Converts English text to Alethi phonemes
 *
 * Rules:
 * - Multi-character phonemes (ch, sh, th) are checked first
 * - c → s (before e/i/y) or k (otherwise)
 * - q → k
 * - x → ks
 * - w → u
 * - j → y
 */

const MULTI_CHAR_PHONEMES = ['ch', 'sh', 'th'];

/**
 * Determines if 'c' should be soft (s) or hard (k)
 * Soft before e, i, y
 */
function isSoftC(text: string, index: number): boolean {
  if (index + 1 >= text.length) return false;
  const nextChar = text[index + 1].toLowerCase();
  return nextChar === 'e' || nextChar === 'i' || nextChar === 'y';
}

/**
 * Converts English text to array of Alethi phonemes
 */
export function textToPhonemes(text: string): string[] {
  const phonemes: string[] = [];
  const normalized = text.toLowerCase();
  let i = 0;

  while (i < normalized.length) {
    const char = normalized[i];

    // Skip non-alphabetic characters (spaces, punctuation, etc.)
    if (!char.match(/[a-z]/)) {
      if (char === ' ') {
        phonemes.push(' '); // Preserve spaces
      }
      i++;
      continue;
    }

    // Check for multi-character phonemes first
    let matched = false;
    for (const multiChar of MULTI_CHAR_PHONEMES) {
      if (normalized.substring(i, i + multiChar.length) === multiChar) {
        phonemes.push(multiChar);
        i += multiChar.length;
        matched = true;
        break;
      }
    }

    if (matched) continue;

    // Handle single character conversions
    switch (char) {
      case 'c':
        phonemes.push(isSoftC(normalized, i) ? 's' : 'k');
        break;
      case 'q':
        phonemes.push('k');
        break;
      case 'x':
        phonemes.push('k', 's');
        break;
      case 'w':
        phonemes.push('u');
        break;
      case 'j':
        phonemes.push('y');
        break;
      default:
        // Direct mapping for other letters
        phonemes.push(char);
    }

    i++;
  }

  return phonemes;
}

/**
 * Formats phoneme array for display
 */
export function phonemesToString(phonemes: string[]): string {
  return phonemes.join('-');
}
