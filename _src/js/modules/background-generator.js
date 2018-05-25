export default function generateBG($nodes) {

// TODO

// grab array of color values
// either through classes or css var-ready hex values,
// probably the latter

// get those set in the right CSS variables
// to set the background gradient

// pick direction of the background gradient from a set

var colorArray = ['#F06292', '#e53935', '#6A1B9A', '#3F51B5', '#64B5F6', '#81D4FA', '#00BCD4', '#00796B', '#4CAF50', '#9CCC65', '#DCE775', '#FFEE58', '#FFB300', '#FFB74D', '#FFAB91',];
var directionArray = ['to left', 'to right', 'to top', 'to bottom', 'spinwheel'];


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// colorArray will eventually be fed-in json
function generateBackground() {

  // Colors
  var firstColor,
  firstColorNum,
  secondColor,
  secondColorNum;
  // Direction-related
  var directionVal;
  // Ease-related
  var easeVal,
  ease;


  firstColorNum = getRandomInt(colorArray.length);
  secondColorNum = getRandomInt(colorArray.length);

  if(secondColorNum == firstColorNum) {
    secondColorNum = getRandomInt(colorArray.length);
  }

  firstColor = colorArray[firstColorNum];
  secondColor = colorArray[secondColorNum];

  directionVal = directionArray[getRandomInt(directionArray.length)];

  if(directionVal == 'spinwheel') {
    directionVal = getRandomInt(360) + 'deg';
  }

  easeVal = getRandomInt(100);

  if((easeVal >= 90) || (easeVal <= 10)) {
    easeVal = getRandomInt(100);
  }

  ease = easeVal + '%';

  document.documentElement.style.setProperty('--first-bg-color', firstColor);
  document.documentElement.style.setProperty('--second-bg-color', secondColor);
  document.documentElement.style.setProperty('--gradient-direction', directionVal);
  document.documentElement.style.setProperty('--ease-variable', ease);
}


window.onload = generateBackground();
}