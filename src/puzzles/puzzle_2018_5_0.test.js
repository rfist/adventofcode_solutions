/* global test, expect */
const exec = require('./puzzle_2018_5_0');

test('Year 2018, Day 5, puzzle 0', () => {
  expect(exec(`dabAcCaCBAcCcaDA`)).toBe(10);
});

