/* (C) 2016 Ask Learn Share Ltd */
console.log("Figure 2");

var alsFigure = angular.module("alsFigure", []);

alsFigure.directive('alsFigurePhotoMain', function () {
  return {
    scope: {
        image: '=',
        cuts: '='
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
        cuts: '='
    },
    controller: function () {
      // this.name = 'Pascal';
    },
    controllerAs: 'alsFigureVideoMainCtrl',
//    bindToController: true,
    templateUrl: window.x.app + 'figure/alsFigureVideoMain.html'
  };
});
