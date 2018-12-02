const exec = require('./puzzle_2018_1_1');

test('Year 2018, Day 1, puzzle 0', () => {
    expect(exec("+1, -1", 1, ',')).toBe(0);
    expect(exec("+3, +3, +4, -2, -4", 1, ',')).toBe(10);
    expect(exec("-6, +3, +8, +5, -6", 1, ',')).toBe(5);
    expect(exec("+7, +7, -2, -7, -4", 1, ',')).toBe(14);
});
