class Hotel {
  // construtor cheio de parametros AAAAAAAAAAA
  constructor(name, rank, weekPriceRegularClient, weekendPriceRegularClient,
    weekPriceRewardClient, weekendPriceRewardClient) {
    this._name = name;
    this._rank = rank;
    this._weekPriceRegularClient = weekPriceRegularClient;
    this._weekendPriceRegularClient = weekendPriceRegularClient;
    this._weekPriceRewardClient = weekPriceRewardClient;
    this._weekendPriceRewardClient = weekendPriceRewardClient;
  }

  // modelo anemico :S
  get name() { return this._name; }
  get rank() { return this._rank; }
  get weekPriceRegularClient() { return  this._weekPriceRegularClient; }
  get weekendPriceRegularClient() { return  this._weekendPriceRegularClient; }
  get weekPriceRewardClient() { return this._weekPriceRegularClient; }
  get weekendPriceRewardClient() { return this._weekeendPriceRegularClient; }

  set name(newName) { this._name = newName; }
  set rank(newRank) { this._rank = newRank; }
  set weekPriceRegularClient(newPrice) { this._weekPriceRegularClient = newPrice; }
  set weekeendPriceRegularClient(newPrice) { this._weekeendPriceRegularClient = newPrice; }
  set weekPriceRewardClient(newPrice) { this._weekPriceRewardClient = newPrice; }
  set weekeendPriceRewardClient(newPrice) { this._weekeendPriceRewardClient = newPrice; }

  getPriceFromDates(clientType, ...dates) {
    let totalPrice = this._getPrice(clientType, dates[0]);

    dates.shift();

    dates.forEach(date => {
      let priceFromDate = this._getPrice(clientType, date);
      totalPrice += priceFromDate;
    });

    return totalPrice;
  }

  _getPrice(clientType, date) {
    let day = new Date(date).getDay();

    let weekend = (day === 6) || (day === 0);

    if (clientType.toLowerCase() === 'regular') {
      return (
        weekend ? this._weekendPriceRegularClient : this._weekPriceRegularClient
      );
    } else {
      return (
        weekend ? this._weekendPriceRewardClient : this._weekPriceRewardClient
      );
    }
  }
}

module.exports = Hotel;
