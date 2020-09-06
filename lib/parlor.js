const Driver = require('./driver');
const Order = require('./order');

class Parlor {
  drivers = [];
  orders = [];

  #calculateSchedule() {
    //loop through orders
    for(let o = 0; o < this.orders.length; o++) {
      const currentOrder = this.orders[o];

      //choose best driver
      for(let d = 0; d < this.drivers.length; d++) {
        const currentDriver = this.drivers[d];

        if(currentDriver.currentSchedule.freeWindow(currentOrder.startMinute, currentOrder.deliveryMinute)) {
          //update driver schedule
          currentDriver.currentSchedule.addOrder(currentOrder.startMinute, currentOrder.deliveryMinute);
          break;
        }
      }
    }
  }

  addDriver(driverName) {
    const driverInfo = new Driver(driverName);

    this.drivers.push(driverInfo);
  }

  addOrder(customerName, deliveryMinute, drivingDistance) {
    const orderInfo = new Order(customerName, deliveryMinute, drivingDistance);

    this.orders.push(orderInfo);
  }

  printSchedule() {
    this.#calculateSchedule();

    //loop through drivers
    for(let i = 0; i < this.drivers.length; i++) {
      const currentDriver = this.drivers[i];

      currentDriver.currentSchedule.print();
    }
  }
}

module.exports = Parlor;
