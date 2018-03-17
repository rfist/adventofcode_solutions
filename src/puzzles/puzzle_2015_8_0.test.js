const exec = require('./puzzle_2015_8_0.js');
    
test('Year 2015, Day 8, puzzle 0', () => {
    let input = `
    ""
    "abc"
    "aaa\"aaa"
    "\x27"
    `;
    expect(exec(input)).toBe(12);
});
    