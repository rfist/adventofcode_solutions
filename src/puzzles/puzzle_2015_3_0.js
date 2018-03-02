class VisitsRecorder {
    constructor(startLocation) {
        this.visitedHouses = {};
        this.addHouse(startLocation);
    }
    addHouse(loc) {
        const uniqueId = loc.x + '--' + loc.y;
        this.visitedHouses[uniqueId] ? this.visitedHouses[uniqueId]++ : this.visitedHouses[uniqueId] = 1;
    }
    getAmountOfVisitedHouses() {
        return Object.keys(this.visitedHouses).length;
    }
}

function execute(input) {
    const commands = Array.from(input);
    let loc = {'x': 0, 'y': 0 };
    const executeCommand = (command, loc) => {
        switch (command) {
            case '^':
                loc.y += 1;
                break;
            case 'v':
                loc.y -= 1;
                break;
            case '>':
                loc.x += 1;
                break;
            case '<':
                loc.x -= 1;
                break;
        }
    };
    const visitsRecorder = new VisitsRecorder(loc);
    commands.map(command => {
        executeCommand(command, loc);
        visitsRecorder.addHouse(loc);
    });
    return visitsRecorder.getAmountOfVisitedHouses();
}

module.exports = execute;
