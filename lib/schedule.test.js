const Schedule = require('./schedule');

describe('Schedule class', () => {
  it('returns the index of the next open minute', () => {
    const initialSchedule = new Schedule;
    const openMinute = initialSchedule.nextOpenMinute();

    expect(openMinute).toEqual(0);
  });

   it('changes the schedule values between startMinute and deliveryMinute to true', () => {
    const initialSchedule = new Schedule;
    initialSchedule.addOrder(0, 22)

    const result = initialSchedule.nextOpenMinute();

    expect(result).toBe(23)

   });

//   it('sets schedule to false', () => {
//     const initialSchedule = new Schedule;
//     const clearSchedule  = initialSchedule.clear();

//     //wait for add order
//   })

//   it('prints the schedule in console', () => {
//     const initialSchedule = new Schedule;
//     const clearSchedule  = initialSchedule.print();

//     expect(clearschedule).
//   })
});
