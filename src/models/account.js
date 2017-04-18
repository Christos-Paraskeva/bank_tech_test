(function(exports) {
  function Account() {
    this.balance = 0;
  }

  Account.prototype.depositMoney = function(amount) {
    this.balance += amount;
  };

  exports.Account = Account;
})(this);
