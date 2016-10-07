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

alsFigure.directive('alsFigureVideoMain', function () {
  return {
    scope: {
        video: '=',
        path: '='
    },
    controller: function () {
      // this.name = 'Pascal';
    },
    controllerAs: 'alsFigureVideoMainCtrl',
//    bindToController: true,
    templateUrl: window.x.app + 'figure/alsFigureVideoMain.html'
  };
});
