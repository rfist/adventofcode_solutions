const exec = require('./puzzle_2015_1_0');

test('Year 2015, Day 1, puzzle 0', () => {
    expect(exec("(((")).toBe(3);
    expect(exec("(()(()(")).toBe(3);
    expect(exec("(())")).toBe(0);
    expect(exec(")())())")).toBe(-3);
});
