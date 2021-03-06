/* (C) 2016 Ask Learn Share Ltd */
console.log("Tab 14");

var alsTab = angular.module("alsTab", ['ngMaterial', 'ngAnimate', 'ngSanitize', 'alsIcon', 'alsList', 'alsCard', 'alsText', 'alsFigure', 'alsTemplate']);

alsTab.directive('alsTabContent', function() {
    return {
        scope: {
            tab: '=',
            data: '=',
            props: '=',
            cuts: '='
        },
        controller: function() {
            // set openings position
            // this.toggle = false;
        },
        controllerAs: 'alsTabContentCtrl',
        //    bindToController: true,
        templateUrl: window.x.app + 'tab/alsTabContent.html'
    };
});
