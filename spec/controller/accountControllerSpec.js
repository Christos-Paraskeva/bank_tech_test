var accountController;

describe('AccountController', function() {

  accountController = new AccountController();

  it("exists", function() {
    expect(accountController).toBeDefined();
  });

  it("initializes with Account Model", function() {
    expect(accountController.account instanceof Account).toBe(true);
  });
});
