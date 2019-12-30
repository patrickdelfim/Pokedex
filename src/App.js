import React from "react";
import Navbar from "./Nav.js";
import "./App.css";

import Dashboard from "./Dashboard.js";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
