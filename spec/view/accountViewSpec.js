describe('AccountView', function() {

  describe('Viewing Statement', function() {
    var accountView = new AccountView();
    var accountLog = [["13/06/2016", 800, "", 2800],["13/06/2016", "", 1200, 1600]];

    it("exists", function() {
      expect(accountView).toBeDefined();
    });

    it("has a default template", function() {
      expect(accountView.template).toEqual(['Date', 'Credit', 'Debit', 'Balance']);
    });

    it("outputs the statement on the console", function () {
      console.log = jasmine.createSpy("log");
      var output = accountView.printStatement(accountLog);
      expect(console.log).toHaveBeenCalledWith(output);
    });
  });
});
