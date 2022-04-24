import { lengthOfLongestSubstring } from './longest-substring-withour-repeating-chars';

describe('longest-substring-withour-repeating-chars', () => {
  it('basic case', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  it('second case case', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  it('third case', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('empty case', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
    expect(lengthOfLongestSubstring(' ')).toBe(1);
    expect(lengthOfLongestSubstring('  ')).toBe(1);
  });

  it('single case', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
    expect(lengthOfLongestSubstring('b')).toBe(1);
    expect(lengthOfLongestSubstring('cc')).toBe(1);
  });

  it('double case', () => {
    expect(lengthOfLongestSubstring('ab')).toBe(2);
    expect(lengthOfLongestSubstring('aab')).toBe(2);
    expect(lengthOfLongestSubstring('ba')).toBe(2);
    expect(lengthOfLongestSubstring('cx')).toBe(2);
  });

  it('digits case and space', () => {
    expect(lengthOfLongestSubstring('01')).toBe(2);
    expect(lengthOfLongestSubstring('23')).toBe(2);
    expect(lengthOfLongestSubstring('2 ')).toBe(2);
  });

  it('space digits and letters', () => {
    expect(lengthOfLongestSubstring(' a1s')).toBe(4);
    expect(lengthOfLongestSubstring('2 c4')).toBe(4);
    expect(lengthOfLongestSubstring('2x 1 ')).toBe(4);
  });

  it('tripple case', () => {
    expect(lengthOfLongestSubstring('dvdf')).toBe(3);
  });
});
