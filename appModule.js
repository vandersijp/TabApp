/* (C) 2016 Ask Learn Share Ltd */

//  button to close the sideNav
//  <md-button ng-click="close()" class="md-primary" hide-gt-md="">close</md-button>

function getAppProperties() {
    var loc = {};
    loc.hostName = window.location.hostname;
    loc.pathName = window.location.pathname;
    switch (loc.hostName) {
        case ("localhost"):
            loc.fullName = loc.hostName + loc.pathName;
            break;
        default:
            loc.fullName = "other/" + loc.hostName + loc.pathName;
    }
    loc.depth = loc.fullName.split("/").length - 2;
    loc.app = loc.fullName.split("/")[loc.depth];
    loc.app = loc.app.split(".").join("-");
    return loc;
    /*
    "hostName": "localhost",
    "pathName": "/secuos/abc/",
    "fullName": "localhost/secuos/abc/",
    "depth": 2,
    "app": "abc"
    */
}
window.appProperties = getAppProperties();
//alert(JSON.stringify(window.appProperties));


var app = angular.module('app', ['ngMaterial', 'ngAnimate', 'firebase', 'ngSanitize', 'ngMessages', 'alsContact', 'alsAccess', 'alsIcon', 'alsList', 'alsFigure', 'alsTab'])

app.config(function($mdThemingProvider, $sceDelegateProvider) {

    //  see http:// stackoverflow.com/questions/20049261/sce-trustasresourceurl-globally
    $sceDelegateProvider.resourceUrlWhitelist([
        //  Allow same origin resource loads.
        'self',
        //  Allow loading from our assets domain. Notice the difference between * and **.
        'https://rawgit.com/vandersijp/**'
    ]);

    var root = window.appProperties.app;

    var aliases = {
      "to" : "chaos",
      "from" : ["xx", "yy"]
    };

    var themes = {
        "default": {
            "primary": "teal",
            "accent": "amber",
            "title": "Ask Learn Share"
        },
        "app": {
            "primary": "purple",
            "accent": "blue",
            "title": "Test application"
        },
        "secuos": {
            "primary": "orange",
            "accent": "green",
            "title": "Expressions"
        },
        "neverturkey": {
            "primary": "red",
            "accent": "green",
            "title": "Never Turkey"
        },
        "mexit": {
            "primary": "green",
            "accent": "red",
            "title": "Mexit"
        },
        "nw3": {
            "primary": "indigo",
            "accent": "red",
            "title": "Hampstead Mansions"
        },
        "smartsoft": {
            "primary": "amber",
            "accent": "deep-purple",
            "title": "Smartsoft"
        },
        "defectelimination": {
            "primary": "blue",
            "accent": "red",
            "title": "Defect Elimination"
        },
        "asklearnshare": {
            "primary": "teal",
            "accent": "amber",
            "title": "Ask Learn Share"
        }
    }

    var root_favicon = root;
    if (themes[root] == "undefined" || themes[root] == null) {
        themes[root] = themes["default"];
        root_favicon = "als";
    }

    window.appProperties.favicon = root_favicon;

    //  dynamically change the <title> tag
    document.title = themes[root]["title"];
    //  dynamically insert a new <link> tag
    var path = "https://rawgit.com/vandersijp/assets/master/images/" + "favicons/";
    var link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = path + root_favicon + ".png";
    document.getElementsByTagName('head')[0].appendChild(link);

    alert("58");
    alert(JSON.stringify(window.appProperties));

    $mdThemingProvider.theme('default')
        .primaryPalette(themes[root]['primary'])
        .accentPalette(themes[root]['accent'])
        .warnPalette('red')
        .backgroundPalette('grey');
});

//  not used
app.service('rootService', function() {
    this.getRoot = function() {
        //  =========< should be in a global function >=========
        var root = "";
        var host = window.location.hostname;
        if (typeof host == "undefined" || host == null) {
            root = "default";
        } else if (host == 'localhost') {
            //  replace only replaces the first occurence
            root = window.location.pathname.split("/").join("");
        } else {
            root = host.split(".")[0];
        }
        //  =========< should be in a global function >=========
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


app.controller('appController', function($scope, $http, $q, rootService, dataService, $timeout, $mdSidenav, $mdDialog, $log) {

    var self = this;

    $scope.getRoot = function() {
        //  =========< should be in a global function >=========
        var root = "";
        var host = window.location.hostname;
        if (typeof host == "undefined" || host == null) {
            root = "default";
        } else if (host == 'localhost') {
            //  replace only replaces the first occurence
            root = window.location.pathname.split("/").join("");
        } else {
            root = host.split(".")[0];
        }
        //  =========< should be in a global function >=========
        return root;
    }

    // ===========< to be moved to a Service ===========
    $scope.addElement = function(array) {
        var e = {
            "name": "",
            "expression": "",
            "ok": true,
            "test": "test"
        };
        array.unshift(e);
        return array;
    };

    $scope.moveElement = function(array1, array2, index) {
        var e = array1[index];
        array1.splice(index, 1);
        array2.unshift(e);
    };

    $scope.deleteElement = function(array, index) {
        array.splice(index, 1);
    };
    // ============================================

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
            // alert (JSON.stringify(result[2]));
            // async not working
            // var favicon = self.appData.system.paths.img + "/" + rootService.getRoot() + ".png";
        });

    self.fontLarge = false;

    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function() {
        return $mdSidenav('right').isOpen();
    };

    self.alertTerms = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'https://rawgit.com/vandersijp/TabApp/master/app/alert/alsAlertTerms.html',
            targetEvent: ev,
            parent: angular.element(document.querySelector('#alertContainer')),
            clickOutsideToClose: true
        })
    };

    self.alertHelp = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'https://rawgit.com/vandersijp/TabApp/master/app/alert/alsAlertHelp.html',
            targetEvent: ev,
            parent: angular.element(document.querySelector('#alertContainer')),
            clickOutsideToClose: true
        })
    };

    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }
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
            //  Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function() {
                    // $log.debug("toggle " + navID + " is done");
                });
        }, 200);
    }

    function buildToggler(navID) {
        return function() {
            //  Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function() {
                    // $log.debug("toggle " + navID + " is done");
                });
        }
    }
})

.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
        //  Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').close()
            .then(function() {
                $log.debug("close LEFT is done");
            });
    };
})

.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
        //  Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('right').close()
            .then(function() {
                $log.debug("close RIGHT is done");
            });
    };
});
