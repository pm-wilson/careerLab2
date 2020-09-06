const Driver = require('./driver');
const Order = require('./order');

class Parlor {
  drivers = [];
  orders = [];

  #calculateSchedule() {
    this.orders.forEach(currentOrder => {
      for(let d = 0; d < this.drivers.length; d++) {
        const currentDriver = this.drivers[d];

        if(currentDriver.currentSchedule.freeWindow(currentOrder.startMinute, currentOrder.deliveryMinute)) {

          currentDriver.currentSchedule.addOrder(currentOrder.startMinute, currentOrder.deliveryMinute);
          break;
        }
      }
    });
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

    this.drivers.forEach(currentDriver => currentDriver.currentSchedule.print());
  }
}

module.exports = Parlor;
