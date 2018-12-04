const R = require('ramda');

function execute(input) {
  const values = input.split(/\r?\n/).map(s => s = s.trim());
  const field = {};
  const ids = {};
  const fillSquares = (id, startX, startY, width, height, field) => {
    for (let x = startX; x < (startX + width); x++) {
      for (let y = startY; y < (startY + height); y++) {
        const squareCoord = `${x}x${y}`;
        if (!field[squareCoord]) {
          field[squareCoord] = [];
        } else {
          if (ids[id]) {
            delete ids[id]
          }
          field[squareCoord].forEach(idToDelete => {
            if (ids[idToDelete]) {
              delete ids[idToDelete];
            }
          })
        }
        field[squareCoord].push(id);
      }
    }
  }
  values.forEach(v => {
    const [id, body] = v.split('@').map(i => i.trim());
    ids[id] = true;
    const [coord, size] = body.split(':');
    const [x, y] = coord.split(',').map(Number);
    const [width, height] = size.split('x').map(Number);
    fillSquares(id, x, y, width, height, field);
  })
  console.log('total', Object.keys(ids).length);
  return Number((Object.keys(ids)[0]).replace('#', ''));
}

module.exports = execute;
