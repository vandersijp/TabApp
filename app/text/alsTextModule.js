/*
(C) 2016 Ask Learn Share Ltd
*/
var alsText = angular.module("alsList", ['ngMaterial', 'ngAnimate', 'ngSanitize']);

alsList.directive('alsTextSection', function() {
    return {
        restrict: 'E',
        scope: {
            section: '='
        },
        templateUrl: window.x.app + 'text/alsTextSection.html'
    }
});
