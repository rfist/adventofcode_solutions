/* global test, expect */
const exec = require('./puzzle_2018_6_1');

test('Year 2018, Day 6, puzzle 1', () => {
  expect(exec(`1, 1
1, 6
8, 3
3, 4
5, 5
8, 9`, 1, 32)).toBe(16);
});

