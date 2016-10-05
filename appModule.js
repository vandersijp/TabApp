/* (C) 2016 Ask Learn Share Ltd */

//  button to close the sideNav
//  <md-button ng-click="close()" class="md-primary" hide-gt-md="">close</md-button>

console.log("App 8");

String.repeat = function(string, num) {
    return new Array(parseInt(num) + 1).join(string);
};

function getAppProperties() {
    var l = {};
    l.hostName = window.location.hostname;
    l.pathName = window.location.pathname;
    switch (l.hostName) {
        case ("localhost"):
            l.fullName = l.hostName + l.pathName;
            break;
        default:
            l.fullName = "other/" + l.hostName + l.pathName;
    }
    l.depth = l.fullName.split("/").length - 2;
    l.app = l.fullName.split("/")[l.depth];
    l.app = l.app.split(".").join("-");
    var favicon = {};
    favicon.ext = ".png";
    l.favicon = favicon;
    return l;
    /*
    "hostName": "localhost",
    "pathName": "/secuos/abc/",
    "fullName": "localhost/secuos/abc/",
    "depth": 2,
    "app": "abc"
    */
}

function getMessageDefaults() {
    var d = {};
    d.action = false;
    d.actionlabel = "contact";
    d.querylabel = "query";
    d.bcc = "c@asklearnshare.com";
    d.from = "noreply@asklearnshare.com";
    d.signature = "Kind regards.";
    return d;
}

function getPaths() {
    var p = {};
    p.firebase = "https://smartchart.firebaseio.com/apps/tab-apps/";
    p.sce = "https://rawgit.com/vandersijp/";
    p.repo = "https://rawgit.com/vandersijp/TabApp/master/";
    p.assets = "https://rawgit.com/vandersijp/assets/master/";
    p.contacturl = "http://www.asklearnshare.com/alsContactSend.php";
    return p;
}

function getFolders() {
    var f = {};
    f.app = "app/";
    f.img = "images/";
    f.app = "app/";
    f.fav = "images/favicons/";
    return f;
}

function getShortCuts() {
    x = {}
    x.app = window.appProperties.paths.repo + window.appProperties.folders.app;
    x.img = window.appProperties.paths.assets + window.appProperties.folders.img;
    x.fav = window.appProperties.paths.assets + window.appProperties.folders.fav;
    return x;
}

window.appProperties = getAppProperties();
window.appProperties.defaults = getMessageDefaults();
window.appProperties.paths = getPaths();
window.appProperties.folders = getFolders();
window.x = getShortCuts();

var app = angular.module('app', ['ngMaterial', 'ngAnimate', 'firebase', 'ngSanitize', 'ngMessages', 'alsContact', 'alsAccess', 'alsIcon', 'alsList', 'alsFigure', 'alsTab'])

app.config(function($mdThemingProvider, $sceDelegateProvider) {

    //  see http:// stackoverflow.com/questions/20049261/sce-trustasresourceurl-globally
    $sceDelegateProvider.resourceUrlWhitelist([
        // see http://stackoverflow.com/questions/25636463/angularjs-error-in-loading-external-jsonfile-from-server
        //  Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain. Notice the difference between * and **.
        'https://rawgit.com/vandersijp/**',
        'http://www.asklearnshare.com/**'
    ]);

    var aliases = {
        "to": "chaos",
        "from": ["xx", "yy"]
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
            "primary": "deep-orange",
            "accent": "indigo",
            "title": "Expressions"
        },
        "neverturkey-eu": {
            "primary": "red",
            "accent": "green",
            "title": "Never Turkey"
        },
        "mexit-us": {
            "primary": "green",
            "accent": "red",
            "title": "Mexit"
        },
        "nw3-info": {
            "primary": "indigo",
            "accent": "red",
            "title": "Hampstead Mansions"
        },
        "smartsoft-mobi": {
            "primary": "amber",
            "accent": "deep-purple",
            "title": "Smartsoft"
        },
        "defectelimination-com": {
            "primary": "blue",
            "accent": "red",
            "title": "Defect Elimination"
        },
        "asklearnshare-com": {
            "primary": "teal",
            "accent": "amber",
            "title": "Ask Learn Share"
        }
    }

    if (themes[window.appProperties.app] == "undefined" || themes[window.appProperties.app] == null) {
        window.appProperties.theme = themes["default"];
        window.appProperties.favicon.name = "default";
    } else {
        window.appProperties.theme = themes[window.appProperties.app];
        window.appProperties.favicon.name = window.appProperties.app;
    }

    //  dynamically change the <title> tag
    document.title = appProperties.theme.title;
    //  dynamically insert a new <link> tag
    var fav = window.x.fav;
    fav += window.appProperties.favicon.name;
    fav += window.appProperties.favicon.ext;
    var link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = fav;
    document.getElementsByTagName('head')[0].appendChild(link);

    //alert(JSON.stringify(window.appProperties));

    $mdThemingProvider.theme('default')
        .primaryPalette(window.appProperties.theme['primary'])
        .accentPalette(window.appProperties.theme['accent'])
        .warnPalette('red')
        .backgroundPalette('grey');
});

app.service('dataService', function($http, $firebaseObject) {
    this.getFileData = function() {};
    this.getFirebaseData = function(app) {
        var ref = new Firebase(window.appProperties.paths.firebase + app);
        return $firebaseObject(ref);
    };
});

app.controller('appController', function($scope, $window, $http, $q, dataService, $timeout, $mdSidenav, $mdDialog, $log) {

    var self = this;

    // make a snap-shot for usage in the View
    self.appProps = $window.appProperties;

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
            dataService.getFileData(), dataService.getFirebaseData(window.appProperties.app)
        ])
        .then(function(result) {
            self.appData = result[1];
            // alert (JSON.stringify(result[2]));
            // async not working
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
            templateUrl: window.x.app + 'alert/alsAlertTerms.html',
            targetEvent: ev,
            parent: angular.element(document.querySelector('#alertContainer')),
            clickOutsideToClose: true
        })
    };

    self.alertHelp = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: window.x.app + 'alert/alsAlertHelp.html',
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
