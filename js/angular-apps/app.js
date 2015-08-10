
(function() {
    var app = angular.module("mainApp",[]);
    
    app.controller('DisplayBoxController', function() {
        this.annualIncome = 30000;
        this.costOfProperty = 100000;
        this.numOfUnits = 12;
        //["Split Evenly","Sliding Scale"];
        this.costSharingModel = [
            {
                name:"Split Evenly",
                desc:"In this model, the group mortgage is split evenly " +
                        "by all members, regardless of their incomes."
        },
            {
                name:"Sliding Scale",
                desc:"In this model, the member's fraction of the group mortgage " +
                        "is proportional to the member's fraction of the group's " +
                        "combined income."
            
        }];
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


