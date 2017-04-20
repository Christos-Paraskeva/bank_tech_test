var accountView;
var activityLog;

describe('AccountView', function() {
  accountView = new AccountView();

  it("exists", function() {
    expect(accountView).toBeDefined();
  });

  it('has a default template', function() {
    expect(accountView.template).toEqual("Date || Debit || Credit || Balance");
  });

  describe('Viewing Statement', function() {
    activityLog = formattedOutput();

    it("outputs the statement on the console", function () {
      console.log = jasmine.createSpy("log");
      accountView.printStatement(activityLog);
      expect(console.log).toHaveBeenCalled();
    });
  });
});
