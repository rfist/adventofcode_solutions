const R = require('ramda');

function execute(input) {
    const values = input.split('\n');

    const convert = (raw) => {
        const [time, action] = raw.split(']');
        const date = new Date(time.replace('[', ''));
        return {date, action};
    };

    const diff = function(a, b) { return a.date.valueOf() - b.date.valueOf(); };
    const converted = R.sort(diff, values.map(convert)); //=> [2, 4, 5, 7]

    let summary = {};
    let tempObj;
    converted.forEach(item => {
        if (item.action.includes('begins')) {
            tempObj = {};
            tempObj.id = +item.action.match(/\d+/g)[0];
            if (!summary[tempObj.id]) {
                summary[tempObj.id] = {sleeps: 0, timing: [], id: tempObj.id}
            }
        }
        if (item.action.includes('asleep')) {
            tempObj.asleep = item.date;
        }
        if (item.action.includes('wakes')) {
            const minutStart = tempObj.asleep.getMinutes();
            const minutFinish = item.date.getMinutes();
            if (minutStart > minutFinish) {
                console.log('alarm!!!!');
            }
            let timing = [];
            for (let i = minutStart; i < minutFinish; i++) {
                timing.push(i);
            }
            summary[tempObj.id].timing.push(timing);
            summary[tempObj.id].sleeps += ((item.date.valueOf() - tempObj.asleep.valueOf()) / (60 * 1000));
        }
    });

    const sleepySort = (a, b) =>  b.sleeps - a.sleeps;
    let sleepingGuard = R.sort(sleepySort, Object.values(summary))[0];

    const findMostSleepingMinutes = (arr) => {
        let counts = {}, joinedArr = [];
        arr.forEach(a => joinedArr = joinedArr.concat(a));
        joinedArr.forEach(function (x) {
            counts[x] = (counts[x] || 0) + 1;
        });
        const sortByAmount = (a, b) => b[1] - a[1];
        let highestSleepingRatio = R.sort(sortByAmount, Object.entries(counts))[0];
        return +highestSleepingRatio[0];
    };

    const result = findMostSleepingMinutes(sleepingGuard.timing);
    return result * sleepingGuard.id;
}

module.exports = execute;
