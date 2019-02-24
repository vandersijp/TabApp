/* (C) Ask Learn Share Ltd */
console.log("version 20190224");
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
  // parallax
  var shift = 0.2;
  var zoom = 0.05;
  var i;
  for (i = 0; i < alsParallaxElements.length; i++) {
    //var v = alsParallaxElementsVisibilities[i];
    var windowHeight = window.innerHeight;
    var elementHeight = alsParallaxElements[i].offsetHeight;
    var elementTop = alsParallaxElements[i].getBoundingClientRect().top;
    var virtualHeight = windowHeight + elementHeight;
    var v = (virtualHeight - elementTop - elementHeight) / windowHeight;
    if (v > 0 && v < 1) {
      var rotate = "rotate(" + v * 0 + "deg)";
      var scale = "scale(" + (1.0 + zoom - v * zoom) + ")";
      var translate = "translateY(" + (elementHeight * shift * (v - 1)) + "px)";
      alsParallaxElements[i].style.transform = [rotate, scale, translate].join(" ");
      //console.log(t + " | " + i + " | " + v);
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
