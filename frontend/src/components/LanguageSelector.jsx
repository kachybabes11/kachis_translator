/**
 * LanguageSelector.jsx
 * ---------------------
 * Reusable component for selecting the source and target languages
 * used in the translation process. Renders two dropdown menus.
 *
 * Props:
 * - sourceLang (string): currently selected source language code
 * - targetLang (string): currently selected target language code
 * - onSourceChange (function): callback triggered when source language changes
 * - onTargetChange (function): callback triggered when target language changes
 */

import React from "react";

export default function LanguageSelector({ sourceLang, targetLang, onSourceChange, onTargetChange }) {
  // List of supported languages with ISO codes and display names
  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "yo", name: "Yoruba" },
    { code: "ha", name: "Hausa" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    // Add more if needed
  ];

  return (
    // Layout: two columns, one for source and one for target language
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-black mb-1">Source Language</label>
        <select value={sourceLang} onChange={onSourceChange} className="w-full border border-zinc-200 bg-white text-black p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600">
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-black mb-1">Target Language</label>
        <select value={targetLang} onChange={onTargetChange} className="w-full border border-zinc-200 bg-white text-black p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600">
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
