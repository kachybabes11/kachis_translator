/**
 * TranslateButton.jsx
 * -----------------------------
 * A styled button component that triggers translation when clicked.
 *
 * Props:
 * - onClick (function): handler function called when the button is clicked
 * - disabled (boolean): disables the button when true (e.g., during loading or empty input)
 */

import React from "react";

export default function TranslateButton({ onClick, disabled }) {
  return (
    <div className="text-center">
      <button
        onClick={onClick}           // Trigger translation function
        disabled={disabled}         // Prevent click if loading or invalid input
        className={`px-6 py-2 rounded-md font-medium text-black transition duration-200 ease-in-out
          ${disabled
            ? "bg-zinc-200 cursor-not-allowed"
            : "bg-white hover:bg-blue-800 shadow-md"
          }`} 
      >
        Translate
      </button>
    </div>
  );
}
