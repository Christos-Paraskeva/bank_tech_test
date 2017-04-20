(function(exports) {
  function AccountView() {
    this.template = "    Date    || Debit||Credit||Balance";
  }

  // AccountView.prototype.printStatement = function(activityLog) {
  //   var statement = activityLog.map(function(item) {
  //     return item.join('  ||  ');
  //   });
  //
  //   return console.log(statement.join('\r\n'));
  // };

  AccountView.prototype.printStatement = function(activityLog) {
    var statement = activityLog.map(function(elem) {
      return elem.date + "\t||\t" + elem.credit + "\t||\t" + elem.debit + "\t||\t" + elem.revisedBalance;
    }).join("\n");

    return console.log(this.template + statement);
  };

  exports.AccountView = AccountView;
})(this);
