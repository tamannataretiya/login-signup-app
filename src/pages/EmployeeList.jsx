function EmployeeList() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "30px",
        }}
      >
        Employee Management System
      </h1>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#2563eb", color: "white" }}>
              <th style={{ padding: "12px" }}>Name</th>
              <th style={{ padding: "12px" }}>Email</th>
              <th style={{ padding: "12px" }}>Department</th>
              <th style={{ padding: "12px" }}>Skill</th>
              <th style={{ padding: "12px" }}>Edit</th>
              <th style={{ padding: "12px" }}>Delete</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: "12px" }}>Rahul Sharma</td>
              <td style={{ padding: "12px" }}>rahul@gmail.com</td>
              <td style={{ padding: "12px" }}>IT</td>
              <td style={{ padding: "12px" }}>React</td>
              <td style={{ padding: "12px" }}>
                <button
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
              </td>
              <td style={{ padding: "12px" }}>
                <button
                  style={{
                    backgroundColor: "#ef4444",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td style={{ padding: "12px" }}>Priya Patel</td>
              <td style={{ padding: "12px" }}>priya@gmail.com</td>
              <td style={{ padding: "12px" }}>HR</td>
              <td style={{ padding: "12px" }}>Communication</td>
              <td style={{ padding: "12px" }}>
                <button
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
              </td>
              <td style={{ padding: "12px" }}>
                <button
                  style={{
                    backgroundColor: "#ef4444",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td style={{ padding: "12px" }}>Amit Kumar</td>
              <td style={{ padding: "12px" }}>amit@gmail.com</td>
              <td style={{ padding: "12px" }}>Finance</td>
              <td style={{ padding: "12px" }}>Excel</td>
              <td style={{ padding: "12px" }}>
                <button
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
              </td>
              <td style={{ padding: "12px" }}>
                <button
                  style={{
                    backgroundColor: "#ef4444",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;