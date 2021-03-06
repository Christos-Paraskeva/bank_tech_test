var accountController;

describe('AccountController', function() {

  function ActivityLoggerDouble() {
  }

  ActivityLoggerDouble.prototype = {
    sendToView: function() {
    }
  };

  function AccountDouble(activityLoggerDouble = new ActivityLoggerDouble()) {
    this.balance = 0;
    this.activityLogger = activityLoggerDouble;
  }

  AccountDouble.prototype = {
    depositMoney: function(amount) {
    },
    withdrawMoney: function(amount) {
    }
  };

  beforeEach(function() {
    accountController = new AccountController();
  });

  it("exists", function() {
    expect(accountController).toBeDefined();
  });

  it("initializes with Account Model", function() {
    expect(accountController.account instanceof Account).toBe(true);
  });

  describe('Controller calls Account model', function() {

    beforeEach(function() {
      accountController = new AccountController(account = new AccountDouble());
    });

    it("when making a deposit", function() {
      var depositMoneySpy = spyOn(accountController.account, 'depositMoney').and.callThrough();
      accountController.makeDeposit(200);
      expect(depositMoneySpy).toHaveBeenCalled();
    });

    it("when making a withdrawal", function() {
      var withdrawMoneySpy = spyOn(accountController.account, 'withdrawMoney').and.callThrough();
      accountController.makeWithdrawal(200);
      expect(withdrawMoneySpy).toHaveBeenCalled();
    });

    describe('Controller calls ActivityLog model', function() {

      beforeEach(function() {
        var accountDouble = new AccountDouble(activityLoggerDouble = new ActivityLoggerDouble());
      });

      it("when viewing statement", function() {
        var viewStatementSpy = spyOn(accountController.account.activityLogger, 'sendToView').and.callThrough();
        accountController.viewStatement();
        expect(viewStatementSpy).toHaveBeenCalled();
      });
    });

    describe('Edge cases', function() {

      it("should raise an error if deposit is called with 0", function(){
        expect(function() {accountController.makeDeposit(0)}).toThrow("Please enter a positive number");
      });

      it("should raise an error if withdrawal is called with 0", function(){
        expect(function() {accountController.makeWithdrawal(0)}).toThrow("Please enter a positive number");
      });

      it("should raise an error if deposit is called with a negative number", function(){
        expect(function() {accountController.makeDeposit(-1)}).toThrow("Please enter a positive number");
      });

      it("should raise an error if withdrawal is called with a negative number", function(){
        expect(function() {accountController.makeWithdrawal(-1)}).toThrow("Please enter a positive number");
      });
    });
  });
});
