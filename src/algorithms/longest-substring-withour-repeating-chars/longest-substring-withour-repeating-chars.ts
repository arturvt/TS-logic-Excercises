/**
 * Given a string `s`, find the lenght of the longest substring without repeating chars.
 *
 * 0 <= s.lenght <=5 * 10**4
 *
 * @param s given string
 */
export function lengthOfLongestSubstring(s: string): number {
  if (s === '') {
    return 0;
  }
  return testFollowing(s, 1);
}

function testFollowing(s: string, currentMax: number): number {
  let buffer = new Set();
  for (let a = 0; a < s.length; a++) {
    if (!buffer.has(s[a])) {
      buffer.add(s[a]);
    } else {
      currentMax = testFollowing(s.slice(1), currentMax > buffer.size ? currentMax : buffer.size);
      break;
    }
  }
  return currentMax > buffer.size ? currentMax : buffer.size;
}
