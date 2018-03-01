function execute(input) {
    const values = input.split('\n');
    const findRequiredArea = (input) => {
        let [w, h, l] = input.split('x');
        const areas = [2 * l * w, 2 * w * h, 2 * h * l];
        areas.push((Math.min(...areas)) / 2);
        return areas.reduce((a, b) => a + b, 0);
    };
    return values.map(findRequiredArea).reduce((a, b) => a + b, 0);
}

module.exports = execute;
