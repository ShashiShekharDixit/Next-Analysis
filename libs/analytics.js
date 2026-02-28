export function getStats(data) {
  if (data.length === 0) return { avg: 0, consistency: 0 };

  const avg =
    data.reduce((acc, item) => acc + item.score, 0) / data.length;

  const consistency =
    (data.filter(item => item.score >= 7).length / data.length) * 100;

  return {
    avg: avg.toFixed(1),
    consistency: Math.round(consistency)
  };
}