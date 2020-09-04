const e = require('express');

class Schedule {
    #schedule = [...Array(480).fill(false)];

    nextOpenMinute() {
      return this.#schedule.findIndex(i => i === false);
    }

    addOrder(startTime, deliveryTime) {
      for(let i = startTime; i < deliveryTime; i++) {
        this.#schedule[i] = true;
      }
    }

  // clear() {
  //     this.findIndex#schedule = [...Array(480).fill(false)];
  // }

//     print() {
// //print the true times as a block
//     }
}



module.exports = Schedule;
