import { useState } from "react";

function AssetManagement() {
  const [assetName, setAssetName] = useState("");
  const [assetType, setAssetType] = useState("");
  const [assignedEmployee, setAssignedEmployee] = useState("");
  const [assets, setAssets] = useState([]);
  const [returnedAssets, setReturnedAssets] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [auditTrail, setAuditTrail] = useState([]);

  const addNotification = (message) => {
    setNotifications([{ message, time: new Date().toLocaleTimeString() }, ...notifications]);
  };

  const addAudit = (action, oldValue, newValue) => {
    setAuditTrail([
      {
        action,
        oldValue: oldValue || "-",
        newValue: newValue || "-",
        time: new Date().toLocaleString(),
      },
      ...auditTrail,
    ]);
  };

  const handleAssign = () => {
    if (!assetName || !assetType || !assignedEmployee) {
      alert("Please fill all fields");
      return;
    }
    const newAsset = { assetName, assetType, assignedEmployee };
    setAssets([...assets, newAsset]);
    addNotification(`${assetType} "${assetName}" assigned to ${assignedEmployee}`);
    addAudit(
      "Asset Assigned",
      "Unassigned",
      `${assetType} "${assetName}" -> ${assignedEmployee}`
    );
    setAssetName("");
    setAssetType("");
    setAssignedEmployee("");
  };

  const handleReturn = (index) => {
    const returned = assets[index];
    setReturnedAssets([...returnedAssets, returned]);
    setAssets(assets.filter((_, i) => i !== index));
    addNotification(`${returned.assetType} "${returned.assetName}" returned by ${returned.assignedEmployee}`);
    addAudit(
      "Asset Returned",
      `${returned.assetType} "${returned.assetName}" assigned to ${returned.assignedEmployee}`,
      "Returned / Unassigned"
    );
  };

  const exportToCSV = () => {
    let csv = "Asset Name,Type,Assigned Employee\n";
    assets.forEach((a) => {
      csv += `${a.assetName},${a.assetType},${a.assignedEmployee}\n`;
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "asset_report.csv";
    link.click();
  };

  return (
    <div style={{ padding: "30px", backgroundColor: "#f4f6f9", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#2563eb" }}>Asset Management System</h1>

      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Asset Name"
          value={assetName}
          onChange={(e) => setAssetName(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <select
          value={assetType}
          onChange={(e) => setAssetType(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        >
          <option value="">Select Asset Type</option>
          <option value="Laptop">Laptop</option>
          <option value="Monitor">Monitor</option>
          <option value="ID Card">ID Card</option>
        </select>

        <input
          type="text"
          placeholder="Assigned Employee"
          value={assignedEmployee}
          onChange={(e) => setAssignedEmployee(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleAssign}
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Assign Asset
          </button>
        </div>
      </div>

      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
        <h3>Assigned Assets</h3>
        <button
          onClick={exportToCSV}
          style={{
            backgroundColor: "#16a34a",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          Export to CSV
        </button>
        {assets.length === 0 ? (
          <p>No assets assigned yet.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Asset Name</th>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Type</th>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Assigned To</th>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((a, i) => (
                <tr key={i}>
                  <td style={{ padding: "8px" }}>{a.assetName}</td>
                  <td style={{ padding: "8px" }}>{a.assetType}</td>
                  <td style={{ padding: "8px" }}>{a.assignedEmployee}</td>
                  <td style={{ padding: "8px" }}>
                    <button
                      onClick={() => handleReturn(i)}
                      style={{
                        backgroundColor: "#ef4444",
                        color: "white",
                        border: "none",
                        padding: "6px 12px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Return
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
        <h3>Returned Assets</h3>
        {returnedAssets.length === 0 ? (
          <p>No assets returned yet.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Asset Name</th>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Type</th>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Previously Assigned To</th>
              </tr>
            </thead>
            <tbody>
              {returnedAssets.map((a, i) => (
                <tr key={i}>
                  <td style={{ padding: "8px" }}>{a.assetName}</td>
                  <td style={{ padding: "8px" }}>{a.assetType}</td>
                  <td style={{ padding: "8px" }}>{a.assignedEmployee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
        <h3>Notifications</h3>
        {notifications.length === 0 ? (
          <p>No notifications yet.</p>
        ) : (
          <ul style={{ paddingLeft: "20px" }}>
            {notifications.map((n, i) => (
              <li key={i} style={{ marginBottom: "8px" }}>
                {n.message} <span style={{ color: "#888", fontSize: "12px" }}>({n.time})</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
        <h3>Audit Trail</h3>
        {auditTrail.length === 0 ? (
          <p>No audit records yet.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Action</th>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Old Value</th>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>New Value</th>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Time</th>
              </tr>
            </thead>
            <tbody>
              {auditTrail.map((entry, i) => (
                <tr key={i}>
                  <td style={{ padding: "8px" }}>{entry.action}</td>
                  <td style={{ padding: "8px" }}>{entry.oldValue}</td>
                  <td style={{ padding: "8px" }}>{entry.newValue}</td>
                  <td style={{ padding: "8px", fontSize: "12px", color: "#888" }}>{entry.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AssetManagement;