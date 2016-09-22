/* (C) 2016 Ask Learn Share Ltd */
var alsIcon = angular.module("alsIcon", ['ngMaterial', 'ngAnimate']);

alsIcon.directive('alsIconFabPair', function() {
    return {
        scope: {
            class: '=',
            toggle: '=',
            icon1: '=',
            icon2: '=',
            disabled: '=',
            label: '='
        },
        controller: function() {
            // set openings position
            // this.toggle = false;
        },
        controllerAs: 'alsIconFabPairCtrl',
        //    bindToController: true,
        templateUrl: 'app/icon/alsIconFabPair.html'
    };
});

alsIcon.directive('alsIconFlagPair', function() {
    return {
        scope: {
            lang1: '=',
            lang2: '='
        },
        templateUrl: 'app/icon/alsIconFlagPair.html'
    };
});
