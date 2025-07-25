/**
 * TextInput.jsx
 * -----------------------------
 * A controlled component for user input.
 * Renders a styled <textarea> for entering text to be translated.
 *
 * Props:
 * - value (string): the current value of the textarea
 * - onChange (function): handler function called when user types
 */


import React from "react";

export default function TextInput({ value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-base font-semibold text-black mb-2">Enter Text</label>
      <textarea
        value={value}             // Controlled value passed from parent
        onChange={onChange}       // Controlled change handler
        rows={5}                  // Height of the textarea (5 lines)
        placeholder="Enter text"
        className="w-full border border-zinc-200 bg-white text-black rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-zinc-600"
      />
    </div>
  );
}
