const R = require('ramda');

function execute(input) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const results = [];
    letters.forEach(letter => {
        let result = input.split(letter).join('').split(letter.toLowerCase()).join('');
        results.push([letter, extract(result)])
    });
    const answer  = R.sort( (a,b) => (a[1] - b[1]), results)[0];
    return answer[1];
}

function extract(input) {
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
