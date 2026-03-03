export default function CategoryBreakdown({ categories }) {
  return (
    <div className="card">
      <h3>Category Breakdown</h3>

      {Object.entries(categories).map(([key, val]) => (
        <div key={key} className="entry">
          <span>{key}</span>
          <span>{val}</span>
        </div>
      ))}
    </div>
  );
}