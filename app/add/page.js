"use client";

import { useState } from "react";
import { saveEntry } from "../../libs/storage";

export default function Add() {
  const [score, setScore] = useState("");
  const [category, setCategory] = useState("Fitness");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
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

      <input
        type="number"
        placeholder="Score (1-10)"
        onChange={(e) => setScore(e.target.value)}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option>Fitness</option>
        <option>Work</option>
        <option>Mind</option>
      </select>

      <input
        placeholder="Notes..."
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}