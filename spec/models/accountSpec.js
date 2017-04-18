describe('Account', function() {

  describe('a default account', function() {
    var account = new Account();

    it("exists", function() {
      expect(account).toBeDefined();
    });

    it("initializes with 0 balance", function() {
      expect(account.balance).toEqual(0);
    });
  });
});
