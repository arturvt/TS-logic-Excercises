import { longestSubstring } from './longest-substring-with-max-k-distinct-elements';

describe('Longest Substring with maximum K Distinct Characters', () => {
  it('basic case', () => {
    expect(longestSubstring('araaci', 2)).toBe(4); // 'araa'
    expect(longestSubstring('araaci', 1)).toBe(2); // 'aa'
  });

  it('another case', () => {
    expect(longestSubstring('cbbebi', 3)).toBe(5); // 'cbbeb' && 'bbebi'
  });

  it('bigger than string', () => {
    expect(longestSubstring('cbbebi', 10)).toBe(6); // 'cbbebi'
  });
});
