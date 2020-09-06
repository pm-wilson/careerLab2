const Driver = require('./driver');
const Order = require('./order');

class Parlor {
  drivers = [];
  orders = [];
  deliverySchedule = [];

  addDriver(driverName) {
    const driverInfo = new Driver(driverName);

    this.drivers.push(driverInfo);
  }

  addOrder(customerName, deliveryMinute, drivingDistance) {
    const orderInfo = new Order(customerName, deliveryMinute, drivingDistance);

    this.orders.push(orderInfo);
  }

  #calculateSchedule() {

  }

  printSchedule() {}
}

module.exports = Parlor;
