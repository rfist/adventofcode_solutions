function execute(input) {
    const inputs = input.split('\n');
    let totalCharactersInOriginalString = 0, totalCharactersInEncryptedString = 0;
    inputs.forEach(s => {
        s = s.trim();
        if (s.length > 0) {
             const originalString = s;
             totalCharactersInOriginalString += s.length;
             s = s.replace(/\\/gi, '\\\\');
             s = s.replace(/"/gi, '\\"');
             s = '"' + s + '"';
             console.log(originalString, s, s.length);
             totalCharactersInEncryptedString += s.length;
        }
    });
    return (totalCharactersInEncryptedString - totalCharactersInOriginalString);
}
    
module.exports = execute;
