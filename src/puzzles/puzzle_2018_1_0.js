function execute(input, delimiter) {
    return input.split(delimiter ? delimiter : /\r?\n/).map(Number).reduce((a,b)=>a+b,0)
}

module.exports = execute;
