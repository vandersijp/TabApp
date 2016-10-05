/* (C) 2016 Ask Learn Share Ltd */
console.log("Contact 20161005.19");

var alsContact = angular.module("alsContact", ['alsIcon']);

alsContact.directive('alsContactForm', function() {
    return {
        restrict: 'E',
        scope: {
            message: '=',
            status: '=',
            props: '='

        },
        controller: function($scope, $http) {
            this.status = {};
            this.status.open = false;

            this.test = function() {
                return 'test';
            };

            this.post = function(message, status) {
                status.success = false;
                status.sending = true;
                status.response = {};

                message["g-recaptcha-response"] = grecaptcha.getResponse();
                message.app = window.appProperties.app;

                if (message.actionlabel == null || message.actionlabel === '') {
                    message.actionlabel = window.appProperties.defaults.actionlabel;
                }
                if (message.action == null || message.action === '') {
                    message.action = window.appProperties.defaults.action;
                }
                if (message.querylabel == null || message.querylabel === '') {
                    message.querylabel = window.appProperties.defaults.querylabel;
                }

                $http({
                    method: 'POST',
                    // PHP file must be stored on own server, at root level
                    url: 'http://www.asklearnshare.com/alsContactSend.php',
                    data: message,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function successCallback(response) {
                    status.success = true;
                    status.response = response;
                    status.sending = false;
                }, function errorCallback(response) {
                    status.response = response;
                    status.sending = false;
                });
            };
        },
        controllerAs: 'alsContactFormCtrl',
        //    bindToController: true,
        templateUrl: 'https://rawgit.com/vandersijp/TabApp/master/app/contact/alsContactForm.html'
    }
});

alsContact.controller('alsContactController', function($scope, $http) {
    // failed to include this in the "alsContactFormCtrl" controller
    var self = this;
    this.status = {};
    this.status.open = false;
});
