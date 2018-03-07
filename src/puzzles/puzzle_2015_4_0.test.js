window.md5 = require('../vendor/md5.min');
let exec = require('./puzzle_2015_4_0');

test('Year 2015, Day 4, puzzle 0', () => {
    expect(exec('abcdef')).toBe('609043');
    expect(exec('pqrstuv')).toBe('1048970');
});