var activityLogger;
var dummyDate;
var formatDate;

describe('Activity Logger', function() {

  beforeAll(function() {
    activityLogger = new ActivityLogger();
  });

  it("exists", function() {
    expect(activityLogger).toBeDefined();
  });

  it("initialized with an empty accountLog array", function(){
    expect(activityLogger.accountLog).toEqual([]);
  });

  describe("Logs", function(){

    function AccountDouble() {
      this.balance = 0;
    }

    AccountDouble.prototype = {
      depositMoney: function(amount, balance) {
        this.balance += amount;
        activityLogger.logDeposit(amount, this.balance);
      }
    };

    it("deposit with the correct date and header", function() {
      accountDouble = new AccountDouble();
      var dummyDate = new Date("2016-06-13T12:00:00Z");
      var spy = spyOn(window, 'Date').and.returnValue(dummyDate);
      accountDouble.depositMoney(800);
      expect(activityLogger.accountLog).toEqual(["13/06/2016", 800, "", 800]);
    });
  });
});
