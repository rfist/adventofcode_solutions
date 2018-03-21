function execute(input, repeatAmount = 0) {
    const lookAndSay = input => {
        let inputArray = ('' + input).split('');
        let finalResult = [];
        let current = parseInt(inputArray[0]);
        let currentAmount = 1;
        if (inputArray.length === 1) {
            return '1' + inputArray[0];
        } else {
            for (let i = 1; i < inputArray.length; i++) {
                // console.log('i', i, current,  inputArray[i], currentAmount);
                if (current == inputArray[i]) {
                    currentAmount++;
                } else {
                    finalResult.push(currentAmount + '' + current);
                    current = parseInt(inputArray[i]);
                    currentAmount = 1;
                }
                if (i === inputArray.length - 1) {
                    finalResult.push(currentAmount + '' + current);
                }
            }

            return finalResult.join('');
        }
    };
    do {
        input = lookAndSay(input);
        // console.log('i', repeatAmount, input);
        repeatAmount--;
    } while (repeatAmount > 0);

    return input.length
}

module.exports = execute;

