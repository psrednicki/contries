import React, { useState, useRef } from "react";
import debounce from "lodash/debounce";

const TextToSpeech: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [rate, setRate] = useState<number>(1.0); // Domyślna prędkość czytania

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const speakText = (textToSpeak: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utteranceRef.current = utterance;
      utterance.rate = rate; // Ustawienie prędkości czytania
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    } else {
      alert("YOUR BROWERS DO NOT SUPPORT TEXT TO SPEACH");
    }
  };

  const debouncedSpeak = debounce(speakText, 500);

  const handleSpeak = () => {
    debouncedSpeak.cancel();
    speakText(text);
  };

  const handlePause = () => {
    if (utteranceRef.current) {
      window.speechSynthesis.pause();
      setIsSpeaking(false);
    }
  };

  const handleResume = () => {
    if (utteranceRef.current) {
      window.speechSynthesis.resume();
      setIsSpeaking(true);
    }
  };

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRate = parseFloat(event.target.value);
    setRate(newRate);
    if (isSpeaking) {
      utteranceRef.current?.pause();
      utteranceRef.current?.resume();
    }
  };

  return (
    <div className="p-4 mx-2 bg-gray-200 rounded-lg shadow-lg">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text to speach"
        className="w-full mb-2 p-2 border rounded-lg"
      />
      <button
        onClick={handleSpeak}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Czytaj
      </button>
      <button
        onClick={handlePause}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2"
        disabled={!isSpeaking}
      >
        Pauza
      </button>
      <button
        onClick={handleResume}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
        disabled={isSpeaking}
      >
        Wznów
      </button>
      <label className="flex items-center py-4">
        Prędkość odczytu:
        <input
          type="number"
          step="0.1"
          min="0.1"
          max="10"
          value={rate}
          onChange={handleSpeedChange}
          className="ml-2 p-2 border rounded-lg"
        />
      </label>
    </div>
  );
};

export default TextToSpeech;
