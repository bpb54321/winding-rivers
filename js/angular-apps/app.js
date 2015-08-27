
(function () {
    var app = angular.module("mainApp", []);

    app.controller('DisplayBoxController', function () {
        this.annualIncome = 30000;
        this.costOfProperty = 2000000;
        this.numOfUnits = 12;
        this.costSharingModel = "Split Evenly";
        this.resultsObject = {
            costSharingModels: ["Split Evenly","Sliding Scale"],
            householdMonthlyPayment: [0,0],
            pctMonthlyIncome: [0,0]
        };
        this.monthlyPayment = 0;
        this.splitEvenMonthlyPmt = 0;
        this.slideScaleMonthlyPmt = 0;
        this.apr = 5;
        this.incomeGroups = ["<10k", "10k-20k", "20k-30k", "30k-40k", "40k-50k", "50k-60k", "60k-75k",
            "75k-100k", "100k-125k", "125k-150k", "150-200k", ">200k"];
        this.representativeIncomes = [10000, 15000, 25000, 35000, 45000, 55000, 67500, 87500, 112500,
            137500, 175000, 200000];
        this.distributionPct = [16, 15, 14, 11, 10, 7, 8, 8, 5, 2, 2, 2];
        this.peoplePerIncome = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.totalGroupAnnualIncome = 0;
        this.pctIncomeTowardsMortgage = 0;
        this.groupMonthlyMortgagePayment = 0;
        this.groupAnnualMortgagePayment = 0;
        this.calcPeoplePerIncome = function (groupSize) {
            for (var i = 0; i < this.representativeIncomes.length; i++) {
                this.peoplePerIncome[i] = this.distributionPct[i] * .01 * groupSize;
            }
        };
        this.calcPeoplePerIncome2 = function (groupSize) {
            var peoplePerIncome = [];
            for (var i = 0; i < this.representativeIncomes.length; i++) {
                peoplePerIncome.push(this.distributionPct[i] * .01 * groupSize);
            }
            return peoplePerIncome;
        };
        this.peoplePerIncomeStatic=this.calcPeoplePerIncome2(12);
        this.calcMonthlyPayment = function () {
            var years = 30;
            var months = years * 12;
            
            //Calculate group mortgage payment
            var rate = (this.apr / 12) / 100; //monthly interest rate in decimal form
            this.groupMonthlyMortgagePayment = (this.costOfProperty * rate) / (1 - Math.pow(1 + rate, -months));
            this.groupAnnualMortgagePayment = this.groupMonthlyMortgagePayment * 12;
            

            this.splitEvenMonthlyPmt = this.groupMonthlyMortgagePayment / this.numOfUnits;
            
            this.resultsObject.householdMonthlyPayment[0] = this.groupMonthlyMortgagePayment / this.numOfUnits;
            this.resultsObject.pctMonthlyIncome[0] =100 * this.resultsObject.householdMonthlyPayment[0] / (this.annualIncome/12);

            //Calculate sliding scale monthly payment
            this.totalGroupAnnualIncome = 0; //reset total group income
            this.calcPeoplePerIncome(this.numOfUnits);
            for (var j = 0; j < this.peoplePerIncome.length; j++) {
                this.totalGroupAnnualIncome += this.peoplePerIncome[j] *
                        this.representativeIncomes[j];
            }
            this.pctIncomeTowardsMortgage = (this.groupAnnualMortgagePayment / this.totalGroupAnnualIncome) * 100;
            this.slideScaleMonthlyPmt = (this.annualIncome * this.pctIncomeTowardsMortgage * .01) / 12;
            
            //Sliding scale household monthly payment
            this.resultsObject.householdMonthlyPayment[1] = (this.annualIncome * this.pctIncomeTowardsMortgage * .01) / 12;
            this.resultsObject.pctMonthlyIncome[1] = this.pctIncomeTowardsMortgage;

        };
    });
    
})();


