/**
 * Returns tne Kth biggest element of the given array
 * @param nums
 * @param k
 * @returns
 */
export function findKthLargest(nums: number[], k: number): number {
  return easySolution(nums, k);
}

function easySolution(nums: number[], k: number): number {
  const sorted = nums.sort((a, b) => a - b);
  return sorted[nums.length - k];
}
