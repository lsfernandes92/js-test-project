'use strict'

const chai = require('chai')
const expect = chai.expect
const ReservationCalculator = require("../reservation_calculator");
const Hotel = require("../hotel");
const Reservation = require("../reservation");

describe('ReservationCalculator', function() {
  describe('.calculate', function() {
    let hotel;
    let reservation;
    let result;

    before(function() {
      hotel = new Hotel(
        'fOO', 1,
        {
          weekPriceRegularClient: 110,
          weekendPriceRegularClient: 90,
          weekPriceRewardClient: 80,
          weekendPriceRewardClient: 80
        }
      );
    });

    describe('when client is regular', function() {
      it('should return the price for week staying', function(){
        reservation = new Reservation('Regular', '2Sep2019');
        result = new ReservationCalculator(hotel, reservation).calculate();

        expect(result).to.equal(110);
      });

      it('should return the price for weekend staying', function(){
        reservation = new Reservation('Regular', '7Sep2019');
        result = new ReservationCalculator(hotel, reservation).calculate();

        expect(result).to.equal(90);
      });

      it('should return the total price for the disposal dates', function(){
        reservation = new Reservation('Regular', '6Sep2019', '7Sep2019');
        result = new ReservationCalculator(hotel, reservation).calculate();

        expect(result).to.equal(200);
      });

      xit('should return the price for the disposal dates', function(){
        expect(hotel.totalPriceFromDates(new Reservation('', '7Sep2019'))).to.equal(130);
      });
    });

    describe('when client is reward', function() {
      it('should return the price for week staying', function(){
        reservation = new Reservation('Reward', '2Sep2019');
        result = new ReservationCalculator(hotel, reservation).calculate();

        expect(result).to.equal(80);
      });

      it('should return the price for weekend staying', function(){
        reservation = new Reservation('Reward', '7Sep2019');
        result = new ReservationCalculator(hotel, reservation).calculate();

        expect(result).to.equal(80);
      });

      it('should return the total price for the disposal dates', function(){
        reservation = new Reservation('Reward', '7Sep2019', '8Sep2019', '9Sep2019');
        result = new ReservationCalculator(hotel, reservation).calculate();

        expect(result).to.equal(240);
      });
    });
  });
});
