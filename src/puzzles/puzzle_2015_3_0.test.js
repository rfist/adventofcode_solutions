const exec = require('./puzzle_2015_3_0');

test('Year 2015, Day 3, puzzle 0', () => {
    expect(exec('>')).toBe(2);
    expect(exec('^>v<')).toBe(4);
    expect(exec('^v^v^v^v^v')).toBe(2);
});