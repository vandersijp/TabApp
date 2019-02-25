console.log("(C) Ask Learn Share Ltd");
console.log("version 20190225");
//
var alsParallaxElements = document.getElementsByClassName('als-parallax');
var alsPreviousScrollPosition = window.pageYOffset;
//
window.onscroll = function(ev) {
  //
  // triggers for the animations
  var alsCurrentScrollPosition = window.pageYOffset;
  // to prevent bouncing in case of negative values in Safari
  if (alsCurrentScrollPosition <= 0) {
    alsSwitchClassOn("als-navbar");
    alsSwitchClassOn("als-scrabble");
    alsSwitchClassOn("als-kicklogo");
    alsSwitchClassOff("als-fabtop");
    alsSwitchClassOff("als-fabmenu");
  } else {
    alsSwitchClassOff("als-navbar");
    alsSwitchClassOff("als-scrabble");
    alsSwitchClassOff("als-kicklogo");
    if (alsPreviousScrollPosition > alsCurrentScrollPosition) {
      alsSwitchClassOn("als-fabtop");
      alsSwitchClassOff("als-fabmenu");
    } else {
      alsSwitchClassOff("als-fabtop");
      alsSwitchClassOn("als-fabmenu");
    }
  }
  alsPreviousScrollPosition = alsCurrentScrollPosition;
  //
  // parallax and transforms
  var shift = 0;
  var zoom = 1/15;
  var blurMax = 4;
  var i;
  for (i = 0; i < alsParallaxElements.length; i++) {
    var d = {};
    d.windowHeight = window.innerHeight;
    d.elementHeight = alsParallaxElements[i].offsetHeight;
    d.elementTop = alsParallaxElements[i].getBoundingClientRect().top;
    var vision = (d.windowHeight - d.elementTop) / (d.windowHeight + d.elementHeight);
    if (vision > 0 && vision < 1) {
      var visionEntry = Math.max(0,Math.min(1,(d.windowHeight - d.elementTop)/d.elementHeight));
      // ==============
      alsParallaxElements[i].style.objectPosition = "50% " + 100*(1-vision) + "%";
      // ==============
      var transforms = [];
      //transforms.push("rotate(" + vision * 10 + "deg)");
      //transforms.push("translateY(" + (d.elementHeight * shift * (vision - 1)) + "px)");
      transforms.push("scale(" + (1.0 + zoom - vision* zoom) + ")");
      alsParallaxElements[i].style.transform = transforms.join(" ");
      // ==============
      var filters = [];
      filters.push("blur("+ blurMax*(1-visionEntry) +"px)");
      filters.push("grayscale("+ 100*(1-visionEntry) +"%)");
      alsParallaxElements[i].style.filter = filters.join(" ");
      // ==============
    }
  }
}
// move to the top of the screen
function alsScrolTo(position) {
  if (position == "top") window.scrollTo(0, 0);
}
// replace classes
function alsSwitchClassOn(name) {
  var el = document.getElementById(name);
  el.classList.remove(name + '-off');
  el.classList.add(name + '-on');
}
// replace classes
function alsSwitchClassOff(name) {
  var el = document.getElementById(name);
  el.classList.remove(name + '-on');
  el.classList.add(name + '-off');
}
