const RegularClient = require('./regular_client');
const RewardClient = require('./reward_client');

class ReservationCalculator {
  constructor(hotel, reservation) {
    this._hotel = hotel;
    this._reservation = reservation;
  }

  calculate() {
    switch (this._reservation.clientType) {
      case 'regular':
        return new RegularClient(this._hotel, this._reservation).calculate();
        break;
      case 'reward':
        return new RewardClient(this._hotel, this._reservation).calculate();
        break;
      default:
        return 0;
    }
  }

  selectBestDealHotel(hotels, reservation) {
    // let bestHotel = {
    //   name: hotels[0].name,
    //   rank: hotels[0].rank,
    //   price: calculate(hotels[0], reservation)
    // };
    // 
    // hotels.forEach(hotel => {
    //   comparePrices(hotel, bestHotel);
    //   compareRank(hotel1, bestHotel);
    // });
    //
    // return bestHotel;
  }
  //
  // comparePrices(hotel1, hotel2) {
  //   hotelPrice = this.calculate(hotel, reservation);
  //
  //   if (hotelPrice < bestHotel.price) {
  //     setBestHotelObjProps(bestHotel, hotel.name, hotel.rank, hotelPrice);
  //   }
  // }
  //
  // compareRank(hotel1, hotel2) {
  //   hotelPrice = this.calculate(hotel, reservation);
  //
  //   if (hotelPrice === bestHotel.price && hotel.rank > bestHotel.rank) {
  //     setBestHotelObjProps(bestHotel, hotel.name, hotel.rank, hotelPrice);
  //   }
  // }
  //
  // setBestHotelObjProps(obj, name, rank, price) {
  //   obj.name = name;
  //   obj.rank = rank;
  //   obj.price = price;
  // }
}

module.exports = ReservationCalculator;
