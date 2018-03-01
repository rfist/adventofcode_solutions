function execute(input) {
    const applyInstructions = function (direction) {
        if (direction === '(') {
            applyInstructions.position += 1;
        }
        if (direction === ')') {
            applyInstructions.position -= 1;
        }
    };
    applyInstructions.position = 0;
    input.split('').forEach(symbol => applyInstructions(symbol));
    return applyInstructions.position;
}

module.exports = execute;
