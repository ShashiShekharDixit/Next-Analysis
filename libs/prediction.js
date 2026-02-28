export function predict(data) {
  if (data.length < 2) return "Not enough data";

  const trend =
    data[data.length - 1].score - data[0].score;

  if (trend > 0) return "You're improving consistently 🚀";
  if (trend < 0) return "Your performance is dropping ⚠️";

  return "Stable performance";
}