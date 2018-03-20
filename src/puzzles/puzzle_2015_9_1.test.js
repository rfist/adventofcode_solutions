const exec = require('./puzzle_2015_9_1.js');
    
    
test('Year 2015, Day 9, puzzle 1', () => {
    const input = `London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141
`;
    expect(exec(input)).toBe(982);
});
    