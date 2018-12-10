function execute(input) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const rules = [];

    letters.forEach((letter) => {
        rules.push(letter + letter.toLowerCase());
        rules.push(letter.toLowerCase() + letter);
    });

    let isChanged = true;
    while (isChanged) {
        const original = input;
        rules.forEach(pattern => input = input.replace(pattern, ''));
        if (input === original) {
            isChanged = false;
        }
    }

    return input.length;
}

module.exports = execute;
