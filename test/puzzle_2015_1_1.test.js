const exec = require('../src/puzzles/puzzle_2015_1_1');

test('Year 2015, Day 1, puzzle 1', () => {
    expect(exec(")")).toBe(1);
    expect(exec("()())")).toBe(5);
});