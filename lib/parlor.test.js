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
      orders: [],
    });
  });

  it('adds a order to the parlor', () => {
    const parlor = new Parlor();
    parlor.addOrder('Customer Jim', 50, 20);
    parlor.addOrder('Customer Margery', 100, 25);

    expect(parlor).toEqual({
      drivers: [],
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

  it('assigns orders to drivers', () => {
    console.table = jest.fn();
    const parlor = new Parlor();
    parlor.addDriver('Driver Tim');
    parlor.addDriver('Driver Paul');
    parlor.addOrder('Customer Jim', 50, 20);
    parlor.addOrder('Customer Margery', 100, 25);
    parlor.addOrder('Customer Gwen', 300, 100);
    parlor.addOrder('Customer Tony', 110, 45);
    parlor.printSchedule();

    expect(console.table).toHaveBeenCalledWith([
      ['Time', 'Busy'],
      [0, false],
      [10, true],
      [50, false],
      [55, true],
      [100, false],
      [180, true],
      [300, false],
    ]);
    
    expect(console.table).toHaveBeenCalledWith([
      ['Time', 'Busy'],
      [0, false],
      [45, true],
      [110, false],
    ]);
  });

});
