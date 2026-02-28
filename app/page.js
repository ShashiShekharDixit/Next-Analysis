import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1 className="hero-title">
          Build Your Life Like a System
        </h1>

        <p className="hero-sub">
          Track habits. Analyze patterns. Predict your future.
        </p>

        <div className="hero-buttons">
          <a href="/dashboard">
            <button>Enter Dashboard</button>
          </a>
          <a href="/add">
            <button className="secondary">Start Tracking</button>
          </a>
        </div>
      </section>
    </>
  );
}