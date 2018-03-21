const exec = require('./puzzle_2015_10_0.js');
    
    
test('Year 2015, Day 10, puzzle 0', () => {
    expect(exec(1)).toBe('11');
    expect(exec(11)).toBe('21');
    expect(exec(21)).toBe('1211');
    expect(exec(1211)).toBe('111221');
    expect(exec(111221)).toBe('312211');
    expect(exec(1, 5)).toBe('312211');
});
    