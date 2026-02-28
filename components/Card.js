import TiltCard from "./TiltCard";
export default function Card({ title, value, icon }) {
  return (
    <TiltCard>
      <div style={{ fontSize: "28px", marginBottom: "10px" }}>
        {icon}
      </div>

      <h3 style={{ opacity: 0.7 }}>{title}</h3>
      <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
        {value}
      </h2>
    </TiltCard>
  );
}