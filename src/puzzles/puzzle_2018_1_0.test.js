const exec = require('./puzzle_2018_1_0');

test('Year 2018, Day 1, puzzle 0', () => {
    expect(exec("+1, +1, +1", ',')).toBe(3);
    expect(exec("+1, +1, -2", ',')).toBe(0);
    expect(exec("-1, -2, -3", ',')).toBe(-6);
});
