const Schedule = require('./schedule');

class Driver {
    driverName;
    currentSchedule;

    constructor(driverName) {
      this.driverName = driverName;
      this.currentSchedule = new Schedule;
    }
}

module.exports = Driver;
