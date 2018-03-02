const exec = require('./puzzle_2015_3_1');

test('Year 2015, Day 3, puzzle 1', () => {
    expect(exec('^v')).toBe(3);
    expect(exec('^>v<')).toBe(3);
    expect(exec('^v^v^v^v^v')).toBe(11);
});