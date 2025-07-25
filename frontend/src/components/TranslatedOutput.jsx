/**
 * TranslatedOutput.jsx
 * -----------------------------
 * Displays the translated text returned from the backend.
 * Handles loading state, fallback messaging, and conditional styling.
 *
 * Props:
 * - result (string): the translated text to display
 * - loading (boolean): indicates whether a translation request is in progress
 */

import React from "react";

export default function TranslatedOutput({ result, loading }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-medium text-black mb-2">Translated Output</h2>
      <div className="p-4 border border-zinc-200 rounded bg-white min-h-[100px]">
        {loading ? (
          // Show loading message while translation is in progress
          <p className="text-blue-700 italic">Translating...</p>
        ) : result ? (
          // Display the translated result
          <p className="text-black">{result}</p>
        ) : null}
      </div>
    </div>
  );
}
