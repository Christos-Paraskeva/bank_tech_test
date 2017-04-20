(function(exports) {
  function AccountController(account = new Account()) {
    this.account = account;
  }

  AccountController.prototype.makeDeposit = function(amount) {
    if (this._invalidAmount(amount)) {
    }
    else {
      this.account.depositMoney(amount);
    }
  };

  AccountController.prototype.makeWithdrawal = function(amount) {
    if (this._invalidAmount(amount)) {
    }
    else {
      this.account.withdrawMoney(amount);
    }
  };

  AccountController.prototype.viewStatement = function() {
    this.account.activityLogger.sendToView();
  };

  AccountController.prototype._invalidAmount = function(amount) {
    if (amount <= 0) {
      throw('Please enter a positive number');
    }
  };

  exports.AccountController = AccountController;
})(this);
