const Schedule = require('./schedule');

describe('Schedule class', () => {
  it('returns the index of the next open minute', () => {
    const initialSchedule = new Schedule;
    const openMinute = initialSchedule.nextOpenMinute();

    expect(openMinute).toEqual(0)

  });
});
