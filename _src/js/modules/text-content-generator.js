var $ = require('jquery');

export default function generateText($nodes) {

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  var imgArray = ['agave', 'phoenix', 'diamond', 'fire', 'moustache', 'rice', 'sun', 'bicycle'];

  var randomNumOne,
  randomNumTwo,
  randomNumThree,
  lineThreeText;


  function grabLines() {
    var url = [window.location.protocol, '', window.location.host, 'lines.json'].join('/');
    $.ajax({
      url: url,
      dataType: 'json',
      error: function(error) {
        console.log('yeah no');
        console.log(error);
      },
      success: function(result) {
        var lineOneArray = result.lineOne,
        lineTwoArray = result.lineTwo,
        lineThreeArray = result.lineThree;

        randomNumOne = getRandomInt(lineOneArray.length);
        randomNumTwo = getRandomInt(lineTwoArray.length);
        randomNumThree = getRandomInt(lineThreeArray.length);

        lineThreeText = lineThreeArray[randomNumThree];
        if(lineThreeText == "[img]") {
          var span3 = document.getElementsByClassName('span-3')[0];

          var imgName = imgArray[getRandomInt(imgArray.length)];
          span3.innerHTML = `<img src='/assets/svg/${imgName}.svg' />`;
        }
        else {
          $('.span-3').text(lineThreeText);
        }

        $('.span-1').text(lineOneArray[randomNumOne]);
        $('.span-2').text(lineTwoArray[randomNumTwo]);

      }
    });
  }

  $(document).ready(function(){
    grabLines();
  });
}