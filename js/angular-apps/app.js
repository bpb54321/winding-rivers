
(function() {
    var app = angular.module("mainApp",[]);
    
    var stlIncomes2013 = {
        incomeGroups:["<10k","10k-20k","20k-30k","30k-40k","40k-50k","50k-60k","60k-75k",
            "75k-100k","100k-125k","125k-150k","150-200k",">200k"],
        representativeIncomes: [10000,15000,25000,35000,45000,55000,67500,87500,112500,
            137500,175000,200000],
        distributionPct: [16,15,14,11,10,7,8,8,5,2,2,2],
        peoplePerIncome: [0,0,0,0,0,0,0,0,0,0,0,0],
        calcPeoplePerIncome: function(groupSize) {
            for (var i=0; i++; i<this.representativeIncomes.length) {
                this.peoplePerIncome[i] = this.distributionPct[i]*.01*groupSize;
            }
        }
    };
    
    app.controller('DisplayBoxController', function() {
        this.annualIncome = 30000;
        this.costOfProperty = 100000;
        this.numOfUnits = 12;
        this.costSharingModel = "Split Evenly";
        this.monthlyPayment = 0;
        this.apr = 4;
        this.incomeData=stlIncomes2013;
        this.calcMonthlyPayment = function() {
            if (this.costSharingModel==="Split Evenly") {
                //this.monthlyPayment = this.costOfProperty/this.numOfUnits;
                var years=30;
                var months=years*12;
                var rate=(this.apr/12)/100; //monthly interest rate in decimal form
                var onePersonPayment= (this.costOfProperty * rate) / (1 - Math.pow(1+rate,-months));
                this.monthlyPayment = onePersonPayment/this.numOfUnits;
            } else {
                this.incomeData.calcPeoplePerIncome(this.numOfUnits);
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
//    app.controller('ModelController', function() {
//        this.activeTab = 1;
//        this.setTab = function(selectedTab) {
//            this.activeTab = selectedTab;
//        };
//        this.isTabActive = function(tabInQuestion) {
//            return this.activeTab === tabInQuestion;
//        };
//    });
})();


