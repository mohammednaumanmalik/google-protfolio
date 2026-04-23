import { useState } from "react";

function Admin() {
  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState("");
  const [data, setData] = useState([]);

  async function login() {
    if (pass !== "1234") {
      alert("Wrong password");
      return;
    }

    setAuth(true);

    const res = await fetch("/.netlify/functions/visitors");
    const json = await res.json();
    setData(json);
  }

  if (!auth)
    return (
      <div style={{ padding: 40 }}>
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>
    );

  return (
    <div style={{ padding: 40 }}>
      <h2>Visitor Data</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>IP</th>
            <th>City</th>
            <th>Country</th>
            <th>Device</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Time(sec)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => (
            <tr key={i}>
              <td>{v.ip}</td>
              <td>{v.city}</td>
              <td>{v.country}</td>
              <td>{v.device}</td>
              <td>{v.latitude}</td>
              <td>{v.longitude}</td>
              <td>{v.timeSpent}</td>
              <td>{new Date(v.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
