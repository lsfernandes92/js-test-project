'use strict'

const chai = require('chai')
const expect = chai.expect

const ReservationCalculator = require("../reservation_calculator");
const Hotel = require("../hotel");
const Reservation = require("../reservation");

describe('ReservationCalculator', function() {
  describe('.selectBestDealHotel', function() {
    let lakewood, bridgewood, ridgewood;
    let reservation;
    let result;

    before(function() {
      lakewood = new Hotel(
        'lakewood', 3,
        {
          weekPriceRegularClient: 110,
          weekendPriceRegularClient: 90,
          weekPriceRewardClient: 80,
          weekendPriceRewardClient: 80
        }
      );

      bridgewood = new Hotel(
        'bridgewood', 4,
        {
          weekPriceRegularClient: 160,
          weekendPriceRegularClient: 60,
          weekPriceRewardClient: 110,
          weekendPriceRewardClient: 50
        }
      );

      ridgewood = new Hotel(
        'ridgewood', 5,
        {
          weekPriceRegularClient: 220,
          weekendPriceRegularClient: 150,
          weekPriceRewardClient: 100,
          weekendPriceRewardClient: 40
        }
      );
    });

    describe('when client is regular', function() {
      it('returns the more convenient hotel for week staying', function(){
        reservation = new Reservation('Regular', '2Sep2019');
        result = new ReservationCalculator().selectBestDealHotel(
          [lakewood, bridgewood, ridgewood], reservation
        );

        expect(result).to.include('lakewood');
      });

      it('returns the more convenient hotel for weekend staying', function(){
        reservation = new Reservation('Regular', '7Sep2019');
        result = new ReservationCalculator().selectBestDealHotel(
          [lakewood, bridgewood, ridgewood],
          reservation
        );

        expect(result).to.include('bridgewood');
      });

      it('returns the best hotel for the disposal dates', function(){
        reservation = new Reservation('Regular', '16Mar2009', '17Mar2009', '18Mar2009');
        result = new ReservationCalculator().selectBestDealHotel(
          [lakewood, bridgewood, ridgewood],
          reservation
        );

        expect(result).to.include('lakewood');
      });

      xit('should return the price for the disposal dates', function(){
        expect(lakewood.totalPriceFromDates(new Reservation('', '7Sep2019'))).to.equal(130);
      });
    });

    describe('when client is reward', function() {
      it('returns the more convenient hotel for week staying', function(){
        reservation = new Reservation('Reward', '2Sep2019');
        result = new ReservationCalculator().selectBestDealHotel(
          [lakewood, bridgewood, ridgewood],
          reservation
        );

        expect(result).to.include('lakewood');
      });

      it('returns the more convenient hotel for weekend staying', function(){
        reservation = new Reservation('Reward', '7Sep2019');
        result = new ReservationCalculator().selectBestDealHotel(
          [lakewood, bridgewood, ridgewood],
          reservation
        );

        expect(result).to.include('ridgewood');
      });

      it('returns the best hotel for the disposal dates', function(){
        reservation = new Reservation('Reward', '26Mar2009', '27Mar2009', '28Mar2009');
        result = new ReservationCalculator().selectBestDealHotel(
          [lakewood, bridgewood, ridgewood],
          reservation
        );

        expect(result).to.include('ridgewood');
      });
    });
  });
});
