function execute(input) {
    input = input.split(/\r?\n/).map(v => v.split(',').map(Number));

    const xInput = [], yInput = [];
    const names = input.map( (value, index) => `location${index}`);
    input.forEach(([x, y]) => {
        xInput.push(x);
        yInput.push(y);
    });
    const minX = Math.min(...xInput),
        maxX = Math.max(...xInput),
        minY = Math.min(...yInput),
        maxY = Math.max(...yInput);

    const limitedAreas = input.map((coord, i) => {
        if (![minX, maxX].includes(coord[0]) &&
            ![minY, maxY].includes(coord[1])
        ) {
            return names[i];
        }
        return null
    }).filter(v => v !== null);

    const countDistance = ([x1, y1], [x2, y2]) => {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    };

    const locations = {};
    names.forEach(n => locations[n] = 0);
    for (let x = minX; x < maxX; x++) {
        for (let y = minY; y < maxY; y++) {
            let distances = input.map((coord, i) => ([countDistance([x, y], coord), i]));
            let sortedDistances = distances.sort((a, b) => a[0] - b[0]);
            let owner = '0';
            if (sortedDistances[0][0] !== sortedDistances[1][0]) {
                owner = names[sortedDistances[0][1]]
            }
            locations[owner]++;
        }
    }

    return Math.max(...limitedAreas.map(name => locations[name]));
}

module.exports = execute;
