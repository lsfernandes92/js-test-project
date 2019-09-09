'use strict'

const chai = require('chai')
const expect = chai.expect
const Hotel = require("../hotel");

describe('Hotel', function() {
  describe('.getPriceFromDates', function() {
    let hotel;

    before(function() {
      hotel = new Hotel(
        'Foo',
        3,
        100,
        130,
        90,
        110,
      );
    });

    describe('when client is regular', function() {
      it('should return the price for week staying', function(){
          expect(hotel.getPriceFromDates('Regular', '2Sep2019')).to.equal(100);
      });

      it('should return the price for weekend staying', function(){
        expect(hotel.getPriceFromDates('Regular', '7Sep2019')).to.equal(130);
      });

      it('should return the price for the disposal dates', function(){
        expect(hotel.getPriceFromDates('Regular', '6Sep2019', '7Sep2019')).to.equal(230);
      });
    });

    describe('when client is reward', function() {
      it('should return the price for week staying', function(){
        expect(hotel.getPriceFromDates('Reward', '2Sep2019')).to.equal(90);
      });

      it('should return the price for weekend staying', function(){
          expect(hotel.getPriceFromDates('Reward', '7Sep2019')).to.equal(110);
      });

      it('should return the price for the disposal dates', function(){
        expect(hotel.getPriceFromDates('Reward', '7Sep2019', '8Sep2019', '9Sep2019')).to.equal(310);
      });
    });
  });
});
