/* (C) 2016 Ask Learn Share Ltd */
var alsIcon = angular.module("alsIcon", []);

alsIcon.directive('alsIconMenuPair', function() {
    return {
        scope: {
            toggle: '=',
            label1: '=',
            label2: '=',
            icon1: '=',
            icon2: '='
        },
        controller: function() {
            // set openings position
            // this.toggle = false;
        },
        controllerAs: 'alsIconMenuPairCtrl',
        //    bindToController: true,
        templateUrl: window.x.app + 'icon/alsIconMenuPair.html'
    };
});

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
        templateUrl: window.x.app + 'icon/alsIconFabPair.html'
    };
});

alsIcon.directive('alsIconFlagPair', function() {
    return {
        scope: {
            lang1: '=',
            lang2: '='
        },
        templateUrl: window.x.app + 'icon/alsIconFlagPair.html'
    };
});
