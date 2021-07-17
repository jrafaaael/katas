const bingo = (arr, toWin) =>
  arr.filter((subarr) => subarr[0].includes(String.fromCharCode(subarr[1])))
    .length >= toWin
    ? "Winner!"
    : "Loser!";
