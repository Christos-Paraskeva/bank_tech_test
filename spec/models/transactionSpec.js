var transaction;

describe('Transaction', function() {

  transaction = new Transaction();

  it("exists", function() {
    expect(transaction).toBeDefined();
  });

  describe('When initialized', function() {

    it("has a null date value", function() {
      expect(transaction.date).toEqual(null);
    });

    it("has a null debit value", function() {
      expect(transaction.debit).toEqual(null);
    });

    it("has a null credit value", function() {
      expect(transaction.credit).toEqual(null);
    });

    it("has a null revisedBalance value", function() {
      expect(transaction.revisedBalance).toEqual(null);
    });
  });
});
