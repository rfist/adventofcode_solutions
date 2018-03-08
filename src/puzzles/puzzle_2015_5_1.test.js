const exec = require('./puzzle_2015_5_1.js');
    
test('Year 2015, Day 5, puzzle 1', () => {
    expect(exec('qjhvhtzxzqqjkmpb')).toBe(1);
    expect(exec('xxyxx')).toBe(1);
    expect(exec('uurcxstgmygtbstg')).toBe(0);
    expect(exec('ieodomkazucvgmuy')).toBe(0);
});
    