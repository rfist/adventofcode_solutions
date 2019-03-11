/* global test, expect */
const exec = require('./puzzle_2018_5_1');

test('Year 2018, Day 5, puzzle 1', () => {
  expect(exec(`dabAcCaCBAcCcaDA`)).toBe(4);
});

