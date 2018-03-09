const exec = require('./puzzle_2015_6_0.js');
    
    
test('Year 2015, Day 6, puzzle 0', () => {
    expect(exec('turn on 0,0 through 999,999')).toBe(1000000);
    expect(exec('toggle 0,0 through 999,0')).toBe(1000);
    expect(exec('turn on 499,499 through 500,500')).toBe(4);
});
