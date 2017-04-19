(function(exports) {
  function AccountView() {
    this.template = ['Date', 'Credit', 'Debit', 'Balance'];
  }

  AccountView.prototype.printStatement = function(statement) {
  };

  exports.AccountView = AccountView;
})(this);
