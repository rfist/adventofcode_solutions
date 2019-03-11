function execute(input, step, totalLimit = 10000) {
    input = input.split(/\r?\n/).map(v => v.split(',').map(Number));

    const xInput = [], yInput = [];
    input.forEach(([x, y]) => {
        xInput.push(x);
        yInput.push(y);
    });
    const minX = Math.min(...xInput),
        maxX = Math.max(...xInput),
        minY = Math.min(...yInput),
        maxY = Math.max(...yInput);

    const countDistance = ([x1, y1], [x2, y2]) => {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    };

    let requiredLocationsAmount = 0;
    for (let x = minX; x < maxX; x++) {
        for (let y = minY; y < maxY; y++) {
            const distances = input.map((coord, i) => countDistance([x, y], coord));
            const sum = distances.reduce((acc, curr) => acc + curr, 0);
            // console.log('sum', sum);
            if (sum < totalLimit) {
               requiredLocationsAmount++;
            }
        }
    }
    return requiredLocationsAmount;
}

module.exports = execute;
