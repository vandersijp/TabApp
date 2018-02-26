/* (C) 2016 Ask Learn Share Ltd */
console.log("Example 2");

var alsExample = angular.module("alsExample", ['ngMaterial', 'ngAnimate']);

alsIcon.directive('alsExampleFunction', function() {
    return {
        scope: {
            example1: '=',
            example1: '='
        },
        controller: function() {
            // set openings position
            // this.toggle = false;
        },
        controllerAs: 'alsExampleFunctionCtrl',
        //    bindToController: true,
        templateUrl: window.x.app + 'example/alsExampleFunction.html'
    };
});
