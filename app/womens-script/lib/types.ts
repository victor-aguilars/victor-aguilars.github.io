export type LetterHeight = 'small' | 'medium' | 'large';

export interface Letter {
  phoneme: string;           // "a", "b", "ch", etc.
  height: LetterHeight;      // Relative height classification
  svgContent: string;        // Full SVG content from file
  width: number;             // Character width from viewBox
  viewBoxHeight: number;     // Height from viewBox (61 for all)
  baseline: number;          // Baseline position (30.5 for all)
}

export interface RenderOptions {
  scale: number;             // Overall size multiplier (used in manual mode)
  autoScale: boolean;        // Auto-fit to container or use manual scale
  targetWidth: number;       // Target width in px for auto-scaling
  strokeWidth: number;       // Line thickness
  color: string;             // Stroke color
  spacing: number;           // Space between characters
  includeBaseline: boolean;  // Show the horizontal baseline
  includeHeightMarker: boolean; // Show height marker at start
  maxLineWidth: number;      // Max width before wrapping (in viewBox units)
  lineSpacing: number;       // Space between lines (in viewBox units)
}

export const DEFAULT_RENDER_OPTIONS: RenderOptions = {
  scale: 2,
  autoScale: true,
  targetWidth: 600,
  strokeWidth: 0.5,
  color: '#000000',
  spacing: 0,
  includeBaseline: true,
  includeHeightMarker: true,
  maxLineWidth: 400,
  lineSpacing: 20,
};
