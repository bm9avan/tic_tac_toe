export default function winner(arr) {
  console.log(arr);
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

  for (let i = 0; i < arr.length; i++) {
    let j;
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) break;
      if (j === 2 && i === 2) {
        return "no Winner no losser";
      }
    }
    console.log(i, j, arr.length);
    if (j !== 2 || arr[i][j] === 0) break;
  }
}
