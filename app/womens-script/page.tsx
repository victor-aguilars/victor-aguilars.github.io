'use client';

import { useState, useEffect } from 'react';
import { Download, Copy, Settings } from 'lucide-react';
import Link from 'next/link';
import { textToPhonemes, phonemesToString } from './lib/phonemeMapper';
import { generateSVG, downloadSVG, downloadPNG } from './lib/svgGenerator';
import { DEFAULT_RENDER_OPTIONS, RenderOptions } from './lib/types';

export default function WomensScriptTranslator() {
  const [inputText, setInputText] = useState('');
  const [phonemes, setPhonemes] = useState<string[]>([]);
  const [svgOutput, setSvgOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState<RenderOptions>(DEFAULT_RENDER_OPTIONS);

  // Update phonemes when input changes
  useEffect(() => {
    if (inputText) {
      const newPhonemes = textToPhonemes(inputText);
      setPhonemes(newPhonemes);
    } else {
      setPhonemes([]);
      setSvgOutput('');
    }
  }, [inputText]);

  // Generate SVG when phonemes change
  useEffect(() => {
    if (phonemes.length > 0) {
      setIsLoading(true);
      generateSVG(phonemes, options)
        .then(setSvgOutput)
        .finally(() => setIsLoading(false));
    }
  }, [phonemes, options]);

  const handleDownloadSVG = () => {
    if (svgOutput) {
      downloadSVG(svgOutput, 'womens-script.svg');
    }
  };

  const handleDownloadPNG = async () => {
    if (svgOutput) {
      try {
        await downloadPNG(svgOutput, 'womens-script.png', 2);
      } catch (error) {
        console.error('Error downloading PNG:', error);
        alert('Failed to download PNG. Please try SVG instead.');
      }
    }
  };

  const handleCopySVG = async () => {
    if (svgOutput) {
      try {
        await navigator.clipboard.writeText(svgOutput);
        alert('SVG copied to clipboard!');
      } catch (error) {
        console.error('Error copying to clipboard:', error);
        alert('Failed to copy to clipboard');
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900">
                Alethi Women&apos;s Script Translator
              </h1>
              <p className="text-neutral-600 mt-2">
                Convert English text to the phonetic writing system from The Stormlight Archive
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label htmlFor="input" className="block text-sm font-semibold text-neutral-900 mb-2">
                English Text
              </label>
              <textarea
                id="input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text to translate... Try 'Kaladin' or 'Honor is dead'"
                className="w-full h-48 px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none resize-none font-mono text-sm"
                spellCheck={false}
              />
              <div className="mt-2 text-xs text-neutral-500">
                Characters: {inputText.length} | Phonemes: {phonemes.filter(p => p !== ' ').length}
              </div>
            </div>

            {/* Phoneme Display */}
            {phonemes.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-neutral-900 mb-2">
                  Phonemes
                </label>
                <div className="px-4 py-3 border border-neutral-200 bg-neutral-50 font-mono text-sm">
                  {phonemesToString(phonemes)}
                </div>
              </div>
            )}

            {/* Options */}
            <div>
              <button
                onClick={() => setShowOptions(!showOptions)}
                className="flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
              >
                <Settings className="w-4 h-4" />
                {showOptions ? 'Hide' : 'Show'} Options
              </button>

              {showOptions && (
                <div className="mt-4 space-y-4 p-4 border border-neutral-200 bg-neutral-50">
                  <div>
                    <label className="flex items-center gap-2 text-xs font-medium text-neutral-700 mb-2">
                      <input
                        type="checkbox"
                        checked={options.autoScale}
                        onChange={(e) =>
                          setOptions({ ...options, autoScale: e.target.checked })
                        }
                      />
                      Auto-fit to container
                    </label>
                    {!options.autoScale && (
                      <>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">
                          Scale: {options.scale}x
                        </label>
                        <input
                          type="range"
                          min="1"
                          max="5"
                          step="0.5"
                          value={options.scale}
                          onChange={(e) =>
                            setOptions({ ...options, scale: parseFloat(e.target.value) })
                          }
                          className="w-full"
                        />
                      </>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Stroke Width: {options.strokeWidth}px
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="3"
                      step="0.5"
                      value={options.strokeWidth}
                      onChange={(e) =>
                        setOptions({ ...options, strokeWidth: parseFloat(e.target.value) })
                      }
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Spacing: {options.spacing}px
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="20"
                      step="2"
                      value={options.spacing}
                      onChange={(e) =>
                        setOptions({ ...options, spacing: parseFloat(e.target.value) })
                      }
                      className="w-full"
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 text-xs">
                      <input
                        type="checkbox"
                        checked={options.includeBaseline}
                        onChange={(e) =>
                          setOptions({ ...options, includeBaseline: e.target.checked })
                        }
                      />
                      Show Baseline
                    </label>

                    <label className="flex items-center gap-2 text-xs">
                      <input
                        type="checkbox"
                        checked={options.includeHeightMarker}
                        onChange={(e) =>
                          setOptions({ ...options, includeHeightMarker: e.target.checked })
                        }
                      />
                      Height Marker
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-900 mb-2">
                Women&apos;s Script
              </label>
              <div className="border border-neutral-300 bg-white p-6 min-h-48 max-h-[600px] overflow-auto">
                {isLoading ? (
                  <div className="text-neutral-400 text-center">Generating...</div>
                ) : svgOutput ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: svgOutput }}
                  />
                ) : (
                  <div className="text-neutral-400 text-center">
                    <p>Enter text to see the translation</p>
                    <p className="text-xs mt-2">The script will appear here</p>
                  </div>
                )}
              </div>
            </div>

            {/* Export Controls */}
            {svgOutput && (
              <div className="flex gap-2">
                <button
                  onClick={handleDownloadSVG}
                  className="flex items-center gap-2 px-4 py-2 border border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  Download SVG
                </button>

                <button
                  onClick={handleDownloadPNG}
                  className="flex items-center gap-2 px-4 py-2 border border-neutral-300 bg-white text-neutral-900 hover:border-neutral-900 transition-colors text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  Download PNG
                </button>

                <button
                  onClick={handleCopySVG}
                  className="flex items-center gap-2 px-4 py-2 border border-neutral-300 bg-white text-neutral-900 hover:border-neutral-900 transition-colors text-sm font-medium"
                >
                  <Copy className="w-4 h-4" />
                  Copy SVG
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 border-t border-neutral-200 pt-8">
          <h2 className="text-xl font-bold text-neutral-900 mb-4">About the Script</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-neutral-600">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Phonetic Writing System</h3>
              <p>
                The Women&apos;s Script is a phonetic writing system from Brandon Sanderson&apos;s Stormlight Archive series.
                It maps to sounds rather than letters, with characters differentiated by shape and height.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Translation Rules</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>c → s (before e/i/y) or k (otherwise)</li>
                <li>Multi-char: ch, sh, th → single phonemes</li>
                <li>q → k, x → ks, w → u, j → y</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
