function execute(input) {
    const inputs = input.trim().split('\n');

    const cities = [];
    const paths = {};
    const routes = [];
    inputs.forEach( inp => {
        let [city1,,city2,,distance] = inp.split(' ');
        if (!cities.includes(city1)) cities.push(city1);
        if (!cities.includes(city2)) cities.push(city2);
        paths[city1 + '_' + city2] = distance;
    });

    const buildRoute = (city, totalPath, remainsCities) => {
        if (remainsCities.length === 0) {
            routes.push(Array.from(totalPath));
        } else {
            remainsCities.forEach(remainCity => {
                let name1 = city + '_' + remainCity;
                if (paths[name1]) {
                    let newTotalPath = Array.from(totalPath);
                    newTotalPath.push([name1, paths[name1]]);
                    let newArray = [];
                    for (let i = 0; i < remainsCities.length; i++) {
                        if (remainCity !== remainsCities[i]) {
                            newArray.push(remainsCities[i]);
                        }
                    }
                    buildRoute(remainCity, Array.from(newTotalPath), newArray);
                }
                let name2 = remainCity + '_' + city;
                if (paths[name2]) {
                    let newTotalPath = Array.from(totalPath);
                    newTotalPath.push([name2, paths[name2]]);
                    let newArray = [];
                    for (let i = 0; i < remainsCities.length; i++) {
                        if (remainCity !== remainsCities[i]) {
                            newArray.push(remainsCities[i]);
                        }
                    }
                    buildRoute(remainCity, Array.from(newTotalPath), newArray);
                }
            })
        }

    };

    cities.map(city => {
        let remainsCities = [];
        for (let i = 0; i < cities.length; i++) {
            if (city !== cities[i]) {
                remainsCities.push(cities[i]);
            }
        }
        buildRoute(city, [], remainsCities);
    });

    const reducer = input => input.reduce( (acc, curr) => {
        return acc + parseInt(curr[1], 10);
    }, 0);
    const totals = routes.map(reducer);
    return Math.max(...totals);
}
    
module.exports = execute;
