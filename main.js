const Hotel = require("./hotel");

let lakewood = new Hotel('Lakewood', 1, 110, 90, 80, 80);
let bridgewood = new Hotel('Bridgewood', 2, 160, 60, 110, 50);
let ridgewood = new Hotel('Ridgewood', 0, 110, 150, 100, 40);

function setBestHotelObjProps(obj, name, rank, price) {
  obj.name = name;
  obj.rank = rank;
  obj.price = price;
}

function selectBestDealHotel(clientType, ...dates) {
  const hotels = [
    lakewood,
    bridgewood,
    ridgewood
  ];

  let bestHotel = {
    name: hotels[0].name,
    rank: hotels[0].rank,
    price: hotels[0].getPriceFromDates(clientType, ...dates)
  };

  hotels.shift();

  hotels.forEach(hotel => {
    hotelPrice = hotel.getPriceFromDates(clientType, ...dates);

    if (hotelPrice < bestHotel.price) {
      setBestHotelObjProps(bestHotel, hotel.name, hotel.rank, hotelPrice);
    }

    if (hotelPrice === bestHotel.price && hotel.rank > bestHotel.rank) {
      setBestHotelObjProps(bestHotel, hotel.name, hotel.rank, hotelPrice);
    }
  });

  console.log(bestHotel);
}

selectBestDealHotel('regular', '3Sep2019', '4Sep2019', '5Sep2019');
