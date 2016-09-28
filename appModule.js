/* (C) 2016 Ask Learn Share Ltd */

// button to close the sideNav
// <md-button ng-click="close()" class="md-primary" hide-gt-md="">close</md-button>

var app = angular.module('app', ['ngMaterial', 'ngAnimate', 'firebase', 'ngSanitize', 'ngMessages', 'alsContact', 'alsAccess', 'alsIcon', 'alsList', 'alsFigure', 'alsTab'])

app.config(function($mdThemingProvider, $sceDelegateProvider) {

    // see http://stackoverflow.com/questions/20049261/sce-trustasresourceurl-globally
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'https://rawgit.com/vandersijp/**'
    ]);

    var themes = {
        "default": {
            "primary": "teal",
            "accent": "amber"
        },
        "neverturkey": {
            "primary": "red",
            "accent": "green"
        },
        "mexit": {
            "primary": "green",
            "accent": "red"
        },
        "nw3": {
            "primary": "indigo",
            "accent": "red"
        },
        "asklearnshare": {
            "primary": "teal",
            "accent": "amber"
        },
    }

    var root = "";
    var host = window.location.hostname;
    if (host == 'localhost') {
        // replace only replacs the first occurence
        // see http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
        root = window.location.pathname.split("/").join("");
    } else {
        root = host.split(".")[0];
    };

    /*
    // this code is a test to load a json file instead, but the asynchronicity spoils the party
    var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');
    reader.open('get', 'x.json', true);
    reader.onreadystatechange = function () {
      if(reader.readyState==4) {
        // beware that code after this block is executed first
        alert(reader.responseText);
      }
    };
    reader.send(null);
    */

    $mdThemingProvider.theme('default')
        .primaryPalette(themes[root]['primary'])
        .accentPalette(themes[root]['accent'])
        .warnPalette('red')
        .backgroundPalette('grey');
});

// not used
app.service('rootService', function() {
    this.getRoot = function() {
        var root = "";
        var host = window.location.hostname;

        if (typeof host == "undefined" || host == null) {
            root = "default";
        } else if (host == 'localhost') {
            // replace only replacs the first occurence
            // see http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
            root = window.location.pathname.split("/").join("");
        } else {
            root = host.split(".")[0];
        }
        return root;
    };
});

app.service('dataService', function($http, $firebaseObject) {
    this.getFileData = function() {};
    this.getFirebaseData = function(root) {
        var ref = new Firebase("https://smartchart.firebaseio.com/apps/tab-apps/" + root);
        return $firebaseObject(ref);
    };
});

app.controller('appController', function($scope, $http, $q, rootService, dataService, $timeout, $mdSidenav, $log) {

    var self = this;

    $scope.getRoot = function() {
        var root = "";
        var host = window.location.hostname;
        if (host == 'localhost') {
            // replace only replacs the first occurence
            // see http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
            root = window.location.pathname.split("/").join("");
        } else {
            root = host.split(".")[0];
        }
        return root;
    }

    self.codeCompare = function(val1, val2) {
        if (typeof val1 == 'undefined') return false;
        if (typeof val2 == 'undefined') return false;
        return (val2.toLowerCase() == val1.toLowerCase());
    }

    $q.all([
            dataService.getFileData(), dataService.getFirebaseData(rootService.getRoot())
        ])
        .then(function(result) {
            self.appData = result[1];
            self.appData.loaded = true;
        });

    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function() {
        return $mdSidenav('right').isOpen();
    };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
        var timer;

        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function() {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
        return debounce(function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function() {
                    //$log.debug("toggle " + navID + " is done");
                });
        }, 200);
    }

    function buildToggler(navID) {
        return function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function() {
                    //$log.debug("toggle " + navID + " is done");
                });
        }
    }
})

.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').close()
            .then(function() {
                $log.debug("close LEFT is done");
            });
    };
})

.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('right').close()
            .then(function() {
                $log.debug("close RIGHT is done");
            });
    };
});
