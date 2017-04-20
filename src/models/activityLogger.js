(function(exports) {
  function ActivityLogger(view = new AccountView()) {
    this.accountLog = [];
    this.view = view;
  }

  ActivityLogger.prototype.logDeposit = function(amount, balance) {
    var date = this._formatDate(new Date());
    this.accountLog.push(new Transaction(date, "", Number(amount).toFixed(2), balance));
  };

  ActivityLogger.prototype.logWithdrawal = function(amount, balance) {
    var date = this._formatDate(new Date());
    this.accountLog.push(new Transaction(date, Number(amount).toFixed(2), "", balance));
  };

  ActivityLogger.prototype.sendToView = function(statement = this.accountLog) {
    this.view.printStatement(statement);
  };

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
