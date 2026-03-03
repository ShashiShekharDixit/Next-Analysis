export default function RecentEntries({ data }) {
  return (
    <div className="card">
      <h3>Recent Entries</h3>

      {data.slice(-5).reverse().map((d, i) => (
        <div key={i} className="entry">
          <span>{new Date(d.date).toLocaleDateString()}</span>
          <span>{d.score}/10</span>
          <span>{d.category}</span>
        </div>
      ))}
    </div>
  );
}