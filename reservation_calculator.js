const RegularClient = require('./regular_client');
const RewardClient = require('./reward_client');

class ReservationCalculator {
  selectBestDealHotel(hotels, reservation) {
    this._calculateEachHotelPrice(hotels, reservation);

    let bestHotel = hotels[0];

    hotels.forEach(hotel => {
        bestHotel = this._compareHotels(hotel, bestHotel);
    });

    return bestHotel.toString();
  }

  _compareHotels(hotel1, hotel2) {
    if (hotel1.price < hotel2.price) {
      return hotel1;
    }
    else if (hotel1.price === hotel2.price && hotel1.rank > hotel2.rank) {
      return hotel1;
    }
    else {
      return hotel2;
    }
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
