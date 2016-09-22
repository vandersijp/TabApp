/* (C) 2016 Ask Learn Share Ltd */
var alsAccess = angular.module("alsAccess", []);

alsAccess.directive('alsAccessForm', function() {
    return {
        restrict: 'E',
        scope: {
            access: '='
        },
        /* this funtion is not recognised */
        controller: function() {
            this.codeCompare = function(val1, val2) {
                return (val1.toLowerCase() == val2.toLowerCase());
            }
        },
        controllerAs: 'alsAccessFormCtrl',
        // bindToController: true,
        templateUrl: 'app/access/alsAccessForm.html'
    }
});
