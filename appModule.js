/* (C) 2016 Ask Learn Share Ltd */

//  button to close the sideNav
//  <md-button ng-click="close()" class="md-primary" hide-gt-md="">close</md-button>

console.log("App 20161005.24");

String.repeat = function(string, num) {
    return new Array(parseInt(num) + 1).join(string);
};

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
    var favicon = {};
    favicon.path = "https://rawgit.com/vandersijp/assets/master/images/" + "favicons/";
    favicon.ext = ".png";
    loc.favicon = favicon;
    return loc;
    /*
    "hostName": "localhost",
    "pathName": "/secuos/abc/",
    "fullName": "localhost/secuos/abc/",
    "depth": 2,
    "app": "abc"
    */
}

function getMessageDefaults() {
    var def = {};
    def.action = false;
    def.actionlabel = "contact";
    def.querylabel = "query";
    def.bcc = "c@asklearnshare.com";
    def.from = "noreply@asklearnshare.com";
    def.signature = "Kind regards.";
    return def;
}

function getPaths() {
    var l = {};
    l.firebase = "https://smartchart.firebaseio.com/apps/tab-apps/";
    l.gitdelegate = "https://rawgit.com/vandersijp/";
    l.gitapp = "https://rawgit.com/vandersijp/TabApp/master/";
    l.gitassets = "https://rawgit.com/vandersijp/assets/master/";
    l.contacturl = "http://www.asklearnshare.com/alsContactSend.php";
    return l;
}

window.appProperties = getAppProperties();
window.appProperties.defaults = getMessageDefaults();
window.appProperties.paths = getPaths();

var app = angular.module('app', ['ngMaterial', 'ngAnimate', 'firebase', 'ngSanitize', 'ngMessages', 'alsContact', 'alsAccess', 'alsIcon', 'alsList', 'alsFigure', 'alsTab'])

app.config(function($mdThemingProvider, $sceDelegateProvider) {

    //  see http:// stackoverflow.com/questions/20049261/sce-trustasresourceurl-globally
    $sceDelegateProvider.resourceUrlWhitelist([
        // see http://stackoverflow.com/questions/25636463/angularjs-error-in-loading-external-jsonfile-from-server
        //  Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain. Notice the difference between * and **.
        window.appProperties.paths.gitdelegate + '**'
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
    var favicon = window.appProperties.favicon.path + window.appProperties.favicon.name + window.appProperties.favicon.ext;
    var link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = favicon;
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
        var ref = new Firebase("https://smartchart.firebaseio.com/apps/tab-apps/" + app);
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
