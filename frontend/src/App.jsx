/**
 * App.jsx
 * ------------
 * Main entry point of the React frontend for the Bilingual Translator App.
 * Handles layout, component rendering, and state management for translation flow.
 */

import { useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import TextInput from "./components/TextInput";
import TranslateButton from "./components/TranslateButton";
import TranslatedOutput from "./components/TranslatedOutput";



export default function App() {
  // State hooks for language selection, input, output, and loading
  const [sourceLang, setSourceLang] = useState("en");         // Source language (default: English)
  const [targetLang, setTargetLang] = useState("fr");         // Target language (default: French)
  const [inputText, setInputText] = useState("");             // User input text
  const [translatedText, setTranslatedText] = useState("");   // Translated result
  const [loading, setLoading] = useState(false);              // API request status
  
  /**
   * handleTranslate()
   * ------------------
   * Triggered when the user clicks the Translate button.
   * Sends a POST request to the Flask backend with input text and language info,
   * and updates the UI with the translated result or error.
   */
  const handleTranslate = async () => {
    if (!inputText.trim()) return; // Prevent empty input
  
    setLoading(true);
    setTranslatedText(""); // Clear any previous output
  
    try {
      // Send POST request to the Flask backend with translation parameters
      const res = await fetch("https://bilingual-backend-eca.onrender.com/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Tell backend we're sending JSON
        },
        body: JSON.stringify({
          source_lang: sourceLang,   // Language code to translate from (e.g., "en")
          target_lang: targetLang,   // Language code to translate to (e.g., "fr")
          text: inputText,           // The user's input text
        }),
      });
      
      // Parse JSON response
      const data = await res.json();

       // If translation exists, display it; otherwise fallback to a placeholder
      setTranslatedText(data.translated_text || "No result");


    } catch (err) {
      // Catch network or backend errors and display fallback error message
      console.error(err);
      setTranslatedText("Translation failed.");
    } finally {
      setLoading(false);
    }
  };

  // JSX layout and UI component rendering
  return (
    // Page wrapper: sets full-height layout and background color
    <div className="min-h-screen bg-pink-500 text-black px-4 sm:px-6 lg:px-8 py-10">
      <header className="text-3xl font-extrabold text-center text-black mb-6 tracking-tight">Kachy's Translator</header>
      <main className="max-w-xl mx-auto bg-white p-8 shadow-lg shadow-zinc-100 ring-1 ring-zinc-200">
        <LanguageSelector
          sourceLang={sourceLang}
          targetLang={targetLang}
          onSourceChange={(e) => setSourceLang(e.target.value)}
          onTargetChange={(e) => setTargetLang(e.target.value)}
        />
        <TextInput value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <TranslateButton
          onClick={handleTranslate}
          disabled={loading || !inputText.trim()}
        />
        <TranslatedOutput result={translatedText} loading={loading} />
      </main>
    </div>
  );
}
