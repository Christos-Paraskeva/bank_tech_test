function TransactionDouble(date=new Date(), debit=200, credit=300, revisedBalance=100) {
  this.date = date;
  this.debit = debit;
  this.credit = credit;
  this.revisedBalance = revisedBalance;
}

var formattedOutput = function() {
  return [new TransactionDouble()];
};
