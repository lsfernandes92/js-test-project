class HotelComparison {
  selectHotelWithBestPrice(hotel1, hotel2) {
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
}

module.exports = HotelComparison;
