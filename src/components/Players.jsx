import React, { useState } from "react";
import "./Players.css";

const Player = ({ player, handelName, name }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div className={edit ? "player-edit" : "player"}>
      <label htmlFor="name" className="label">
        Player {player}:
      </label>
      {edit ? (
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            handelName(player, e.target.value);
          }}
          className="input"
        />
      ) : (
        <span className="name">{name}</span>
      )}
      <button onClick={() => setEdit((pe) => !pe)} className="edit-button">
        {edit ? "Save" : "Edit"}
      </button>
    </div>
  );
};

const Players = ({ handelNames, p1, p2 }) => {
  function handelName(no, p) {
    no === "1" ? (p1 = p) : (p2 = p);
    handelNames(p1, p2);
  }

  return (
    <>
      <Player player="1" handelName={handelName} name={p1} /> <span>X</span>
      <Player player="2" handelName={handelName} name={p2} /> <span>O</span>
    </>
  );
};

export default Players;
