(function(exports) {
  function Transaction() {
    this.date = null;
    this.debit = null;
    this.credit = null;
    this.revisedBalance = null;
  }

  exports.Transaction = Transaction;
})(this);
