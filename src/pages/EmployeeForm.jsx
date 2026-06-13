function EmployeeForm() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "20px",
          }}
        >
          Employee Management System
        </h1>

        <input
          type="text"
          placeholder="Employee Name"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />

        <input
          type="email"
          placeholder="Email Address"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />

        <select
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <option>Select Department</option>
          <option>HR</option>
          <option>IT</option>
          <option>Finance</option>
          <option>Marketing</option>
        </select>

        <select
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <option>Select Skill</option>
          <option>React</option>
          <option>Node.js</option>
          <option>PostgreSQL</option>
          <option>JavaScript</option>
        </select>

        <div style={{ marginBottom: "15px" }}>
          <label>Upload Profile Photo</label>
          <br />
          <input type="file" accept="image/*" />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Upload Resume</label>
          <br />
          <input type="file" />
        </div>

        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Save Employee
        </button>
      </div>
    </div>
  );
}

export default EmployeeForm;