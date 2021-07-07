const songDecoder = (song) =>
  song
    .split("WUB")
    .filter((word) => word !== "")
    .join(" ");