/* global test, expect */
const exec = require('./puzzle_2018_9_0');

test('Year 2018, Day 9, puzzle 0', () => {
  expect(exec('10 players; last marble is worth 1618 points')).toBe(8317);
  expect(exec('13 players; last marble is worth 7999 points')).toBe(146373);
  expect(exec('21 players; last marble is worth 6111 points')).toBe(54718);
  expect(exec('30 players; last marble is worth 5807 points')).toBe(37305);
  expect(exec('427 players; last marble is worth 70723 points')).toBe(37305);
});

