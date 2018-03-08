function execute(input) {
     const checkPairs = string => {
          for (let i = 0; i < string.length - 1; i++) {
               const pair = "" + string[i] + string[i + 1];
               const substring = string.substring(i + 2);
               if (substring.indexOf(pair) > -1) {
                    return true;
               }
          }
          return false;
     };

     const checkLetterBetween = string => {
          for (let i = 0; i < string.length - 2; i++) {
               if (string[i] === string[i + 2]) {
                    return true;
               }
          }
          return false;
     };
     const isNice = string => checkPairs(string) && checkLetterBetween(string);

     const values = input.split('\n');
     let totalNiceWords = 0;
     const checkValue = val => totalNiceWords += +isNice(val);
     values.map(checkValue);
     return totalNiceWords;
}

module.exports = execute;
