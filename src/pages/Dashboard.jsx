function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ border: "1px solid black", padding: "20px" }}>
          <h2>Total Employees</h2>
          <h3>10</h3>
        </div>

        <div style={{ border: "1px solid black", padding: "20px" }}>
          <h2>Departments</h2>
          <h3>3</h3>
        </div>

        <div style={{ border: "1px solid black", padding: "20px" }}>
          <h2>Active Employees</h2>
          <h3>8</h3>
        </div>

        <div style={{ border: "1px solid black", padding: "20px" }}>
          <h2>Pending Leaves</h2>
          <h3>2</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;