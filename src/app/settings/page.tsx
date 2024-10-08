"use client";

import React, { useState } from "react";

const SettingsPage: React.FC = () => {
  const [defaultLanguage, setDefaultLanguage] = useState<string>("en");
  const [preferredKeywords, setPreferredKeywords] = useState<string>("");

  const handleSave = () => {
    // Handle saving settings logic, like saving to localStorage or backend
    console.log("Settings saved:", { defaultLanguage, preferredKeywords });
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Settings</h1>
      <div className="flex flex-col items-center">
        <label className="mb-4">
          Default Language:
          <select
            value={defaultLanguage}
            onChange={(e) => setDefaultLanguage(e.target.value)}
            className="ml-2 p-2 border rounded"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </label>

        <label className="mb-4">
          Preferred Keywords:
          <input
            type="text"
            value={preferredKeywords}
            onChange={(e) => setPreferredKeywords(e.target.value)}
            className="ml-2 p-2 border rounded"
            placeholder="Enter keywords"
          />
        </label>

        <button
          onClick={handleSave}
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
