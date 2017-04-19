(function(exports) {
  function ActivityLogger() {
    this.accountLog = [];
  }

  ActivityLogger.prototype.logDeposit = function(amount, balance) {
    var date = this._formatDate(new Date());
    this.accountLog.push(date, amount, "", balance);
  };

  ActivityLogger.prototype.addDate = function () {
    return new Date().toLocaleString();
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
