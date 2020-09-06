const Parlor = require('./parlor');

describe('Parlor class', () => {
  it('adds a driver to the parlor', () => {
    const parlor = new Parlor();
    parlor.addDriver('Driver Tim');
    parlor.addDriver('Driver Paul');
  
    expect(parlor).toEqual({
      drivers: [
        {
          'driverName': 'Driver Tim',
          'currentSchedule': {},
        },
        {
          'driverName': 'Driver Paul',
          'currentSchedule': {},
        }
      ]
    });

    expect(0).toEqual(0);
  });
});
