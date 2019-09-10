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
    const day = new Date(date).getDay();

    return this._evaluatePriceRewardClient(day);
  }

  _evaluatePriceRewardClient(dayOfWeek) {
    let weekend = (dayOfWeek === 6) || (dayOfWeek === 0);

    return (
      weekend ? this._hotel.weekendPriceRewardClient : this._hotel.weekPriceRewardClient
    );
  }
}

module.exports = RewardClient;
