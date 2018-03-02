function execute(input) {
    const values = input.split('\n');

    const findRequiredLength = (input) => {
        let [w, h, l] = input.split('x').sort( (a,b) => a - b);
        return 2 * w + 2 * h + w * h * l;
    };
    return values.map(findRequiredLength).reduce((a, b) => a + b, 0);
}

module.exports = execute;
