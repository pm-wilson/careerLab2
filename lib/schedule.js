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

    clear() {
      this.#schedule = [...Array(480).fill(false)];
    }

    print() {
      const formattedTable = [['Time', 'Busy']];

      this.#schedule.map((currentScheduleItem, i) => {
        const lastScheduleItem = formattedTable[formattedTable.length - 1];

        if(i === 0) {
          formattedTable.push([i, currentScheduleItem]);
        } else if(lastScheduleItem[1] !== currentScheduleItem) {
          formattedTable.push([i, currentScheduleItem]);
        }    
      });
      console.table(formattedTable);
    }

    freeWindow(startMinute, endMinute) {
      const scheduleToEval = this.#schedule.slice(startMinute, endMinute);

      const scheduleFree = scheduleToEval.every(time => time === false);

      return scheduleFree;
    }
}

module.exports = Schedule;
