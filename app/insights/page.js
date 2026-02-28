"use client";

import { useEffect, useState } from "react";
import { getEntries } from "../../lib/storage";
import { predict } from "../../lib/prediction";
import InsightCard from "../../components/InsightCard";

export default function Insights() {
  const [text, setText] = useState("");

  useEffect(() => {
    const data = getEntries();
    const result = predict(data);
    setText(result);
  }, []);

  return (
    <div>
      <h1>Insights</h1>
      <InsightCard text={text} />
    </div>
  );
}