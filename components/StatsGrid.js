import Card from "./Card";

export default function StatsGrid({ stats }) {
  return (
    <div className="grid">
      <Card title="Average" value={stats.avg} icon="📊" />
      <Card title="Best" value={stats.best} icon="🏆" />
      <Card title="Worst" value={stats.worst} icon="📉" />
      <Card title="Streak" value={stats.streak} icon="🔥" />
    </div>
  );
}