const R = require('ramda');
function execute(input) {
    const values = input.split(/\r?\n/).map(s => s.trim().split(''));
    const matches = [];
    values.forEach(v1 => {
        values.map(v2 => {
            if (v1 !== v2) {
                const diff = R.difference(v1, v2);
                if (diff.length === 1) {
                    let arr1 = [].concat(v1);
                    let arr2 = [].concat(v2);
                    const index = arr1.indexOf(diff[0]);
                    arr1.splice(index, 1);
                    arr2.splice(index, 1);
                    if (arr1.join('') === arr2.join('')){
                        matches.push(arr1.join(''));
                    }
                }
            }
        })
    });
    return matches[0];
}

module.exports = execute;
