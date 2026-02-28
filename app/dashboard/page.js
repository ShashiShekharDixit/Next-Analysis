"use client";

import { useEffect, useState } from "react";
import { getEntries } from "../../libs/storage";
import { getStats } from "../../libs/analytics";
import Card from "../../components/Card";

export default function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const data = getEntries();
    const result = getStats(data);
    setStats(result);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="grid">
        <Card title="Average Score" value={stats.avg} />
        <Card title="Consistency" value={stats.consistency + "%"} />
      </div>
    </div>
  );
}