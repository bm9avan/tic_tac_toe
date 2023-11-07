export default function winner(arr) {
  for (let i = 0; i < arr.length; i++) {
    let e1 = arr[i][0];
    let e2 = arr[0][i];
    for (let j = 1; j < arr[i].length; j++) {
      if (e1 !== arr[i][j] || e1 === 0) break;
      if (j === 2) {
        return `${e1 === 1 ? "X" : "O"} won`;
      }
    }
    for (let j = 1; j < arr[i].length; j++) {
      if (e2 !== arr[j][i] || e2 === 0) break;
      if (j === 2) {
        return `${e2 === 1 ? "X" : "O"} won`;
      }
    }
  }

  if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
    if (arr[0][0] !== 0) {
      return `${arr[0][0] === 1 ? "X" : "O"} won`;
    }
  }

  if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
    if (arr[0][2] !== 0) {
      return `${arr[0][2] === 1 ? "X" : "O"} won`;
    }
  }

  let no = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) no = false;
    }
  }
  if (no) return "No winner no losser";
}
