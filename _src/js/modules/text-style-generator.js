var $ = require('jquery');

export default function generateTextStyles($nodes) {

  function getRandomIntPlus(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 2;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  var spanOneSize,
  spanTwoSize,
  spanThreeSize;

  var styleOne,
  styleTwo,
  styleThree;

  spanOneSize = getRandomIntPlus(5) + 'em';
  spanTwoSize = getRandomIntPlus(5) + 'em';
  spanThreeSize = getRandomIntPlus(5) + 'em';

  function styleText() {
    var num = getRandomInt(3);
    var className;
    if(num == 2) {
      className = "wide";
    }
    else if(num == 1) {
      className = "bold";
    }
    else {
      className = "tall";
    }
    return className;
  }

  function capText() {
    var num = getRandomInt(3);
    var caps;
    if(num == 2) {
      caps = "uppercase";
    }
    else {
      caps = "none";
    }
    console.log(caps);
    return caps;
  }

  document.documentElement.style.setProperty('--span-one-size', spanOneSize);
  document.documentElement.style.setProperty('--span-two-size', spanTwoSize);
  document.documentElement.style.setProperty('--span-three-size', spanThreeSize);

  document.documentElement.style.setProperty('--span-one-caps', capText());
  document.documentElement.style.setProperty('--span-two-caps', capText());
  document.documentElement.style.setProperty('--span-three-caps', capText());

  $('.span-1').addClass(styleText());
  $('.span-2').addClass(styleText());
  $('.span-3').addClass(styleText());

};