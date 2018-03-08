const exec = require('./puzzle_2015_5_0.js');
    
    
test('Year 2015, Day 5, puzzle 0', () => {
    expect(exec('ugknbfddgicrmopn')).toBe(1);
    expect(exec('aaa')).toBe(1);
    expect(exec('jchzalrnumimnmhp')).toBe(0);
    expect(exec('haegwjzuvuyypxyu')).toBe(0);
    expect(exec('dvszwmarrgswjxmb')).toBe(0);
});
    