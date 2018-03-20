const exec = require('./puzzle_2015_9_0.js');
    
    
test('Year 2015, Day 9, puzzle 0', () => {
    const input = `London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141
`;
    expect(exec(input)).toBe(605);
});
    