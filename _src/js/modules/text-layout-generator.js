export default function generateLayoutStyle($nodes) {

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  var layoutArrays = ['1fr 2fr','2fr 1fr', '1fr 1fr 1fr'],
  layoutGridColumn,
  layoutGridRow;

  layoutGridColumn = layoutArrays[getRandomInt(layoutArrays.length)];
  layoutGridRow = layoutArrays[getRandomInt(layoutArrays.length)];

  console.log(layoutGridColumn + ', ' + layoutGridRow);

  document.documentElement.style.setProperty('--grid-column-layout', layoutGridColumn);
  document.documentElement.style.setProperty('--grid-row-layout', layoutGridRow);

};