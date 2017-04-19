(function(exports) {
  function ActivityLogger(view = new AccountView()) {
    this.accountLog = [['Date', 'Credit', 'Debit', 'Balance']];
    this.view = view;
  }

  ActivityLogger.prototype.logDeposit = function(amount, balance) {
    var date = this._formatDate(new Date());
    this.accountLog.push([date, amount, "", balance]);
  };

  ActivityLogger.prototype.logWithdrawal = function(amount, balance) {
    var date = this._formatDate(new Date());
    this.accountLog.push([date, "", amount, balance]);
  };

  ActivityLogger.prototype.sendToView = function(statement = this.accountLog) {
    this.view.printStatement(statement);
  };

  // this can be moved to the view / date will need to be stored with time to make it chronological
  ActivityLogger.prototype._formatDate = function(date) {
      var d = date.getDate();
      var day = (d < 10) ? '0' + d : d;
      var m = date.getMonth() + 1;
      var month = (m < 10) ? '0' + m : m;
      var y = date.getYear();
      var year = (y < 1000) ? y + 1900 : y;
      return day + "/" + month + "/" + year;
  };

  exports.ActivityLogger = ActivityLogger;
})(this);
