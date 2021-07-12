const balance = (st1, st2) => {
  const sum1 = st1.split("").reduce((acc, cV) => acc + (cV === "!" ? 2 : 3), 0);
  const sum2 = st2.split("").reduce((acc, cV) => acc + (cV === "!" ? 2 : 3), 0);

  if (sum1 === sum2) return "Balance";
  else return sum1 > sum2 ? "Left" : "Right";
};
