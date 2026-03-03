export default function ActivityTimeline({ data }) {
  return (
    <div className="card">
      <h3>Activity Timeline</h3>

      {data.slice(-7).reverse().map((d, i) => (
        <div key={i} className="timeline">
          <div className="dot"></div>

          <div>
            <p>
              <strong>{d.category}</strong> — {d.score}/10
            </p>
            <span>{new Date(d.date).toLocaleString()}</span>
            <p className="note">{d.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}