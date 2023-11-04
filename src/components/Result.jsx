import React from "react";
import "./Result.css";

const Result = ({ message, ok }) => {
  return (
    <div className="backdrop">
      <div className="result">
        <div className="message">{message}</div>
        <div className="outer">
          <button className="no btn" onClick={ok}>OK</button>
          <button className="yes btn" onClick={() => window.location.reload()}>
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
