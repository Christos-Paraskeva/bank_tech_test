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

  beforeEach(function() {
    activityLogger = new ActivityLogger(view = new AccountViewDouble());
    output = formattedOutput();
  });

  it("exists", function() {
    expect(activityLogger).toBeDefined();
  });

  it("is initialized with the accountLog array", function(){
    expect(activityLogger.accountLog).toEqual([['Date', 'Credit', 'Debit', 'Balance']]);
  });

  it("is initialized with AccountView", function() {
    expect(activityLogger.view instanceof AccountViewDouble).toBe(true);
  });

  it("calls the AccountView to display statement", function() {
    var printStatementSpy = spyOn(activityLogger.view, 'printStatement').and.callThrough();
    activityLogger.sendToView(output);
    expect(printStatementSpy).toHaveBeenCalledWith(output);
  });

  describe("Logs", function(){

    function AccountDouble() {
      this.balance = 2000;
    }

    AccountDouble.prototype = {
      depositMoney: function(amount, balance) {
        this.balance += amount;
        activityLogger.logDeposit(amount, this.balance);
      },
      withdrawMoney: function(amount, balance) {
        this.balance -= amount;
        activityLogger.logWithdrawal(amount, this.balance);
      }
    };

    beforeEach(function() {
      accountDouble = new AccountDouble();
      dummyDate = new Date("2016-06-13T12:00:00Z");
    });

    it("deposit with the correct date and header", function() {
      var spy = spyOn(window, 'Date').and.returnValue(dummyDate);
      accountDouble.depositMoney(800);
      expect(activityLogger.accountLog).toEqual([ [ 'Date', 'Credit', 'Debit', 'Balance' ], [ '13/06/2016', 800, '', 2800 ] ]);
    });

    it("withdrawal with the correct date and header", function() {
      var spy = spyOn(window, 'Date').and.returnValue(dummyDate);
      accountDouble.withdrawMoney(450);
      expect(activityLogger.accountLog).toEqual([ [ 'Date', 'Credit', 'Debit', 'Balance' ], [ '13/06/2016', '', 450, 1550 ] ]);
    });
  });
});
