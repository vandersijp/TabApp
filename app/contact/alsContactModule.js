/* (C) 2016 Ask Learn Share Ltd */
console.log("Contact 9");

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

                angular.forEach(window.appProperties.defaults, function(value, key) {
                    if (message[key] == null || message[key] === '') {
                        message[key] = value;
                    }
                });

                $http({
                    method: 'POST',
                    // PHP file must be stored on own server, at root level
                    url: window.x.send,
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
        templateUrl: window.x.app + 'contact/alsContactForm.html'
    }
});

alsContact.controller('alsContactController', function($scope, $http) {
    // failed to include this in the "alsContactFormCtrl" controller
    var self = this;
    this.status = {};
    this.status.open = false;
});
