
(function() {
    var app = angular.module("mainApp",[]);
    
    app.controller('DisplayBoxController', function() {
        this.annualIncome = 30000;
        this.costOfProperty = 100000;
        this.numOfUnits = 12;
        this.costSharingModel = "Split Evenly";
        this.monthlyPayment = 0;
        this.apr = 4;
        this.calcMonthlyPayment = function() {
            if (this.costSharingModel==="Split Evenly") {
                //this.monthlyPayment = this.costOfProperty/this.numOfUnits;
                var years=30;
                var months=years*12;
                var rate=(this.apr/12)/100; //monthly interest rate in decimal form
                var onePersonPayment= (this.costOfProperty * rate) / (1 - Math.pow(1+rate,-months));
                this.monthlyPayment = onePersonPayment/this.numOfUnits;
            } else {
                this.monthlyPayment = -3;
            }
             
        };
//        this.costSharingModel = [
//            {
//                name:"Split Evenly",
//                desc:"In this model, the group mortgage is split evenly " +
//                        "by all members, regardless of their incomes."
//        },
//            {
//                name:"Sliding Scale",
//                desc:"In this model, the member's fraction of the group mortgage " +
//                        "is proportional to the member's fraction of the group's " +
//                        "combined income."
//            
//        }];
    });
    app.controller('ModelController', function() {
        this.activeTab = 1;
        this.setTab = function(selectedTab) {
            this.activeTab = selectedTab;
        };
        this.isTabActive = function(tabInQuestion) {
            return this.activeTab === tabInQuestion;
        };
    });
})();


