import { findKthLargest } from './largets-element-array';

describe('large-element-array', () => {
  it('basic case', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });

  it('other case', () => {
    const list = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6];
    expect(findKthLargest(list, 2)).toBe(10);
  });
});
