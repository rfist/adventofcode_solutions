/* global test, expect */
const exec = require('./puzzle_2018_3_0');

test('Year 2018, Day 3, puzzle 0', () => {
  expect(exec(`#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`)).toBe(4);
});

