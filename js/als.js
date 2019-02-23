/* (C) Ask Learn Share Ltd */
// version 20190223
//
var alsParallaxElements = document.getElementsByClassName('als-parallax');
var alsParallaxElementsVisibilities = [];
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
  var i;
  for (i = 0; i < alsParallaxElements.length; i++) {
    alsParallaxElementsVisibilities[i] = (window.innerHeight - alsParallaxElements[i].getBoundingClientRect().top) / window.innerHeight;
    if (alsParallaxElementsVisibilities[i] > 0 && alsParallaxElementsVisibilities[i] < 1) {
      alsParallaxElements[i].style.transform = "rotate(" + alsParallaxElementsVisibilities[i] * 3 + "deg)" + " " + "scale(" + (1.5 + (1 - alsParallaxElementsVisibilities[i]) / 20) + ")";
      console.log(i + " | " + alsParallaxElementsVisibilities[i]);
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
