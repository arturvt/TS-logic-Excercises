/**
 * Given a string, find the length of the longest substring in it with no more than K distinct characters.
 * @param value
 * @param k
 * @returns
 */
export function longestSubstring(value: string, k: number): number {
  return solution01(value, k);
}

function solution01(value: string, k: number): number {
  let buffer = new Set();

  let response = 0;
  let maxBufferSize = 0;

  for (let i = 0; i < value.length; i++) {
    buffer.add(value[i]);
    // we hit the limit.
    if (buffer.size > k) {
      if (response < maxBufferSize) {
        response = maxBufferSize;
      }
      maxBufferSize = 1;
      buffer = new Set();
      buffer.add(value[i]); // starts with current element
    } else {
      maxBufferSize++;
    }
  }

  if (response < maxBufferSize) {
    response = maxBufferSize;
  }
  return response;
}
