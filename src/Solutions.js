class Solutions {
   constructor() {
       this.setYear(2015);
   }

   setYear(year) {
       switch (year) {
           case 2015:
               this.solutionCollection = require('./solutions/2015');
               break;
           case 2018:
               this.solutionCollection = require('./solutions/2018');
               break;
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



