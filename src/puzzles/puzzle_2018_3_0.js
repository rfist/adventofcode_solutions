/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
const R = require('ramda');

function execute(input) {
  const values = input.split(/\r?\n/).map(s => s.trim().split('@')[1]);
  const field = {};
  const fillSquares = (startX, startY, width, height, collection) => {
    for (let x = startX; x < (startX + width); x++) {
      for (let y = startY; y < (startY + height); y++) {
        const squareCoord = `${x}x${y}`;
        if (!collection[squareCoord]) {
          collection[squareCoord] = 0;
        }
        collection[squareCoord]++;
      }
    }
  };
  values.forEach((v) => {
    const [coord, size] = v.split(':');
    const [x, y] = coord.split(',').map(Number);
    const [width, height] = size.split('x').map(Number);
    fillSquares(x, y, width, height, field);
  });
  return R.length(R.filter(x => x > 1, R.values(field)));
}

module.exports = execute;
