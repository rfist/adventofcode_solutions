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
                   require('./puzzles/puzzle_2015_2_1')
                   ]
           },
           3 : {
               description: "--- Day 3: Perfectly Spherical Houses in a Vacuum ---",
               solutions: [
                   require('./puzzles/puzzle_2015_3_0'),
                   require('./puzzles/puzzle_2015_3_1')
               ]
           },
           4: {
               description: "--- Day 4: The Ideal Stocking Stuffer ---",
               solutions: [
                   require('./puzzles/puzzle_2015_4_0'),
                   require('./puzzles/puzzle_2015_4_1')
               ]
           },
           5: {
               description: "--- Day 5: Doesn't He Have Intern-Elves For This? ---",
               solutions: [
                   require('./puzzles/puzzle_2015_5_0'),
                   require('./puzzles/puzzle_2015_5_1')
               ]
           },
          6: {
              description: "--- Day 6: Probably a Fire Hazard ---",
              solutions: [
                  require('./puzzles/puzzle_2015_6_0'),
                  require('./puzzles/puzzle_2015_6_1')
              ]
          },
          7 : {
              description: "--- Day 7: Some Assembly Required ---",
              solutions: [
                  input => require('./puzzles/puzzle_2015_7_0')(input).a.getValue(),
                  input => require('./puzzles/puzzle_2015_7_0')(input).a.getValue()
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



