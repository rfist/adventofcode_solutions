const exec = require('./puzzle_2015_7_0.js');

test('Year 2015, Day 7, puzzle 0', () => {
    const answer = exec(`
        123 -> x
        456 -> y
        x AND y -> d
        x OR y -> e
        x LSHIFT 2 -> f
        y RSHIFT 2 -> g
        NOT x -> h
        NOT y -> i
    `);
    expect(answer.d.getValue()).toBe(72);
    expect(answer.e.getValue()).toBe(507);
    expect(answer.f.getValue()).toBe(492);
    expect(answer.g.getValue()).toBe(114);
    expect(answer.h.getValue()).toBe(65412);
    expect(answer.i.getValue()).toBe(65079);
    expect(answer.x.getValue()).toBe(123);
    expect(answer.y.getValue()).toBe(456);
});
