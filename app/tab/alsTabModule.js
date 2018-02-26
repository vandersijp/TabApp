/* (C) 2016 Ask Learn Share Ltd */
console.log("Tab 2");

var alsTab = angular.module("alsTab", ['app', 'alsUtils', 'alsContact', 'alsAccess', 'alsIcon', 'alsList', 'alsFigure', 'alsTab', 'alsCard', 'alsFigure', 'alsText']);

alsTab.directive('alsTabContent', ['alsLib', function(alsLib) {
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
}]);
