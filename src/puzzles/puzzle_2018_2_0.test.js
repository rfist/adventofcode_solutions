const exec = require('./puzzle_2018_2_0');

test('Year 2018, Day 1, puzzle 0', () => {
    expect(exec(`abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`)).toBe(12);
});
