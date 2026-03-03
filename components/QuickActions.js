export default function QuickActions() {
  return (
    <div className="card">
      <h3>Quick Actions</h3>

      <div style={{ display: "flex", gap: "10px" }}>
        <a href="/add"><button>Add Entry</button></a>
        <a href="/insights"><button>View Insights</button></a>
      </div>
    </div>
  );
}