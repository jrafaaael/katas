const alphabetPosition = (str) =>
  str
    .toUpperCase()
    .replace(/[^A-Z]/gi, "")
    .split("")
    .map((letter) => letter.charCodeAt() - 64)
    .join(" ");