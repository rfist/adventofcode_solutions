const exec = require('./puzzle_2018_2_1');

test('Year 2018, Day 2, puzzle 1', () => {
    expect(exec(`abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`)).toBe('fgij');
});
