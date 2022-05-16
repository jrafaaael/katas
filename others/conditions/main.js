function toCondition(arr) {
  const conditional = arr.reduce((acc, cur, idx) => {
    if (typeof cur === 'string') {
      return [...acc, cur];
    } else if (Array.isArray(cur)) {
      if (cur.some((item) => Array.isArray(item))) {
        const nestedCondition = toCondition(cur);
        return [...acc, `(${nestedCondition})`];
      }
      const conditional = `${cur[1]} ${cur[0]} ${cur[2]}`;
      if (acc.length < 2 && idx === 1) {
        return [conditional, ...acc];
      }
      return [...acc, conditional];
    }
  }, []);

  return conditional.flat().join(' ');
}
