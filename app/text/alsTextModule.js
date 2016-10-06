/*
(C) 2016 Ask Learn Share Ltd
*/
var alsList = angular.module("alsList", ['ngMaterial', 'ngAnimate', 'ngSanitize']);

alsList.directive('alsTextSection', function() {
    return {
        restrict: 'E',
        scope: {
            sectiom: '='
        },
        templateUrl: window.x.app + 'text/alsTextSection.html'
    }
});
