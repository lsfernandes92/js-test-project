const DateHandler = require('./date_handler');

class RewardClient {
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
        ? this._hotel.weekendPriceRewardClient
        : this._hotel.weekPriceRewardClient
    );
  }
}

module.exports = RewardClient;
