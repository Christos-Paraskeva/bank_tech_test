(function(exports) {

  function Account(activityLogger = new ActivityLogger()) {
    this.balance = 0;
    this.activityLogger = activityLogger;
  }

  Account.prototype.depositMoney = function(amount) {
    this.balance += amount;
    this.activityLogger.logDeposit(amount, this.balance);
  };

  Account.prototype.withdrawMoney = function(amount) {
    this.balance -= amount;
    this.activityLogger.logWithdrawal(amount, this.balance);
  };

  exports.Account = Account;
})(this);
