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

  exports.AccountController = AccountController;
})(this);
