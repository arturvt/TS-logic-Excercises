/**
 * Given a square matrix, calculate the absoulte difference between the sums of its diagonals.
 * For example:
 *   1 2 3
 *   4 5 6
 *   9 8 9
 * -> The left-to-right= 1 + 5 + 9 = 15. The right to left => 3 + 5 + 9 = 17
 * The absoulute diff: |15 - 17| = 2
 * @param arr
 * @returns
 */
// TODO: Add Prettier and onSave
export function diagonalDifference(arr: number[][]): number {
  let sumLeftRight = doSumLeftRight(arr);
  let sumRightLeft = doSumRightLeft(arr);
  return Math.abs(sumLeftRight - sumRightLeft);
}

function doSumLeftRight(arr: number[][]): number {
  let sumLeftRight = 0;
  for (let x = 0; x < arr.length; x++) {
    sumLeftRight += arr[x][x];
  }
  return sumLeftRight;
}

function doSumRightLeft(arr: number[][]): number {
  let sumRightLeft = 0;
  let arrSize = arr.length - 1;
  for (let y = 0; y < arr.length; y++) {
    let x = arrSize - y;
    sumRightLeft += arr[x][y];
  }
  return sumRightLeft;
}
