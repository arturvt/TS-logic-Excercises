/*
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

export function makingAnagrams(s1: string, s2: string): number {
  // Write your code here
  const compareS1 = compare(s1, s2);
  const compareS2 = compare(s2, s1);
  return compareS1 + compareS2;
}

// Returns the new string already without the non anagrams
// TODO: Add the edge cases: s1 = 1 and s2 = 10000
function compare(s1: string, s2: string): number {
  let toBeDeleted = 0;
  let bufferS2 = s2;
  for (let a = 0; a < s1.length; a++) {
    const index = bufferS2.indexOf(s1[a]);
    if (index === -1) {
      toBeDeleted++;
    } else {
      bufferS2 = bufferS2.slice(0, index) + bufferS2.slice(index + 1);
    }
  }
  return toBeDeleted;
}
