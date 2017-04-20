(function(exports) {
  function Transaction(date=null, debit="", credit="", revisedBalance=null) {
    this.date = date;
    this.debit = debit;
    this.credit = credit;
    this.revisedBalance = revisedBalance;
  }

  exports.Transaction = Transaction;
})(this);
