function Dashboard() {
  const stats = [
    { label: "Total Employees", value: 10, max: 10, color: "#2563eb" },
    { label: "Departments", value: 3, max: 10, color: "#16a34a" },
    { label: "Active Employees", value: 8, max: 10, color: "#f59e0b" },
    { label: "Pending Leaves", value: 2, max: 10, color: "#ef4444" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {stats.map((s, i) => (
          <div key={i} style={{ border: "1px solid black", padding: "15px", borderRadius: "8px", minWidth: "150px" }}>
            <h2>{s.label}</h2>
            <h3>{s.value}</h3>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "30px", backgroundColor: "white", padding: "20px", borderRadius: "10px", border: "1px solid #ddd" }}>
        <h3>Department-wise Statistics</h3>
        {stats.map((s, i) => (
          <div key={i} style={{ marginBottom: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
              <span>{s.label}</span>
              <span>{s.value}</span>
            </div>
            <div style={{ backgroundColor: "#e5e7eb", borderRadius: "5px", height: "12px", width: "100%" }}>
              <div
                style={{
                  backgroundColor: s.color,
                  height: "12px",
                  borderRadius: "5px",
                  width: `${(s.value / s.max) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;