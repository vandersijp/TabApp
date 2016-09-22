/* (C) 2016 Ask Learn Share Ltd */
var alsTab = angular.module("alsTab", ['ngMaterial', 'ngAnimate', 'alsIcon', 'alsList', 'alsFigure']);

alsTab.directive('alsTabContent', function() {
    return {
        scope: {
            tab: '=',
            data: '='
        },
        controller: function() {
            // set openings position
            // this.toggle = false;
        },
        controllerAs: 'alsTabContentCtrl',
        //    bindToController: true,
        templateUrl: 'app/tab/alsTabContent.html'
    };
});
