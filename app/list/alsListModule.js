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
        templateUrl: 'https://rawgit.com/vandersijp/TabApp/master/app/list/alsListSingle.html'
        //templateUrl: 'https://rawgit.com/vandersijp/tab-app/master/app/list/alsListSingle.html'

    }
});

alsList.directive('alsListTable', function() {
    return {
        restrict: 'E',
        scope: {
            table: '='
        },
        templateUrl: 'https://rawgit.com/vandersijp/TabApp/master/app/list/alsListTable.html'
    }
});