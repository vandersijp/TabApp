/* (C) 2016 Ask Learn Share Ltd */
console.log("Template 1");

var alsTemplate = angular.module("alsTemplate", []);

alsTemplate.directive('alsTemplateInvoice', function () {
  return {
    scope: {
        invoice: '=',
        cuts: '='
    },
    controller: function () {
      // this.name = 'Pascal';
    },
    controllerAs: 'alsTemplateInvoiceCtrl',
//    bindToController: true,
    templateUrl: window.x.app + 'template/alsTemplateInvoice.html'
  };
});

alsTemplate.directive('alsTemplateResolution', function () {
  return {
    scope: {
        resolution: '=',
        cuts: '='
    },
    controller: function () {
      // this.name = 'Pascal';
    },
    controllerAs: 'alsTemplateResolutionCtrl',
//    bindToController: true,
    templateUrl: window.x.app + 'template/alsTemplateResolution.html'
  };
});
