import React, { useState } from "react";
import "./App.css";
import Players from "./components/Players";
import Table from "./components/Table";

function App() {
  const [players, setPlayers] = useState({ p1: "Player 1", p2: "Player 2" });

  function handelNames(p1, p2) {
    setPlayers({ p1, p2 });
  }
  return (
    <>
      <h2>TIC TAC TOE</h2>
      <Players handelNames={handelNames} p1={players.p1} p2={players.p2} />
      <Table p1={players.p1} p2={players.p2} />
    </>
  );
}

export default App;
