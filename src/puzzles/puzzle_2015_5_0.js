function execute(input) {
    const vowels = ['a','e','i','o','u'];
    const excludes = ['ab','cd','pq','xy'];

    const isNice = string => isContainsVowels(string) && hasDouble(string) && notContainsExcludes(string);

    const isContainsVowels = string => {
        let vowelsCount = 0;
        Array.from(string).forEach(c => vowelsCount += +vowels.includes(c));
        return vowelsCount >= 3;
    };


    const hasDouble = string => {
        for (let i = 0; i < string.length - 1; i++) {
            if (string[i] == string[i + 1]) {
                return true;
            }
        }
        return false;
    };

    const notContainsExcludes = string => {
        for (let i = 0; i < excludes.length; i++) {
            if (string.indexOf(excludes[i]) > -1) {
                return false;
            }
        }
        return true;
    };


    const values = input.split('\n');
    let totalNiceWords = 0;
    const checkValue = val => totalNiceWords += +isNice(val);
    values.map(checkValue);
    return totalNiceWords;
}
    
module.exports = execute;
