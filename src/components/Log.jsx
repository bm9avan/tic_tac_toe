import React from "react";
import "./Log.css";

const Log = ({ log, p1, p2, travel, current }) => {
  return (
    <span className="outLog">
      {log.map((game, i) => (
        <button
          className={`log ${i === current && "active"}`}
          key={i}
          onClick={() => travel(i)}
        >{`(${game[0]},${game[1]}) slected by ${
          i % 2 === 0 ? p1 + " 'X'" : p2 + " 'O'"
        }`}</button>
      ))}
    </span>
  );
};

export default Log;
