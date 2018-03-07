// const md5 = require('../vendor/md5.min');
const md5 = window.md5;
const MAX_VALUE = 1000000000; // to prevent infinity loop
function execute(input) {
    for (let i = 0; i < MAX_VALUE; i++) {
        if (md5(input + i).substr(0,6) === '000000') {
            return '' + i;
        }
    }
    return -1;
}

module.exports = execute;
