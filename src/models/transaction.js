(function(exports) {
  function Transaction(date=null, debit=null, credit=null, revisedBalance=null) {
    this.date = date;
    this.debit = debit;
    this.credit = credit;
    this.revisedBalance = revisedBalance;
  }

  exports.Transaction = Transaction;
})(this);
