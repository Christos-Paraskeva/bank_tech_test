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
      console.log('1')
      console.log(accountController)
      console.log('2')
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
        accountController = new AccountController(account = accountDouble);
      });

      it("when viewing statement", function() {
        var viewStatementSpy = spyOn(accountController.account.activityLogger, 'sendToView').and.callThrough();
        accountController.viewStatement();
        expect(viewStatementSpy).toHaveBeenCalled();
      });
    });
  });
});
