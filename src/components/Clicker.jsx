import React from "react";

const Clicker = (props) => {
  return (
    <button {...props}>
      {props.children === 0 ? "_" : props.children === 1 ? "X" : "O"}
    </button>
  );
};

export default Clicker;
