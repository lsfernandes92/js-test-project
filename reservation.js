class Reservation {
  constructor(clientType, ...dates) {
    this._clientType = clientType;
    this._dates = dates;
  }

  get clientType() { return this._clientType.toLowerCase(); }
  get dates() { return this._dates; }
}

module.exports = Reservation;
