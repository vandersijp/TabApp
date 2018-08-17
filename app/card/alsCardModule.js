/* (C) 2016 Ask Learn Share Ltd */
console.log("Card 6");

var alsCard = angular.module("alsCard", []);

alsCard.directive('alsCardExample', function() {
    return {
        scope: {
            attr1: '=',
            attr2: '='
        },
        controller: function() {
            // set openings position
            // this.toggle = false;
        },
        controllerAs: 'alsCardExampleCtrl',
        //    bindToController: true,
        templateUrl: window.x.app + 'card/alsCardExample.html'
    };
});

alsCard.directive('alsCardGeneral', function() {
    return {
        scope: {
            cardset: '=',
            cuts: '='
        },
        templateUrl: window.x.app + 'card/alsCardGeneral.html'
    };
});
