function execute(input) {
  const inc = (word) => {
      let result = word.split('');
      result[result.length - 1] = String.fromCharCode(result[result.length - 1].charCodeAt(0) + 1);

      const replaceZ = (r) => {
            let indexOfZ = result.indexOf('{');
            if (indexOfZ > -1) {
                    r[indexOfZ] = 'a';
                    r[indexOfZ - 1] = String.fromCharCode(r[indexOfZ - 1].charCodeAt(0) + 1)
                  }
            return r;
          }
      while (result.indexOf('{') > -1) {
            result = replaceZ(result);
          }
      return result.join('');
  }

  let answer = inc(input);
  while (!checkAnswer(answer)) {
    answer = inc(answer);
  }
  return answer;
}

function checkAnswer(input) {
  const checkStraight3Letters = (word) => {
    let straightAmount = 0;
    word.split('').reduce( (acc, curr) => {
      if (curr.charCodeAt(0) === (acc.charCodeAt(0) + 1)) {
        straightAmount++;
      } else {
        if (straightAmount < 2) {
          straightAmount = 0;
        }
      }
      return curr;
    });
    return straightAmount >= 2;
  }
  const checkVowels = word => !/(i)|(o)|(l)/gm.test(word);

  const checkDoubles = word => {
    let result = word.match(/(.)\1+/g);
    if  (!result) result = [];
    return result.length >= 2;
  }

  return checkStraight3Letters(input) && checkVowels(input) && checkDoubles(input);
}
    
module.exports = {exec: execute, check: checkAnswer};
