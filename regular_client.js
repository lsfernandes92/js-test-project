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
    const day = new Date(date).getDay();

    return this._evaluatePriceRegularClient(day);
  }

  _evaluatePriceRegularClient(dayOfWeek) {
    let weekend = (dayOfWeek === 6) || (dayOfWeek === 0);

    return (
      weekend ? this._hotel.weekendPriceRegularClient : this._hotel.weekPriceRegularClient
    );
  }
}

module.exports = RegularClient;
