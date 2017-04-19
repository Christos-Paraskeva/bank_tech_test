(function(exports) {
  function AccountController(account = new Account()) {
    this.account = account;
  }

  AccountController.prototype.makeDeposit = function(amount) {
    this.account.depositMoney(amount);
  };

  AccountController.prototype.makeWithdrawal = function(amount) {
    this.account.withdrawMoney(amount);
  };

  AccountController.prototype.viewStatement = function() {
    this.account.activityLogger.sendToView();
  };

  exports.AccountController = AccountController;
})(this);
