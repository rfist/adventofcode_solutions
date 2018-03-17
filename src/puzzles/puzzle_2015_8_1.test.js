const exec = require('./puzzle_2015_8_1.js');

test('Year 2015, Day 8, puzzle 1', () => {
    let input = `
    ""
    "abc"
    "aaa\\"aaa"
    "\\x27"
    `    ;
    expect(exec(input)).toBe(19);
});
    