(function(exports) {
  function AccountView() {
    this.template = "    Date    || Debit||Credit||Balance";
  }

  AccountView.prototype.printStatement = function(activityLog) {
    var statement = activityLog.map(function(item) {
      return item.join('  ||  ');
    });

    return console.log(statement.join('\r\n'));
  };

  exports.AccountView = AccountView;
})(this);
