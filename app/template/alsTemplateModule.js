/* (C) 2016 Ask Learn Share Ltd */
console.log("Template 2");

var alsTemplate = angular.module("alsTemplate", []);

alsTemplate.directive('alsTemplateStatement', function () {
  return {
    scope: {
        statement: '='
    },
    controller: function () {
      // this.name = 'Pascal';
    },
    controllerAs: 'alsTemplateStatementCtrl',
//    bindToController: true,
    templateUrl: window.x.app + 'template/alsTemplateStatement.html'
  };
});

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
