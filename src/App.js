import React from "react";
import "./App.css";

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: "800",
        paddingTop: "2rem",
      }}
    >
      <h1 className="title">Pokemon Search!</h1>
      <table width = "100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows will go here */}
          <tr>
            <td>Morena</td>
            <td>Human</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
