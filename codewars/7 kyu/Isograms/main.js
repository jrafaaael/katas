const isIsogram = (str) =>
  !str
    .split('')
    .map((letter) => letter.toLowerCase())
    .some((letter, i, arr) => arr.slice(i + 1).includes(letter));
