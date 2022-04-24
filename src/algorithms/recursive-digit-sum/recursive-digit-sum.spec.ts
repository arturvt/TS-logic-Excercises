import { superDigit } from './recursive-digit-sum';

describe('recursive-digit-sum', () => {
  it('basic case', () => {
    expect(superDigit('148', 1)).toBe(4);
    expect(superDigit('148', 2)).toBe(8);
    expect(superDigit('148', 3)).toBe(3);
  });

  it('second case', () => {
    expect(superDigit('9875', 4)).toBe(8);
  });

  it('third case', () => {
    expect(superDigit('123', 3)).toBe(9);
  });

  it('zero case', () => {
    expect(superDigit('123', 0)).toBe(0);
    expect(superDigit('0', 10000000)).toBe(0);
  });
});
