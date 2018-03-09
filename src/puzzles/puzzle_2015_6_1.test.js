const exec = require('./puzzle_2015_6_1.js');
    
test('Year 2015, Day 6, puzzle 1', () => {
    expect(exec('turn on 0,0 through 0,0')).toBe(1);
    expect(exec('toggle 0,0 through 999,999')).toBe(2000000);
});
    