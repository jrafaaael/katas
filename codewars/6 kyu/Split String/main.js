const split = (str) => {
  const list = str.split("").reduce((acc, cur, idx) => {
    if (idx % 2 === 0) {
      acc.push(cur);
    } else {
      acc[acc.length - 1] += cur;
    }
    return acc;
  }, []);
  if (str.length % 2 !== 0) {
    list[list.length - 1] += '_';
  }
  return list;
};
