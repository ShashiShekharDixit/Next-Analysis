export default function Navbar() {
  return (
    <div style={{
      margin: "20px",
      padding: "15px 25px",
      borderRadius: "15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
    }}>
      <h2 style={{
        background: "linear-gradient(90deg,#38bdf8,#a78bfa)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        NextLevel
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <span>Dashboard</span>
        <span>Add Entry</span>
      </div>
    </div>
  );
}