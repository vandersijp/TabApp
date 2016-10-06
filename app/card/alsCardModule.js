/* (C) 2016 Ask Learn Share Ltd */
var alsCard = angular.module("alsCard", ['ngMaterial', 'ngAnimate', 'ngSanitize']);

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

alsCard.directive('alsCardMessage', function() {
    return {
        scope: {
            card: '='
        },
        controller: function() {
            // set openings position
            // this.toggle = false;
        },
        controllerAs: 'alsCardMessageCtrl',
        //    bindToController: true,
        templateUrl: window.x.app + 'card/alsCardMessage.html'
    };
});
