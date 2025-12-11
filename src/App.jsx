// src/App.jsx
import React from "react";

export default function App() {
  return (
    <div style={{ padding: 30, fontFamily: "Inter, Arial, sans-serif", background: "#f3f6fb", minHeight: "100vh" }}>
      <header style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <h1 style={{ margin: 0 }}>Mansour's Meat Sales Analysis (Test)</h1>
      </header>

      <main style={{ marginTop: 24 }}>
        <p>This is a simple test App to verify build works on Vercel.</p>
        <div style={{ background: "#fff", padding: 20, borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <h2>KPIs</h2>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ padding: 12, background: "#eef2ff", borderRadius: 8 }}>Total Revenue: EGP 0</div>
            <div style={{ padding: 12, background: "#effaf5", borderRadius: 8 }}>Total Weight: 0 kg</div>
          </div>
        </div>
      </main>
    </div>
  );
}
