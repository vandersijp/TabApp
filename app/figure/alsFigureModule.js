/*
(C) 2016 Ask Learn Share Ltd
*/
var alsFigure = angular.module("alsFigure", ['ngMaterial', 'ngAnimate']);

alsFigure.directive('alsFigurePhotoMain', function () {
    return {
        scope: {
            tab: '=',
            data: '='
        },
    controller: function () {
      // this.name = 'Pascal';
    },
    controllerAs: 'alsFigurePhotoMainCtrl',
//    bindToController: true,
    templateUrl: 'app/figure/alsFigurePhotoMain.html'
  };
});
