export function getAdvancedStats(data) {
  if (!data.length) return {};

  const total = data.length;

  const avg =
    data.reduce((a, b) => a + b.score, 0) / total;

  const best = Math.max(...data.map(d => d.score));
  const worst = Math.min(...data.map(d => d.score));

  // streak
  let streak = 0;
  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i].score >= 7) streak++;
    else break;
  }

  // category split
  const categories = {};
  data.forEach(d => {
    categories[d.category] = (categories[d.category] || 0) + 1;
  });

  return {
    avg: avg.toFixed(1),
    best,
    worst,
    streak,
    total,
    categories
  };
}