/* (C) 2016 Ask Learn Share Ltd */
var alsIcon = angular.module("alsIcon", ['ngMaterial', 'ngAnimate']);

alsIcon.directive('ii', function() {
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
        controllerAs: 'ii',
        //    bindToController: true,
        templateUrl: 'https://rawgit.com/vandersijp/TabApp/master/app/icon/ii.html'
    };
});

alsIcon.directive('alsIconMenuFabPair', function() {
    return {
        scope: {
            class: '=',
            toggle: '=',
            label1: '=',
            label2: '=',
            icon1: '=',
            icon2: '=',
            disabled: '=',
            label: '='
        },
        controller: function() {
            // set openings position
            // this.toggle = false;
        },
        controllerAs: 'alsIconMenuFabPairCtrl',
        //    bindToController: true,
        templateUrl: 'https://rawgit.com/vandersijp/TabApp/master/app/icon/alsIconMenuFabPair.html'
    };
});

alsIcon.directive('alsIconFabPairAttr', function() {
    return {
        scope: {
            toggle: '=',
            icon1: '=',
            icon2: '=',
            disabled: '='
        },
        controller: function() {
            // set openings position
            // this.toggle = false;
        },
        controllerAs: 'alsIconFabPairAttrCtrl',
        //    bindToController: true,
        templateUrl: 'https://rawgit.com/vandersijp/TabApp/master/app/icon/alsIconFabPairAttr.html'
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
        templateUrl: 'https://rawgit.com/vandersijp/TabApp/master/app/icon/alsIconFabPair.html'
    };
});

alsIcon.directive('alsIconFlagPair', function() {
    return {
        scope: {
            lang1: '=',
            lang2: '='
        },
        templateUrl: 'https://rawgit.com/vandersijp/TabApp/master/app/icon/alsIconFlagPair.html'
    };
});
