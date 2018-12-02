function execute(input, puzzle, delimiter) {
    const values = input.split(delimiter ? delimiter : /\r?\n/).map(Number);
    let results = [ 0 ], searchedFrequency = null, startPoint = 0;
    while (searchedFrequency === null) {
        startPoint = values.map(Number).reduce((a, b, i, arr) => {
            const result = a + b;
            if (results.includes(result)) {
                searchedFrequency = result;
                arr.splice(1);
                return result;
            } else {
                results.push(result);
            }
            return result;
        }, startPoint);
    }
    return searchedFrequency;
}

module.exports = execute;
