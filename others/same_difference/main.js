function sameDifference(arr) {
  if (arr.length <= 2) {
    return true;
  }

  const firstNumber = arr.at(0);
  const secondNumber = arr.at(1);
  const diff = firstNumber - secondNumber;
  const twoDecimalDiff = Number(diff.toFixed(2));

  for ([idx, num] of arr.entries()) {
    const nextNumber = arr.at(idx + 1);
    const currentDiff = num - nextNumber;
    const twoDecimalCurrentDiff = Number(currentDiff.toFixed(2));

    if (!nextNumber) {
      break;
    }

    if (twoDecimalDiff !== twoDecimalCurrentDiff) {
      return false;
    }
  }

  return true;
}

console.log(sameDifference([1, 3, 5]));
console.log(sameDifference([194, 54, 23, 7, 3, 6, 8]));
console.log(sameDifference([-2.3, -1.1, 0.1, 1.3, 2.5, 3.7]));
