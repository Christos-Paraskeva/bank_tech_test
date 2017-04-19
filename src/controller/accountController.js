(function(exports) {
  function AccountController(account = new Account()) {
    this.account = account;
  }

  exports.AccountController = AccountController;
})(this);
