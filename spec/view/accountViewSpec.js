var accountView;
var activityLog;

describe('AccountView', function() {

  describe('Viewing Statement', function() {
    accountView = new AccountView();
    activityLog = formattedOutput();

    it("exists", function() {
      expect(accountView).toBeDefined();
    });

    it("outputs the statement on the console", function () {
      console.log = jasmine.createSpy("log");
      accountView.printStatement(activityLog);
      expect(console.log).toHaveBeenCalled();
    });
  });
});
