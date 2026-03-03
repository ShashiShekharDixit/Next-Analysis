"use client";

import { useState } from "react";
import { saveEntry } from "../../libs/storage";

export default function Add() {
  const [score, setScore] = useState("");
  const [category, setCategory] = useState("Fitness");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    if (!score) return alert("Score required");

    const entry = {
      date: new Date().toISOString(),
      score: Number(score),
      category,
      note
    };

    saveEntry(entry);
    alert("Saved!");
  };

  return (
    <div className="container">
      <h1>Add Entry</h1>

      <div className="glass-form">
        <input
          type="number"
          placeholder="Score (1–10)"
          onChange={(e) => setScore(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option>Fitness</option>
          <option>Work</option>
          <option>Mind</option>
        </select>

        {/* 🔥 IMPROVED NOTES */}
        <textarea
          className="notes"
          placeholder="Write what actually happened today..."
          onChange={(e) => setNote(e.target.value)}
        />

        <button onClick={handleSubmit}>Save Entry</button>
      </div>
    </div>
  );
}