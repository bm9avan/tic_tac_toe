import React, { useRef, useState } from "react";
import Clicker from "./Clicker";
import winner from "../functions/winner";
import Result from "./Result";
const Table = ({ p1, p2 }) => {
  const message = useRef(null);
  const [arr, setArr] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [turn, setturn] = useState(true);
  const [result, setResult] = useState(null);

  async function handelGame(i, j) {
    let temp;
    if (arr[i][j] === 0) {
      await setArr((pa) => {
        temp = structuredClone(pa);
        if (turn) {
          temp[i][j] = 1;
        } else {
          temp[i][j] = 2;
        }
        message.current = winner(temp);
        return temp;
      });
      if (message.current) {
        setResult(message.current);
        message.current = null;
      }
      setturn((pt) => !pt);
    } else {
      alert("please choose correct box");
    }
  }
  return (
    <>
      {result && <Result message={result} ok={() => setResult(null)} />}
      <h4>It's {turn ? `${p1} 'X'` : `${p2} 'O'`} turn</h4>
      <table>
        <tbody>
          {arr.map((row, i) => (
            <tr key={i}>
              {row.map((v, j) => (
                <td key={i.toString() + j.toString()}>
                  <Clicker onClick={() => handelGame(i, j)}>{v}</Clicker>
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
