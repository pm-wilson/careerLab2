const Parlor = require('./parlor');

describe('Parlor class', () => {
  it('adds a driver to the parlor', () => {
    const parlor = new Parlor();
    parlor.addDriver('Driver Tim');
    parlor.addDriver('Driver Paul');

    expect(parlor).toEqual({
      drivers: [
        {
          driverName: 'Driver Tim',
          currentSchedule: {},
        },
        {
          driverName: 'Driver Paul',
          currentSchedule: {},
        },
      ],
      deliverySchedule: [],
      orders: [],
    });
  });

  it('adds a order to the parlor', () => {
    const parlor = new Parlor();
    parlor.addOrder('Customer Jim', 50, 20);
    parlor.addOrder('Customer Margery', 100, 25);

    expect(parlor).toEqual({
      drivers: [],
      deliverySchedule: [],
      orders: [
        {
          name: 'Customer Jim',
          deliveryMinute: 50,
          startMinute: 10,
        },
        {
          name: 'Customer Margery',
          deliveryMinute: 100,
          startMinute: 55,
        },
      ],
    });
  });

  it('prints the schedule in console for all drivers', () => {
    console.table = jest.fn();
    const parlor = new Parlor();
    parlor.addDriver('Driver Paul');
    parlor.addOrder('Customer Margery', 100, 25);
    parlor.printSchedule();

    expect(console.table).toHaveBeenCalledWith([
      []
    ]);
  });

  // it('prints the schedule in console for all drivers', () => {
  //   console.table = jest.fn();
  //   const parlor = new Parlor();
  //   parlor.addDriver('Driver Paul');
  //   parlor.addOrder('Customer Margery', 100, 25);
  //   parlor.printSchedule();

  //   expect(console.table).toHaveBeenCalledWith([
  //     []
  //   ]);
  // });
});
