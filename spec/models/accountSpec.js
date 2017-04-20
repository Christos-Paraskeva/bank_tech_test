describe('Account', function() {

  describe('Default Account', function() {
    var account = new Account();

    it("exists", function() {
      expect(account).toBeDefined();
    });

    it("initializes with ActivityLogger", function() {
      expect(account.activityLogger instanceof ActivityLogger).toBe(true);
    });

    it("initializes with 0 balance", function() {
      expect(account.balance).toEqual(0);
    });
  });

  describe('Functionality', function() {
    var account;

    beforeEach(function() {
      // can put this in a helper method ('reset balance')
      account = new Account();
      account.balance = 200;
    });

    it("can deposit money", function() {
      account.depositMoney(100);
      expect(account.balance).toEqual(300);
    });

    it("can deposit money rounded to 2 decimal places", function() {
      account.depositMoney(150.57);
      expect(account.balance).toEqual(350.57);
    });

    it("calls the activityLogger when depositing money", function() {
      var logDepositSpy = spyOn(account.activityLogger, 'logDeposit').and.callThrough();
      account.depositMoney(100);
      expect(logDepositSpy).toHaveBeenCalled();
    });

    it("can withdraw money", function() {
      // can include the below within expect statement ('to change'?)
      account.withdrawMoney(100);
      expect(account.balance).toEqual(100);
    });

    it("can withdraw money rounded to 2 decimal places", function() {
      // can include the below within expect statement ('to change'?)
      account.withdrawMoney(80.50);
      expect(account.balance).toEqual(119.50);
    });

    it("calls the activityLogger when withdrawing money", function() {
      var logWithdrawalSpy = spyOn(account.activityLogger, 'logWithdrawal').and.callThrough();
      account.withdrawMoney(100);
      expect(logWithdrawalSpy).toHaveBeenCalled();
    });
  });
});
