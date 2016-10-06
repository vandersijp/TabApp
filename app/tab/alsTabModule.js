/* (C) 2016 Ask Learn Share Ltd */
console.log("Tab 9");

var alsTab = angular.module("alsTab", []);

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
        templateUrl: window.x.app + 'tab/alsTabContent.html'
    };
});
