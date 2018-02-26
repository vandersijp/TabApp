/* (C) 2016 Ask Learn Share Ltd */
console.log("Utils 2");

var alsUtils = angular.module("alsUtils", []);

alsUtils.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});

alsUtils.factory('alsUtilsFactory', [function() {
  var utils = {
    alsUtils: []
  };
  utils.F3 = function(para) {
      var valueIneed = para + " " + "F3";
      return valueIneed;
    },
    utils.F4 = function(para) {
      var valueIneed = para + " " + "F4";
      return valueIneed;
    };
  return utils;
}]);
