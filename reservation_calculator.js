const RegularClient = require('./regular_client');
const RewardClient = require('./reward_client');

class ReservationCalculator {
  selectBestDealHotel(hotels, reservation) {
    let bestHotel = this._setHotelPriceProp(hotels[0], reservation);

    hotels.shift();

    hotels.forEach(hotel => {
        hotel = this._setHotelPriceProp(hotel, reservation);

        bestHotel = this._compareBestHotel(hotel, bestHotel);
    });

    return bestHotel.toString();
  }

  _compareBestHotel(hotel1, hotel2) {
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

  _setHotelPriceProp(hotel, reservation) {
    hotel.price = this._calculate(hotel, reservation);

    return hotel;
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
