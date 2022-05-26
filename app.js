// solution 1

class Fly {
  move(unit) {
    return (unit.position += 10);
  }
}

class Walk {
  move(unit) {
    return unit.position++;
  }
}

class Viking {
  constructor() {
    this.position = 0;
    this.moveBehavior = new Walk();
  }

  move() {
    return this.moveBehavior.move(this);
  }
}

// solution 2

// const createMoveBehavior = (n) => class {
//   move(unit) {
//     unit.position += n
//   }
// }

// const Fly = createMoveBehavior(10)
// const Walk = createMoveBehavior(1)

// class Viking {
//   constructor() {
//     this.moveBehavior = new Walk()
//     this.position = 0
//   }

//   move() {
//     this.moveBehavior.move(this)
//   }
// }

// solution 3

// class Fly {
//   move() {
//     return 10;
//   }
// }
// class Walk {
//   move() {
//     return 1;
//   }
// }
// class Viking {
//   constructor() {
//     this.moveBehavior = new Walk();
//     this.position = 0;
//   }
//   move() {
//     this.position += this.moveBehavior.move();
//   }
// }

let viking = new Viking();
viking.move();
viking.moveBehavior = new Fly();
