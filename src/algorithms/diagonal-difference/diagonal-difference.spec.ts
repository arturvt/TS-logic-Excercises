import { diagonalDifference } from './diagonal-difference';

describe('Diagonal difference', () => {
  it('basic case', () => {
    const arr = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12]
    ];

    expect(diagonalDifference(arr)).toBe(15);
  });

  it('zero case', () => {
    const arr = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

    expect(diagonalDifference(arr)).toBe(0);
  });

  it('negative case', () => {
    const arr = [
      [-1, 0, 0],
      [0, -1, 0],
      [0, 0, -1]
    ];

    expect(diagonalDifference(arr)).toBe(2);
  });
});
