class Schedule {
    #schedule = [...Array(480).fill(false)];

    nextOpenMinute() {
        for (var i = 0; i < this.#schedule.length; i++) {
            if (this.#schedule[i] === false) {
                return i;
            }
        }
    }
}



module.exports = Schedule;
