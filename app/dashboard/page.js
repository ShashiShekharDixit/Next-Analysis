"use client";
import { useEffect, useState } from "react";
import { getEntries } from "../../libs/storage";
import { getAdvancedStats } from "../../libs/analytics";
import StatsGrid from "../../components/StatsGrid";
import RecentEntries from "../../components/RecentEntries";
import CategoryBreakdown from "../../components/CategoryBreakdown";
import QuickActions from "../../components/QuickActions";
import Navbar from "../../components/Navbar";
import Heatmap from "../../components/Heatmap";
import ActivityTimeline from "../../components/ActivityTimeline";
import BarChart from "../../components/BarChart";

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

        <div className="grid">
          <RecentEntries data={data} />
          <ActivityTimeline data={data} />
        </div>

        <div style={{ marginTop: "30px" }}>
          <Heatmap data={data} />
        </div>

        <div style={{ marginTop: "30px" }}>
          <BarChart data={data.slice(-7)} />
        </div>
      </div>
    </>
  );
}
