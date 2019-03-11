/* global test, expect */
const exec = require('./puzzle_2018_8_1');

test('Year 2018, Day 8, puzzle 1', () => {
  expect(exec('2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2')).toBe(66);
});

