const DateHandler = require('./date_handler');

class RegularClient {
  constructor(hotel, reservation) {
    this._hotel = hotel;
    this._reservation = reservation;
  }

  calculate() {
    let totalPrice = 0;

    this._reservation.dates.forEach(date => {
      totalPrice += this._priceFromDate(date);
    });

    return totalPrice;
  }

  _priceFromDate(date) {
    return (
      new DateHandler(date).isWeekend()
        ? this._hotel.weekendPriceRegularClient
        : this._hotel.weekPriceRegularClient
    );
  }
}

module.exports = RegularClient;
