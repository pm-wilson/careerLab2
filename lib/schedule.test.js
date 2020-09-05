const Schedule = require('./schedule');

describe('Schedule class', () => {
  it('returns the index of the next open minute', () => {
    const schedule = new Schedule;
    const openMinute = schedule.nextOpenMinute();

    expect(openMinute).toEqual(0);
  });

  it('changes the schedule values between startMinute and deliveryMinute to true', () => {
    const schedule = new Schedule;
    schedule.addOrder(0, 22);
    const result = schedule.nextOpenMinute();

    expect(result).toBe(22);
  });

  it('sets entire schedule to false', () => {
    const schedule = new Schedule;
    schedule.addOrder(0, 22);
    schedule.clear();
    const openMinute = schedule.nextOpenMinute();
      
    expect(openMinute).toEqual(0);
  });

  it('prints the schedule in console', () => {
    const schedule = new Schedule;
    schedule.addOrder(0, 22);  
    schedule.print();
    const result = schedule.nextOpenMinute();

    expect(result).toBe(22);
  });
});
