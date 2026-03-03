"use client";
import { useEffect, useState } from "react";
import { getEntries } from "../../libs/storage";
import { getAdvancedStats } from "../../libs/analytics";
import StatsGrid from "../../components/StatsGrid";
import RecentEntries from "../../components/RecentEntries";
import CategoryBreakdown from "../../components/CategoryBreakdown";
import QuickActions from "../../components/QuickActions";
import Navbar from "../../components/Navbar";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    const entries = getEntries();
    setData(entries);

    const result = getAdvancedStats(entries);
    setStats(result);
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Dashboard</h1>

        <StatsGrid stats={stats} />

        <div className="grid" style={{ marginTop: "30px" }}>
          <RecentEntries data={data} />
          <CategoryBreakdown categories={stats.categories || {}} />
        </div>

        <div style={{ marginTop: "30px" }}>
          <QuickActions />
        </div>
      </div>
    </>
  );
}