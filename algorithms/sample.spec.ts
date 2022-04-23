import { doTheMath } from './sample';

describe('sample test', () => {
  it('will test my sample', () => {
    console.log('hey!');
    expect(doTheMath(10, 20)).toBe(30);
  });
});
