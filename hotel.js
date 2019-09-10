class Hotel {
  constructor(name, rank, options) {
    this._name = name;
    this._rank = rank;
    this._weekPriceRegularClient = options.weekPriceRegularClient;
    this._weekendPriceRegularClient = options.weekendPriceRegularClient;
    this._weekPriceRewardClient = options.weekPriceRewardClient;
    this._weekendPriceRewardClient = options.weekendPriceRewardClient;
  }

  get name() { return this._name; }
  get rank() { return this._rank; }
  get weekPriceRegularClient() { return  this._weekPriceRegularClient; }
  get weekendPriceRegularClient() { return  this._weekendPriceRegularClient; }
  get weekPriceRewardClient() { return this._weekPriceRewardClient; }
  get weekendPriceRewardClient() { return this._weekendPriceRewardClient; }

  toString() {
    return(
      `
        Hotel: ${this.name}, classificação: ${this.rank}
        Preços:
        \tSemana cliente normal: ${this.weekPriceRegularClient}
        \tFDS cliente normal: ${this.weekendPriceRegularClient}
        \tFDS cliente fidelidade: ${this.weekendPriceRewardClient}
        \tSemana cliente fidelidade: ${this.weekPriceRewardClient}
      `
    )
  }
}

module.exports = Hotel;
