/* (C) 2016 Ask Learn Share Ltd */
console.log("Tab 20161005.22");

var alsTab = angular.module("alsTab", ['ngMaterial', 'ngAnimate', 'alsIcon', 'alsList', 'alsFigure']);

alsTab.directive('alsTabContent', function() {
    return {
        scope: {
            tab: '=',
            data: '=',
            props: '='
        },
        controller: function() {
            // set openings position
            // this.toggle = false;
        },
        controllerAs: 'alsTabContentCtrl',
        //    bindToController: true,
        templateUrl: 'https://rawgit.com/vandersijp/TabApp/master/app/tab/alsTabContent.html'
    };
});
