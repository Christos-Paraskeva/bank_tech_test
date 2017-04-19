var accountController;

describe('AccountController', function() {

  accountController = new AccountController();

  it("exists", function() {
    expect(accountController).toBeDefined();
  });

  it("initializes with Account Model", function() {
    expect(accountController.account instanceof Account).toBe(true);
  });

  describe('Controller calls Account model', function() {

    function AccountDouble() {
      this.balance = 0;
    }

    AccountDouble.prototype = {
      depositMoney: function(amount) {
      },
      withdrawMoney: function(amount) {
      }
    };

    beforeEach(function() {
      accountController = new AccountController(account = new AccountDouble());
    });

    it("when making a deposit", function() {
      var depositMoneySpy = spyOn(accountController.account, 'depositMoney').and.callThrough();
      accountController.makeDeposit(200);
      expect(depositMoneySpy).toHaveBeenCalled();
    });
  });
});
