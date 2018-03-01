class Solutions {
   constructor() {
       this.solutionCollection = {
           1 : {
               description: "--- Day 1: Not Quite Lisp ---",
               solution: this.puzzleLisp
           },
           2 : {
               description: "--- Day 2: Will be soon ---",
               solution: this.puzzleLisp
           }
       }
   }

    /**
     * @param input
     * @param puzzle
     * @returns {number}
     */
   puzzleLisp(input, puzzle) {
       if (puzzle === 0) {
           const applyInstructions = function (direction) {
               if (direction === '(') {
                   applyInstructions.position += 1;
               }
               if (direction === ')') {
                   applyInstructions.position -= 1;
               }
           };
           applyInstructions.position = 0;
           input.split('').forEach(symbol => applyInstructions(symbol));
           return applyInstructions.position;
       } else {
           let result = 0;
           const instructions = input.split('');
           for (let i = 0; i < instructions.length; i++) {
               let direction = instructions[i];
               if (direction === '(') {
                   result += 1;
               }
               if (direction === ')') {
                   result -= 1;
               }
               if (result === -1) {
                   return (i + 1);
               }
           }
           return instructions.length;
       }
   }


  getByDay(day, input, puzzle = 0) {
      if (this.solutionCollection[day]) {
          return this.solutionCollection[day].solution(input, parseInt(puzzle, 10));
      }
      else {
          return "Can't find solution for day " + day;
      }
  }

   getCollection() {
       return this.solutionCollection;
   }
    
}

export default Solutions




