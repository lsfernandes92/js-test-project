const RegularClient = require('./regular_client');
const RewardClient = require('./reward_client');
const HotelComparison = require('./hotel_comparison');

class ReservationCalculator {
  constructor(hotels, reservation) {
    this._hotels = this._calculateEachHotelPrice(hotels, reservation);
    this._reservation = reservation;
    this._bestHotel = this._hotels[0];
  }

  selectBestDealHotel() {
    this._hotels.shift();

    this._hotels.forEach(hotel => {
      this._bestHotel =
        new HotelComparison().selectHotelWithBestPrice(hotel, this._bestHotel);
    });

    return this._bestHotel.toString();
  }

  _calculateEachHotelPrice(hotels, reservation) {
    hotels.forEach(hotel => {
      hotel.price = this._calculate(hotel, reservation);
    });

    return hotels;
  }

  _calculate(hotel, reservation) {
    switch (reservation.clientType) {
      case 'regular':
        return new RegularClient(hotel, reservation).calculate();
        break;
      case 'reward':
        return new RewardClient(hotel, reservation).calculate();
        break;
      default:
        return 0;
    }
  }
}

module.exports = ReservationCalculator;
