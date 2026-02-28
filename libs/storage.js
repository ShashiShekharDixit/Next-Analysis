export function saveEntry(entry) {
  const data = JSON.parse(localStorage.getItem("lifeData")) || [];
  data.push(entry);
  localStorage.setItem("lifeData", JSON.stringify(data));
}

export function getEntries() {
  return JSON.parse(localStorage.getItem("lifeData")) || [];
}