function execute(input) {
    let result = 0;
    const instructions = input.split('');
    for (let i = 0; i < instructions.length; i++) {
        let direction = instructions[i];
        if (direction === '(') {
            result += 1;
        }
        if (direction === ')') {
            result -= 1;
        }
        if (result === -1) {
            return (i + 1);
        }
    }
    return instructions.length;
}

module.exports = execute;
