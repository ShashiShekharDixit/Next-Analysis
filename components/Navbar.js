export default function Navbar() {
  return (
    <nav className="nav">
      <h2>NextLevel</h2>
      <div>
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/add">Add</a>
        <a href="/insights">Insights</a>
      </div>
    </nav>
  );
}