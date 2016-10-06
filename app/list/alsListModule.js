/*
(C) 2016 Ask Learn Share Ltd
*/
var alsList = angular.module("alsList", []);

alsList.directive('alsListSingle', function() {
    return {
        restrict: 'E',
        scope: {
            list: '='
        },
        templateUrl: window.x.app + 'list/alsListSingle.html'
    }
});

alsList.directive('alsListTable', function() {
    return {
        restrict: 'E',
        scope: {
            table: '='
        },
        templateUrl: window.x.app + 'list/alsListTable.html'
    }
});

alsList.directive('alsListTableFiltered', function() {
    return {
        restrict: 'E',
        scope: {
            table: '='
        },
        templateUrl: window.x.app + 'list/alsListTableFiltered.html'
    }
});
