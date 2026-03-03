"use client";

export default function Heatmap({ data }) {
  const days = 30;

  const grid = Array.from({ length: days }).map((_, i) => {
    const entry = data[data.length - 1 - i];
    return entry ? entry.score : 0;
  });

  return (
    <div className="card">
      <h3>Consistency Heatmap</h3>

      <div className="heatmap">
        {grid.map((val, i) => (
          <div
            key={i}
            className="heatbox"
            style={{
              background:
                val >= 8
                  ? "#22c55e"
                  : val >= 5
                  ? "#eab308"
                  : val > 0
                  ? "#ef4444"
                  : "#1e293b"
            }}
          />
        ))}
      </div>
    </div>
  );
}