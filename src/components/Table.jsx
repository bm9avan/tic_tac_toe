import React, { useRef, useState } from "react";
import Clicker from "./Clicker";
import winner from "../functions/winner";
import Result from "./Result";
import Log from "./Log";
import "./Table.css";

const Table = ({ p1, p2 }) => {
  const message = useRef(null);
  const [result, setResult] = useState(null);
  const [log, setLog] = useState([]);
  const [history, setHistory] = useState(null);
  const arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  const dis = (history && history.arr) || log;
  for (let i = 0; i < dis.length; i++) {
    const [r, c] = dis[i];
    arr[r][c] = i % 2 === 0 ? 1 : 2;
  }
  const turn = dis.length % 2 === 0;

  async function handelGame(i, j) {
    if (arr[i][j] === 0) {
      if (!history) {
        await setLog((pa) => {
          arr[i][j] = log.length % 2 === 0 ? 1 : 2;
          message.current = winner(arr);
          return [...pa, [i, j]];
        });
      } else {
        await setLog((pa) => {
          const temp = history.arr;
          arr[i][j] = temp.length % 2 === 0 ? 1 : 2;
          message.current = winner(arr);
          return [...temp, [i, j]];
        });
        setHistory(null);
      }
      if (message.current) {
        setResult(message.current);
        message.current = null;
      }
    } else {
      alert("Please choose correct box");
    }
  }

  function handelTravel(i) {
    const temp = [];
    for (let k = 0; k <= i; k++) {
      temp[k] = [...log[k]];
    }
    setHistory({ arr: temp, i });
  }

  function diplayGame() {
    for (let k = 0; k < log.length; k++) {
      setTimeout(() => {
        handelTravel(k);
      }, 1000 * k);
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
      {log.length ? (
        <div className="gameOut">
          <button onClick={diplayGame} className="displayGame">
            DisplayGame
          </button>
          <button
            onClick={() => window.location.reload()}
            className="displayGame"
          >
            NewGame
          </button>
        </div>
      ) : (
        ""
      )}
      <Log
        log={log}
        p1={p1}
        p2={p2}
        travel={handelTravel}
        current={history && history.i}
      />
    </>
  );
};

export default Table;
