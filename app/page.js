import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>Upgrade Your Life System</h1>
        <p>Track → Analyze → Improve</p>
        <a href="/dashboard">
          <button>Start Now</button>
        </a>
      </section>
    </>
  );
}