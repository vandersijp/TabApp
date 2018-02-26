/* (C) 2016 Ask Learn Share Ltd */
console.log("Dummy 2");

var alsDummy = angular.module("alsDummy", []);

alsDummy.directive('alsDummyExample', function() {
    return {
        scope: {
            attr1: '=',
            attr2: '='
        },
        controller: function() {
            // set openings position
            // this.toggle = false;
        },
        controllerAs: 'alsDummyExampleCtrl',
        //    bindToController: true,
        templateUrl: window.x.app + 'Dummy/alsDummyExample.html'
    };
});
