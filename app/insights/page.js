"use client";

import { useEffect, useState } from "react";
import { getEntries } from "../../libs/storage";
import { predict } from "../../libs/prediction";
import Navbar from "../../components/Navbar";

export default function Insights() {
  const [text, setText] = useState("");
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const data = getEntries();
    setText(predict(data));

    setTips([
      "Stay consistent above 7 score",
      "Avoid long breaks in tracking",
      "Focus on one category at a time"
    ]);
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Insights</h1>

        <div className="card">
          <h3>Prediction</h3>
          <p>{text}</p>
        </div>

        <div className="card" style={{ marginTop: "20px" }}>
          <h3>Improvement Tips</h3>
          {tips.map((t, i) => (
            <p key={i}>• {t}</p>
          ))}
        </div>
      </div>
    </>
  );
}