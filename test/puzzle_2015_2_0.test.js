const exec = require('../src/puzzles/puzzle_2015_2_0');

test('Year 2015, Day 2, puzzle 1 with one argument', () => {
    expect(exec("2x3x4")).toBe(58);
    expect(exec("1x1x10")).toBe(43);
});

test('Year 2015, Day 2, puzzle 1 with multiple arguments', () => {
    expect(exec(`2x3x4
                1x1x10`)).toBe(101);
});
