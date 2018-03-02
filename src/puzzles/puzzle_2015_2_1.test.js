const exec = require('./puzzle_2015_2_1');

test('Year 2015, Day 2, puzzle 1 with one argument', () => {
    expect(exec("2x3x4")).toBe(34);
    expect(exec("1x1x10")).toBe(14);
});
