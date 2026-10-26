import "./stats.css";

const stats = [
  { value: "7", label: "Projects built" },
  { value: "10+", label: "Technologies used" },
  { value: "3", label: "Development areas" },
];

function Stats() {
  return (
    <section className="stats" aria-label="Portfolio achievements">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;