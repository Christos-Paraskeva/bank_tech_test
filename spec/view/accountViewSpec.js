describe('AccountView', function() {

  describe('Viewing Statement', function() {
    var accountView = new AccountView();

    it("exists", function() {
      expect(accountView).toBeDefined();
    });

    it("has a default template", function() {
      expect(accountView.template).toEqual(['Date', 'Credit', 'Debit', 'Balance']);
    });
  });
});
