import React from "react";

import Pokemonlist from "./Pokemonlist.js";

function Dashboard() {
  return (
    <div className="col">
      <div className="row">
        <Pokemonlist />
      </div>
    </div>
  );
}

export default Dashboard;
