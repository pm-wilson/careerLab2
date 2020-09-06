const Parlor = require('./parlor');

describe('Parlor class', () => {
  it('adds a driver to the parlor', () => {
    const parlor = new Parlor();
    const driver = parlor.addDriver('Driver Tim');

  
    expect(parlor).toEqual({
        driverName: 'Driver Tim',
      });

    expect(0).toEqual(0);
  });
});
