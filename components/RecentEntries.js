export default function RecentEntries({ data }) {
  return (
    <div className="card">
      <h3>Recent Activity</h3>

      {data.slice(-5).reverse().map((d, i) => (
        <div key={i} className="entry-box">
          <div className="entry-top">
            <span>{new Date(d.date).toLocaleDateString()}</span>
            <span className="score">{d.score}/10</span>
          </div>

          <div className="entry-mid">
            <span className="category">{d.category}</span>
          </div>

          <p className="note">{d.note || "No notes added"}</p>
        </div>
      ))}
    </div>
  );
}