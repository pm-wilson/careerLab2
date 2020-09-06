const Driver = require('./driver');

class Parlor {
    drivers = [];

    addDriver(driverName) {
      const driverInfo = new Driver(driverName);

      this.drivers.push(driverInfo);
    }

    addOrder() {

    }

    printSchedule() {

    }

    #calculateSchedule() {

    }
}

module.exports = Parlor;
