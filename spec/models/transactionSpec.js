var transaction;

describe('Transaction', function() {

  transaction = new Transaction();

  it("exists", function() {
    expect(transaction).toBeDefined();
  });

  describe('When initialized', function() {

    it("has a null default date value", function() {
      expect(transaction.date).toEqual(null);
    });

    it("has an empty string default debit value", function() {
      expect(transaction.debit).toEqual("");
    });

    it("has an empty string default credit value", function() {
      expect(transaction.credit).toEqual("");
    });

    it("has a null revisedBalance value", function() {
      expect(transaction.revisedBalance).toEqual(null);
    });
  });
});
