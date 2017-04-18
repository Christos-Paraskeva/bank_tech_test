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

  describe('account functionality', function() {
    var account;

    beforeEach(function() {
      // can put this in a helper method ('reset balance')
      account = new Account();
      this.balance = 0;
    });

    it("can deposit money", function() {
      account.depositMoney(100);
      expect(account.balance).toEqual(100);
    });

    it("can withdraw money", function() {
      account.depositMoney(200);
      // can include the below within expect statement ('to change'?)
      account.withdrawMoney(100);
      expect(account.balance).toEqual(100);
    });
  });
});
