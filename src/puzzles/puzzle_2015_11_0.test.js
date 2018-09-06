const { check, exec } = require('./puzzle_2015_11_0.js');
    
    
test('Year 2015, Day 11, puzzle 0', () => {
  expect(check('hijklmmn')).toBe(false);
  expect(check('abbceffg')).toBe(false);
  expect(check('abcdffaa')).toBe(true);
  expect(exec('abcdefgh')).toBe('abcdffaa');
  expect(exec('ghijklmn')).toBe('ghjaabcc');
});
