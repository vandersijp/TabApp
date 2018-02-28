/* (C) 2016 Ask Learn Share Ltd */
console.log("Template 1");

var alsTemplate = angular.module("alsTemplate", []);

alsTemplate.directive('alsTemplateInvoiceMain', function () {
  return {
    scope: {
        image: '=',
        cuts: '='
    },
    controller: function () {
      // this.name = 'Pascal';
    },
    controllerAs: 'alsTemplateInvoiceMainCtrl',
//    bindToController: true,
    templateUrl: window.x.app + 'template/alsTemplateInvoiceMain.html'
  };
});

alsTemplate.directive('alsTemplateResolutionMain', function () {
  return {
    scope: {
        video: '=',
        cuts: '='
    },
    controller: function () {
      // this.name = 'Pascal';
    },
    controllerAs: 'alsTemplateResolutionMainCtrl',
//    bindToController: true,
    templateUrl: window.x.app + 'template/alsTemplateResolutionMain.html'
  };
});
