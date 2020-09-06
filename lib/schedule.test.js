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
    console.table = jest.fn();
    const schedule = new Schedule;
    schedule.addOrder(0, 22);  
    schedule.print();

    expect(console.table).toHaveBeenCalledWith([['Time', 'Busy'], [0, true], [22, false]]);
  });

  it('takes a startMinute and endMinute and returns true if window is unscheduled', () => {
    const schedule = new Schedule;
    schedule.addOrder(0, 22); 

    const yesSchedule = schedule.freeWindow(35, 50);
    const noSchedule = schedule.freeWindow(5, 50);

    expect(noSchedule).toBeFalsy();
    expect(yesSchedule).toBeTruthy();
  });
});
