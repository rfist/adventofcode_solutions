function execute(input) {
     const grid = new Array(1000).fill(0).map(x => new Array(1000).fill(0));

     const applyInstruction = instruction => {
          instruction = instruction.replace('turn on', 'on');
          instruction = instruction.replace('toggle', 'tg');
          instruction = instruction.replace('turn off', 'off');
          const [command, x, , y] = instruction.split(' ');
          const [startX, startY] = x.split(',').map(x => parseInt(x));
          const [endX, endY] = y.split(',').map(y => parseInt(y));
          const applyCommand = x => {
               switch (command) {
                    case 'on':
                         x = 1;
                         break;
                    case 'off':
                         x = 0;
                         break;
                    case 'tg':
                         x = +!x;
                         break;
                    default:
                         console.error('unknown command', command);
                       break;
               }
               return x;
          };
          for (let i = startX; i <= endX; i++) {
               for (let j = startY; j <= endY; j++) {
                    grid[i][j] = applyCommand(grid[i][j]);
               }
          }
     };
     input.split('\n').map(applyInstruction);
     return grid.reduce( (a, c) => a + c.reduce( (a, c) =>  a + c ), 0);
}
    
module.exports = execute;
