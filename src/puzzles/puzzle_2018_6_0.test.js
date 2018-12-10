/* global test, expect */
const exec = require('./puzzle_2018_6_0');

test('Year 2018, Day 6, puzzle 0', () => {
  expect(exec(`1, 1
1, 6
8, 3
3, 4
5, 5
8, 9`)).toBe(17);
});

