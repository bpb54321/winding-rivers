(function () {
    var app = angular.module("member-app", []);

//    function Member() {
//        this.name = "";
//        this.imageUrl = "";
//        this.bio = "";
//    }

    app.controller('MemberAccordionController', function () {
        this.members = [
            {
                name: "Elizabeth (Za) Goodbrake",
                imageUrl: "img/Membership/za_goodbrake.jpg",
                bio: "Hi! I'm Elizabeth (Za) Goodbrake. I'm an internationalist, violinist and yoga enthusiast. I have a 1 year old daughter Lorraine and am expecting another baby in May, Before kids, I traveled over two years throughout 28 countries studying language, culture and yoga. I'm a high school teacher at University City. I love cooking with whole foods and taking long walks almost every day. I've wanted to return to living in community ever since my husband and I lived at PunPun, an ecovillage and seed saving operation, in Thailand."
            },
            {
                name: "",
                imageUrl: "",
                bio: ""
            },
            {
                name: "",
                imageUrl: "",
                bio: ""
                
            }];

    });

})();


