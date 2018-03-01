class Solutions {
   constructor() {
       this.solutionCollection = {
           1 : {
               description: "--- Day 1: Not Quite Lisp ---",
               solutions: [
                   require('./puzzles/puzzle_2015_1_0'),
                   require('./puzzles/puzzle_2015_1_1')
                   ]
           },
           2 : {
               description: "--- Day 2: I Was Told There Would Be No Math ---",
               solutions: [
                   require('./puzzles/puzzle_2015_2_0'),
                   require('./puzzles/puzzle_2015_2_0')
                   ]
           }
       }
   }

  getByDay(day, input, puzzle = 0) {
      if (this.solutionCollection[day]) {
          return this.solutionCollection[day].solutions[puzzle](input, parseInt(puzzle, 10));
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



