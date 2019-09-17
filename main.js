const Hotel = require("./hotel");
const ReservationCalculator = require("./reservation_calculator");
const Reservation = require("./reservation");

let lakewood = new Hotel(
  'Lakewood', 1,
  {
    weekPriceRegularClient: 110,
    weekendPriceRegularClient: 80,
    weekPriceRewardClient: 80,
    weekendPriceRewardClient: 80
  }
);
let bridgewood = new Hotel(
  'Bridgewood', 2,
  {
    weekPriceRegularClient: 110,
    weekendPriceRegularClient: 90,
    weekPriceRewardClient: 110,
    weekendPriceRewardClient: 50
  }
);
let ridgewood = new Hotel(
  'Ridgewood', 0,
  {
    weekPriceRegularClient: 110,
    weekendPriceRegularClient: 150,
    weekPriceRewardClient: 100,
    weekendPriceRewardClient: 40
  }
);

console.log(new ReservationCalculator().selectBestDealHotel([lakewood, bridgewood], new Reservation('regular', '6Sep2019', '7Sep2019')));
