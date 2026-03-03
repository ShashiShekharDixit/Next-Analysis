import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>About NextLevel</h1>

        <p>
          NextLevel is not just a tracker. It's a system designed to
          help you understand your behavior, improve consistency,
          and build discipline through data.
        </p>

        <p>
          Instead of guessing your progress, you measure it.
          Instead of motivation, you build systems.
        </p>
      </div>
    </>
  );
}