/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

export function superDigit(n: string, k: number): number {
  // 1st, avoid the 0 cases
  if (+n === 0) {
    return 0;
  }

  // remove the 0s from n as they sum is 0
  n = n.replace(/0/g, '');

  const superDigitBeforeConcatenation = calculateSuperDigit(n);
  const concatenation = superDigitBeforeConcatenation.repeat(k);
  const superDigit = calculateSuperDigit(concatenation);

  return +superDigit;
}

function calculateSuperDigit(concatenation: string): string {
  if (concatenation.length > 1) {
    let superDigit = 0;
    for (let a = 0; a < concatenation.length; a++) {
      superDigit += +concatenation[a];
    }
    return calculateSuperDigit(`${superDigit}`);
  } else {
    return concatenation;
  }
}
