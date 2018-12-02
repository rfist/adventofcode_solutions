const R = require('ramda');
function execute(input) {
    const values = input.split(/\r?\n/).map(s => s.trim());
    const count = v => R.values(R.countBy(R.toLower)(v));
    const duplicates = {two: 0, three: 0};
    values.forEach(x => {
       const results = count(x);
       if (results.includes(2)) {
           duplicates.two++;
       }
        if (results.includes(3)) {
            duplicates.three++;
        }
    });
    return duplicates.two * duplicates.three;
}

module.exports = execute;
