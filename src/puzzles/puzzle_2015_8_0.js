function execute(input) {
    const inputs = input.split('\n');
    let totalCharactersInString = 0, totalCharactersInMemory = 0;
    inputs.forEach(s => {
        s = s.trim();
        totalCharactersInString += s.length;
        s = s.replace(/\\\"/gi, '0');
        s = s.replace(/\\\\/gi, '1');
        s = s.replace(/\\x../gi, 'ё');
        totalCharactersInMemory += (s.length - 2);
    });
    return (totalCharactersInString - totalCharactersInMemory);
}
    
module.exports = execute;
