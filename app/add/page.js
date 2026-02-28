"use client";

import { useState } from "react";
import { saveEntry } from "../../libs/storage";

export default function Add() {
  const [score, setScore] = useState("");

  const handleSubmit = () => {
    const entry = {
      date: new Date().toISOString(),
      score: Number(score)
    };

    saveEntry(entry);
    alert("Saved!");
  };

  return (
    <div>
      <h1>Add Entry</h1>
      <input
        type="number"
        placeholder="Score (1-10)"
        onChange={(e) => setScore(e.target.value)}
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}