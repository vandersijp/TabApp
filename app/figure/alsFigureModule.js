/*
(C) 2016 Ask Learn Share Ltd
*/
var alsFigure = angular.module("alsFigure", []);

alsFigure.directive('alsFigurePhotoMain', function () {
  return {
    scope: {
        image: '=',
        path: '='
    },
    controller: function () {
      // this.name = 'Pascal';
    },
    controllerAs: 'alsFigurePhotoMainCtrl',
//    bindToController: true,
    templateUrl: window.x.app + 'figure/alsFigurePhotoMain.html'
  };
});
