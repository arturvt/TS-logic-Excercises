import { makingAnagrams } from './making-anagrams';

describe('making-anagrams', () => {
  it('example case', () => {
    const s1 = 'abc';
    const s2 = 'amnop';
    expect(makingAnagrams(s1, s2)).toBe(6);
  });

  it('basic case', () => {
    const s1 = 'cde';
    const s2 = 'abc';
    expect(makingAnagrams(s1, s2)).toBe(4);
  });

  it('minimum case', () => {
    const s1 = 'a';
    const s2 = 'b';
    expect(makingAnagrams(s1, s2)).toBe(2);
  });

  it('edge case', () => {
    const s1 = 'a';
    const s2 = 'b'.repeat(10000);
    expect(makingAnagrams(s1, s2)).toBe(10001);
  });
});
