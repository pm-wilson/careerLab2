const Driver = require('./driver');

describe('Driver class', () => {
  it('creates driver with a name and a blank schedule', () => {
    const driver = new Driver('Driver Larry');
    const openMinute = driver.currentSchedule.nextOpenMinute();
      
    expect(driver).toEqual({
      driverName: 'Driver Larry',
      currentSchedule: {},
    });

    expect(openMinute).toEqual(0);
  });
});
