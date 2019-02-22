/* (C) Ask Learn Share Ltd */
// version 20190222
//
// triggers for the animations
var alsPreviousScrollPosition = window.pageYOffset;
window.onscroll = function(ev) {
  // work in progress to create a parallax effect on the banners
  //console.log(window.pageYOffset + '|' + window.innerHeight);
  //var x = document.getElementsByClassName("parallax");
  //x.style.transform = "rotateX(45deg)";
  //if (window.scrollHeight - window.scrollTop === window.clientHeight) {};
  var alsCurrentScrollPosition = window.pageYOffset;
  // to cover negative values in Safari
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
