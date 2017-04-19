(function(exports) {
  function AccountController(account = new Account()) {
    this.account = account;
  }

  AccountController.prototype.makeDeposit = function(amount) {
    this.account.depositMoney(amount);
  };

  exports.AccountController = AccountController;
})(this);
