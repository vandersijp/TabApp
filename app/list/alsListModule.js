/*
(C) 2016 Ask Learn Share Ltd
*/
var alsList = angular.module("alsList", ['ngMaterial', 'ngAnimate', 'ngSanitize']);

alsList.directive('alsListSingle', function() {
    return {
        restrict: 'E',
        scope: {
            list: '='
        },
        templateUrl: 'https://rawgitx.com/vandersijp/tab-app/master/app/list/alsListSingle.html'
    }
});

alsList.directive('alsListTable', function() {
    return {
        restrict: 'E',
        scope: {
            table: '='
        },
        templateUrl: 'app/list/alsListTable.html'
    }
});
