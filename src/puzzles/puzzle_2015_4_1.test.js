window.md5 = require('../vendor/md5.min');
let exec = require('./puzzle_2015_4_1');

test('Year 2015, Day 4, puzzle 1', () => {
    expect(exec('ckczppom')).toBe('3938038');
});