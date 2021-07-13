const iqTest = (str) =>
  str
    .split(" ")
    .map((n) => +n % 2)
    .findIndex((v, _, a) => a.indexOf(v) === a.lastIndexOf(v)) + 1;
