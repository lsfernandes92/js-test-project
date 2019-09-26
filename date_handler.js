class DateHandler {
  constructor(date) {
    this._date = date;
  }

  isWeekend() {
    const dayOfWeek = new Date(this._date).getDay();

    return (dayOfWeek === 6) || (dayOfWeek === 0);;
  }
}

module.exports = DateHandler;
