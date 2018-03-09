const fs = require('fs');
const [,, year, day, puzzlesAmount = 2] = process.argv;
const path = __dirname + "\\..\\src\\puzzles\\";

for (let puzzleNumber = 0; puzzleNumber < puzzlesAmount; puzzleNumber++) {
    const codeTemplate =
`function execute(input) {
     return -1;
}
    
module.exports = execute;
`;
    const testTemplate =
`const exec = require('./puzzle_${year}_${day}_${puzzleNumber}.js');
    
    
test('Year ${year}, Day ${day}, puzzle ${puzzleNumber}', () => {
    expect(exec(1)).toBe(1);
});
    `;

fs.writeFile(`${path}puzzle_${year}_${day}_${puzzleNumber}.js`, codeTemplate, (err) => {
    if (err) throw err;
    console.log(`File ${path}puzzle_${year}_${day}_${puzzleNumber}.js has been generated!`);
});
fs.writeFile(`${path}puzzle_${year}_${day}_${puzzleNumber}.test.js`, testTemplate, (err) => {
    if (err) throw err;
    console.log(`File ${path}puzzle_${year}_${day}_${puzzleNumber}.test.js has been generated!`);
});
}
