var activityLogger;
var dummyDate;
var output;

describe('Activity Logger', function() {

  function AccountViewDouble() {
  }

  AccountViewDouble.prototype = {
    printStatement: function(activityLog) {
    }
  };

  // function AccountDouble() {
  //   this.balance = 2000;
  // }

  // AccountDouble.prototype = {
  //   depositMoney: function(amount, balance) {
  //     this.balance += amount;
  //     activityLogger.logDeposit(amount, this.balance);
  //   },
  //   withdrawMoney: function(amount, balance) {
  //     this.balance -= amount;
  //     activityLogger.logWithdrawal(amount, this.balance);
  //   }
  // };

  beforeEach(function() {
    activityLogger = new ActivityLogger(view = new AccountViewDouble());
    output = formattedOutput();
  });

  it("exists", function() {
    expect(activityLogger).toBeDefined();
  });

  it("is initialized with empty accountLog array", function(){
    expect(activityLogger.accountLog).toEqual([]);
  });

  it("is initialized with AccountView", function() {
    expect(activityLogger.view instanceof AccountViewDouble).toBe(true);
  });

  it('has a default template', function() {
    expect(activityLogger.template).toEqual("Date || Debit || Credit || Balance");
  });

  it("calls the AccountView to display statement", function() {
    var printStatementSpy = spyOn(activityLogger.view, 'printStatement').and.callThrough();
    activityLogger.sendToView(output);
    expect(printStatementSpy).toHaveBeenCalledWith(output);
  });

  describe("When making a deposit", function(){

    beforeEach(function() {
      dummyDate = new Date("2016-06-13T12:00:00Z");
    });

    it("logs the transaction", function() {
      activityLogger.logDeposit()
      expect(activityLogger.accountLog[0] instanceof Transaction).toBe(true);
    });

    it("sets the correct date", function() {
      var spy = spyOn(window, 'Date').and.returnValue(dummyDate);
      activityLogger.logDeposit()
      expect(activityLogger.accountLog[0].date).toEqual('13/06/2016');
    });

    it("sets the correct credit", function() {
      activityLogger.logDeposit(800)
      expect(activityLogger.accountLog[0].credit).toEqual(800);
    });

    it("sets the correct revised balance", function() {
      activityLogger.logDeposit(800, 1800)
      expect(activityLogger.accountLog[0].revisedBalance).toEqual(1800);
    });

    describe("When making a withdrawal", function(){

      beforeEach(function() {
        dummyDate = new Date("2016-06-13T12:00:00Z");
      });

      it("logs the transaction", function() {
        activityLogger.logWithdrawal()
        expect(activityLogger.accountLog[0] instanceof Transaction).toBe(true);
      });

      it("sets the correct date", function() {
        var spy = spyOn(window, 'Date').and.returnValue(dummyDate);
        activityLogger.logWithdrawal()
        expect(activityLogger.accountLog[0].date).toEqual('13/06/2016');
      });

      it("sets the correct credit", function() {
        activityLogger.logWithdrawal(800)
        expect(activityLogger.accountLog[0].debit).toEqual(800);
      });

      it("sets the correct revised balance", function() {
        activityLogger.logWithdrawal(800, 1800)
        expect(activityLogger.accountLog[0].revisedBalance).toEqual(1800);
      });
    });
  });
});
