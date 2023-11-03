import React from 'react'

const Clicker = (props) => {
  return (
    <button {...props}>
      {props.children[1] === 0 ? "_": props.children[1] === 1 ? "X" : "O"}
    </button>
  )
}

export default Clicker
