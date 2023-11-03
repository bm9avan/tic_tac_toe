import React, { useState } from "react";
import Clicker from "./Clicker";
import winner from "../functions/winner";
const Table = ({ p1, p2 }) => {
  const [arr, setArr] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [turn, setturn] = useState(true);

  function handelGame(i, j) {
    if (arr[i][j] === 0) {
      setArr((pa) => {
        let temp = structuredClone(pa);
        if (turn) {
          temp[i][j] = 1;
        } else {
          temp[i][j] = 2;
        }
        return temp;
      });
      setturn((pt) => !pt);
      winner(arr);
    } else {
      alert("please chose correct box");
    }
  }
  return (
    <>
      <h4>It's {turn ? `${p1} 'X'` : `${p2} 'O'`} turn</h4>
      <table>
        <tbody>
          {...arr.map((row, i) => (
            <tr key={i}>
              {row.map((v, j) => (
                <td key={i.toString() + j.toString()}>
                  <Clicker onClick={() => handelGame(i, j)}> {v} </Clicker>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
