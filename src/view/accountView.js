(function(exports) {
  function AccountView() {
    this.template = "    Date    || Debit || Credit ||  Balance";
  }
  
  AccountView.prototype.printStatement = function(activityLog) {
    var statement = activityLog.map(function(elem) {
      return "\n" + elem.date + "\t||\t" + elem.credit + "\t||\t" + elem.debit + "\t||\t" + elem.revisedBalance.toFixed(2);
    }).join("\n");

    return console.log(this.template + statement);
  };

  exports.AccountView = AccountView;
})(this);
