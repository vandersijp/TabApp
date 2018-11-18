/* (C) 2016 Ask Learn Share Ltd */

//  button to close the sideNav
//  <md-button ng-click="close()" class="md-primary" hide-gt-md="">close</md-button>

console.log("App 63");

String.repeat = function(string, num) {
  return new Array(parseInt(num) + 1).join(string);
};

function getAppProperties() {
  var l = {};
  l.hostName = window.location.hostname.split("www.").slice(-1)[0];
  l.pathName = window.location.pathname;
  switch (l.hostName) {
    case ("localhost"):
      l.fullName = l.hostName + l.pathName;
      break;
    default:
      l.fullName = "someserver/" + l.hostName + l.pathName;
  }
  l.app = l.fullName.split("/").slice(1)[0];
  // someserver/rawgit.com/vandersijp/TabApp/master/indexhttps.html
  // someserver/mexit.us/
  l.app = l.app.split(".").join("-");
  //console.log("fullName:" + l.fullName);
  //console.log("hostName:" + l.hostName);
  //console.log("app:" + l.app);
  l.faviconExt = ".png";
  return l;
}

function getAlerts() {
  var m = [{
    "hide": false,
    "disabled": true,
    "icon": "person",
    "name": "login",
    "label": "Log in"
  }, {
    "icon": "help",
    "name": "Help",
    "label": "Help"
  }, {
    "icon": "security",
    "name": "Terms",
    "label": "Terms"
  }];
  return m;
}

function getPaths() {
  var p = {};
  p.sce = "https://rawgit.com/vandersijp/";
  //p.repo = "git/";
  p.repo = "https://rawgit.com/vandersijp/TabApp/master/";
  p.assets = "https://rawgit.com/vandersijp/assets/master/";
  p.firebase = "https://smartchart.firebaseio.com/apps/tab-apps/";
  p.contacturl = "http://www.asklearnshare.com/alsContactSend.php";
  return p;
}

function getFolders() {
  var f = {};
  f.app = "app/";
  f.img = "images/";
  f.log = "images/logos/";
  f.vid = "images/videos/";
  f.ava = "images/avatars/";
  f.fav = "images/favicons/";
  f.thu = "images/thumbnails/";
  f.bac = "images/backgrounds/";
  return f;
}

function getYouTube() {
  var yt = {};
  yt.video = {};
  yt.icon = {};
  yt.video.prefix = "https://www.youtube.com/watch?v=";
  yt.icon.prefix = "https://i.ytimg.com/vi/";
  yt.icon.suffix = "/mqdefault.jpg";
  return yt;
}

function getShortCuts() {
  x = {}
  x.app = window.appProperties.paths.repo + window.appProperties.folders.app;
  x.img = window.appProperties.paths.assets + window.appProperties.folders.img;
  x.log = window.appProperties.paths.assets + window.appProperties.folders.log;
  x.vid = window.appProperties.paths.assets + window.appProperties.folders.vid;
  x.ava = window.appProperties.paths.assets + window.appProperties.folders.ava;
  x.fav = window.appProperties.paths.assets + window.appProperties.folders.fav;
  x.thu = window.appProperties.paths.assets + window.appProperties.folders.thu;
  x.bac = window.appProperties.paths.assets + window.appProperties.folders.bac;
  x.send = window.appProperties.paths.contacturl;
  return x;
}

window.appProperties = getAppProperties();
window.appProperties.paths = getPaths();
window.appProperties.folders = getFolders();
window.appProperties.alerts = getAlerts();
window.x = getShortCuts();
window.x.yt = getYouTube();

window.lsCodeCompare = function(val1, val2) {
  if (typeof val1 == 'undefined') return false;
  if (typeof val2 == 'undefined') return false;
  return (val2.toLowerCase() == val1.toLowerCase());
}

var app = angular.module('app', ['ngMaterial', 'ngAnimate', 'firebase', 'ngSanitize', 'ngMessages', 'alsContact', 'alsAccess', 'alsIcon', 'alsList', 'alsFigure', 'alsTemplate', 'alsTab'])

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


  var profile = {
    "default": {
      "bcc": "c@asklearnshare.com",
      "from": "noreply@asklearnshare.com",
      "action": false,
      "signature": "Kind regards.",
      "querylabel": "query",
      "actionlabel": "contact"
    },
    "eurokiss": {
      "from": "noreply@eurokiss.eu"
    },
    "snapelection": {
      "from": "noreply@snapelection.eu"
    },
    "defectelimination-com": {
      "from": "noreply@defectelimination.com"
    },
    "hydrogenie": {
      "from": "noreply@hydrogenie.com"
    },
    "fbi-mobi": {
      "from": "lostemail@fbi.mobi"
    },
    "nils-info": {
      "bcc": "nhavekotte@gmail.com",
      "from": "noreply@nils.info"
    },
    "joelle-info": {
      "bcc": "joellehavekotte@gmail.com",
      "from": "noreply@joelle.info"
    },
    "robyn-mobi": {
      "bcc": "robynhavekotte@gmail.com",
      "from": "noreply@robyn.mobi"
    },
    "pater-info": {
      "bcc": "jxpater@gmail.com",
      "from": "noreply@pater.info"
    },
    "rawgit-com": {
      "bcc": "c@asklearnshare.com",
      "from": "test@testco.com"
    },
    "mafia-eu": {
      "from": "noreply@mafia.eu"
    },
    "whitehouse-tel": {
      "from": "press@mwhitehouse.tel"
    },
    "secuos": {
      "bcc": "hans@secuos.com"
    },
    "vandersijp-net": {
      "bcc": "chaco@vandersijp.com",
      "from": "noreply@vandersijp.net"
    },
    "neverturkey-eu": {
      "from": "noreply@neverturkey.eu"
    }
  };

  var themesNameFallbacks = ["title", "favicon"];

  var themes = {
    "default": {
      "primary": "teal",
      "accent": "blue",
      "warn": "red",
      "background": "grey",
      "title": "Ask Learn Share",
      "favicon": "als"
    },
    "h2-eu": {},
    "asklearnshare-com": {},
    "snapelection-eu": {
      "primary": "amber",
      "accent": "blue"
    },
    "hydrogenie-com": {
      "primary": "hydrogenie-primary",
      "accent": "hydrogenie-accent"
    },
    "mafia-eu": {
      "primary": "red",
      "accent": "blue"
    },
    "whitehouse-tel": {
      "primary": "indigo",
      "accent": "blue"
    },
    "eurokiss-eu": {
      "primary": "indigo",
      "accent": "light-blue"
    },
    "neverturkey-eu": {
      "primary": "red",
      "accent": "deep-purple"
    },
    "fbi-mobi": {
      "primary": "indigo",
      "accent": "light-blue"
    },
    "manya-info": {
      "primary": "wine-red",
      "accent": "amber"
    },
    "pater-info": {
      "primary": "wine-red",
      "accent": "amber"
    },
    "vandersijp-net": {
      "primary": "red",
      "accent": "indigo"
    },
    "rawgit-com": {
      "primary": "purple",
      "accent": "blue"
    },
    "secuos": {
      "primary": "deep-orange",
      "accent": "indigo"
    },
    "neverturkey-eu": {
      "primary": "red",
      "accent": "blue-grey"
    },
    "nils-info": {
      "primary": "green",
      "accent": "red"
    },
    "mexit-us": {
      "primary": "green",
      "accent": "red"
    },
    "nw3-info": {
      "primary": "indigo",
      "accent": "red"
    },
    "smartsoft-mobi": {
      "primary": "amber",
      "accent": "deep-purple"
    },
    "defectelimination-com": {
      "primary": "green",
      "accent": "deep-orange"
    },
    "sulaiman-mobi": {
      "primary": "deep-orange"
    }
  };

  // start with any existing object
  window.appProperties.defaults = (profile[window.appProperties.app] || profile["default"]);
  angular.forEach(profile["default"], function(value, key) {
    // then set any missing attributes to a default
    window.appProperties.defaults[key] = (window.appProperties.defaults[key] || value);
  });

  // start with any existing object
  window.appProperties.theme = (themes[window.appProperties.app] || themes["default"]);
  angular.forEach(themes["default"], function(value, key) {
    angular.forEach(themesNameFallbacks, function(value, key) {
      // set any missing favicon and title to the app name
      window.appProperties.theme[value] = (window.appProperties.theme[value] || window.appProperties.app);
    });
    // them set any still missing attributes to a default
    window.appProperties.theme[key] = (window.appProperties.theme[key] || value);
  });

  //  dynamically change the <title> tag
  document.title = appProperties.theme.title;
  //  dynamically insert a new <link> tag
  var link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = window.x.fav + window.appProperties.theme.favicon + window.appProperties.faviconExt;
  document.getElementsByTagName('head')[0].appendChild(link);

  //alert(JSON.stringify(window.appProperties));

  // created with https://angular-md-color.com
  var wineRed = {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50', 'A100', 'A200', 'A400'],
    'contrastLightColors': undefined,
    '50': '#ff6099',
    '100': '#ff4789',
    '200': '#ff2d78',
    '300': '#ff1468',
    '400': '#f90059',
    '500': '#e00050',
    '600': '#c60047',
    '700': '#ad003e',
    '800': '#930035',
    '900': '#7a002c',
    'A100': '#ff7aa9',
    'A200': '#ff93ba',
    'A400': '#ffadca',
    'A700': '#600022'
  };
  $mdThemingProvider.definePalette('wine-red', wineRed);
  $mdThemingProvider.theme('wine-red').backgroundPalette('wine-red').dark();
  // <md-card md-theme-watch md-theme="'wine-red'">

  var hydrogeniePrimary = {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50', 'A100', 'A200', 'A400'],
    'contrastLightColors': undefined,
    '50': '#a1a1ff',
    '100': '#8888ff',
    '200': '#6e6eff',
    '300': '#5555ff',
    '400': '#3b3bff',
    '500': '#22f',
    '600': '#0808ff',
    '700': '#0000ee',
    '800': '#0000d4',
    '900': '#0000bb',
    'A100': '#bbbbff',
    'A200': '#d4d4ff',
    'A400': '#eeeeff',
    'A700': '#0000a1'
  };
  $mdThemingProvider.definePalette('hydrogenie-primary', hydrogeniePrimary);
  $mdThemingProvider.theme('hydrogenie-primary').backgroundPalette('hydrogenie-primary').dark();

  var hydrogenieAccent = {
    '50': '#3eaa00',
    '100': '#47c300',
    '200': '#50dd00',
    '300': '#5af600',
    '400': '#68ff11',
    '500': '#78ff2a',
    '600': '#98ff5d',
    '700': '#a8ff77',
    '800': '#b9ff90',
    '900': '#c9ffaa',
    'A100': '#98ff5d',
    'A200': '#8f4',
    'A400': '#78ff2a',
    'A700': '#d9ffc3'
  };
  $mdThemingProvider.definePalette('hydrogenie-accent', hydrogenieAccent);
  $mdThemingProvider.theme('hydrogenie-accent').backgroundPalette('hydrogenie-accent').dark();


  $mdThemingProvider.theme('default')
    .primaryPalette(window.appProperties.theme['primary'] || 'indigo')
    .accentPalette(window.appProperties.theme['accent'] || 'red')
    .warnPalette(window.appProperties.theme['warn'] || 'red')
    .backgroundPalette(window.appProperties.theme['background'] || 'grey');
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
    self.shortCuts = $window.x;
    self.selectedIndex = 0;

    // ===========< to be moved to a Service ===========

    $scope.alsDate = Date;

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

    self.charToRIShtml = function(char) {
      var base = 127462;
      var ascii = char.charAt(0).toUpperCase().charCodeAt(0);
      var out = "&#" + (base + ascii) + ";";
      return out;
    };

    self.isoToRIShtml = function(iso) {
      var out1 = self.charToRIShtml(iso.charAt(0));
      var out2 = self.charToRIShtml(iso.charAt(1));
      return out1 + out2;
    }

    //alert(self.isoToRIShtml('nl'));

    self.codeCompare = function(val1, val2) {
      if (typeof val1 == 'undefined') return false;
      if (typeof val2 == 'undefined') return false;
      return (val2.toLowerCase() == val1.toLowerCase());
    }

    self.menuSub = function(tabs, index) {
      var menuSub = {};
      var tab = tabs[index];
      if (tab.icon) {
        menuSub.isSub = false;
        menuSub.prefix = "";
      } else {
        menuSub.isSub = true;
        menuSub.prefix = "&nbsp;&nbsp;&nbsp;" + index + ".&nbsp;";
      }
      return (menuSub);
    }

    self.changeTypography = function(o, type1, type2) {
      //var o = obj;
      angular.forEach(o, function(value, key) {
        if (value[type1] && !value[type2]) {
          o[key][type2] = value[type1];
          delete o[key][type1];
        }
      });
      return (o);
    }

    self.tabsToCards = function(tabs, type1, type2) {
      var cc = {};
      var cards = [];
      angular.forEach(tabs, function(value, key) {
        if (!value.icon) {
          var card = {};
          card = value;
          //card.title += (" - "+value.id);
          //card.title = "ss";

          card.image = window.appProperties.app + " " + value.id + ".png";
          //card.index = key;
          //card.subhead = card.summary;
          cards.push(card);

        }
      });
      cards = self.changeTypography(cards, type1, type2);
      cc.cards = cards;
      cc.expand = true;
      cc.toclink = true;
      //console.log(JSON.stringify(cc));
      return (cc);
    }


    $q.all([
        dataService.getFileData(), dataService.getFirebaseData(window.appProperties.app)
      ])
      .then(function(result) {
        self.appData = result[1];
        //console.log(JSON.stringify(result[1]));
        // async not working
      }).then(function() {
        //console.log(JSON.stringify(self.appData));
      });

    //self.appData.tabCards = self.tabsToCards(self.appData.tabs);

    self.fontLarge = false;

    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function() {
      return $mdSidenav('right').isOpen();
    };

    self.classInTest = function() {
      return "test";
    };

    $scope.ggg = {
      "lead": "lead sentance"
    };

    self.alertAny = function(ev, alertName) {
      $mdDialog.show({
        controller: DialogController,
        scope: $scope,
        templateUrl: window.x.app + 'alert/alsAlert' + alertName + '.html',
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

app.directive('img', function() {
  // see http://stackoverflow.com/questions/16310298/if-a-ngsrc-path-resolves-to-a-404-is-there-a-way-to-fallback-to-a-default
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      // show an image-missing image
      element.error(function() {
        // from https://stackoverflow.com/questions/16310298/if-a-ngsrc-path-resolves-to-a-404-is-there-a-way-to-fallback-to-a-default/24963384
        var elementClass = element.prop('class');
        var elementUrl;
        if (elementClass.slice(-6) == "avatar") {
          elementUrl = "https://rbt.net.au/wp-content/uploads/2017/12/dummy-image.png";
        } else {
          elementUrl = "https://media.licdn.com/dms/image/C510BAQF8U_ih5BvkPQ/company-logo_200_200/0?e=2159024400&v=beta&t=QVMAUi0Luks4iZiP5RrfjJOZW_mjNvOmIrMbIsMIjsU";
        }

        element.prop('src', elementUrl);
        //                element.remove();
      });
    }
  }
});
