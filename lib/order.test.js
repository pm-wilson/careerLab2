const Order = require('./order');

describe('Order class', () => {
  it('creates an order with addOrder', () => {
    const orderInfo = new Order('Jim', 25, 2);
    
    expect(orderInfo).toEqual({
      name: 'Jim',
      deliveryMinute: 25,
      startMinute: 3
    });
  });
});
