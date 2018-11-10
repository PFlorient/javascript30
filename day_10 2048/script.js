var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var size = 4;
var width = canvas.width / size - 6;
var cells = [];
var fontSize;
var lost = false;
startGame();



function cell(row, coll) {
  this.value = 0;
  this.x = coll * width + 5 * (coll + 1);
  this.y = row * width + 5 * (row + 1);
}

function creercellule() {
  var i, j;
  for (i = 0; i < size; i++) {
    cells[i] = [];
    for (j = 0; j < size; j++) {
      cells[i][j] = new cell(i, j);
    }
  }
}

function drawCell(cell) {
  ctx.beginPath();
  ctx.rect(cell.x, cell.y, width, width);
  switch (cell.value) {
    case 0:
      ctx.fillStyle = '#ecf0f1';
      break;
    case 2:
      ctx.fillStyle = '#37E87C';
      break;
    case 4:
      ctx.fillStyle = '#49FFC0';
      break;
    case 8:
      ctx.fillStyle = '#37E8D9';
      break;
    case 16:
      ctx.fillStyle = '#3ADFFF';
      break;
    case 32:
      ctx.fillStyle = '#299BE8';
      break;
    case 64:
      ctx.fillStyle = '#2B75FF';
      break;
    case 128:
      ctx.fillStyle = '#1B32E8';
      break;
    case 256:
      ctx.fillStyle = '#3B1CFF';
      break;
    case 512:
      ctx.fillStyle = '#630DE8';
      break;
    case 1024:
      ctx.fillStyle = '#A80CFF';
      break;
    case 2048:
      ctx.fillStyle = '#A80CFF';
      break;
    case 4096:
      ctx.fillStyle = '#FF00BB';
      break;
    default:
      ctx.fillStyle = '#ff0080';
  }
  ctx.fill();
  if (cell.value) {
    fontSize = width / 2;
    ctx.font = fontSize + 'px Arial';
    ctx.fillStyle = '#414141';
    ctx.textAlign = 'center';
    ctx.fillText(cell.value, cell.x + width / 2, cell.y + width / 2 + width / 7);
  }
}

function canvasClean() {
  ctx.clearRect(0, 0, 500, 500);
}

document.onkeydown = function (event) {
  if (!loss) {
    if (event.keyCode === 38 || event.keyCode === 87) {
      moveUp();
    } else if (event.keyCode === 39 || event.keyCode === 68) {
      moveRight();
    } else if (event.keyCode === 40 || event.keyCode === 83) {
      moveDown();
    } else if (event.keyCode === 37 || event.keyCode === 65) {
      moveLeft();
    }

  }
}

function startGame() {
  creercellule();
  affichercellule();
  ajouterunecellule();
  ajouterunecellule();
}

function finishGame() {
  alert('Game Over')
  loss = true;
}

function affichercellule() {
  var i, j;
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      drawCell(cells[i][j]);
    }
  }
}

function ajouterunecellule() {
  var countFree = 0;
  var i, j;
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      if (!cells[i][j].value) {
        countFree++;
      }
    }
  }
  if (!countFree) {
    finishGame();
    return;
  }
  while (true) {
    var row = Math.floor(Math.random() * size);
    var coll = Math.floor(Math.random() * size);
    if (!cells[row][coll].value) {
      cells[row][coll].value = 2 * Math.ceil(Math.random() * 2);
      affichercellule();
      return;
    }
  }
}

function moveRight() {
  var i, j;
  var coll;
  for (i = 0; i < size; i++) {
    for (j = size - 2; j >= 0; j--) {
      if (cells[i][j].value) {
        coll = j;
        while (coll + 1 < size) {
          if (!cells[i][coll + 1].value) {
            cells[i][coll + 1].value = cells[i][coll].value;
            cells[i][coll].value = 0;
            coll++;
          } else if (cells[i][coll].value == cells[i][coll + 1].value) {
            cells[i][coll + 1].value *= 2;

            cells[i][coll].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  ajouterunecellule();
}

function moveLeft() {
  var i, j;
  var coll;
  for (i = 0; i < size; i++) {
    for (j = 1; j < size; j++) {
      if (cells[i][j].value) {
        coll = j;
        while (coll - 1 >= 0) {
          if (!cells[i][coll - 1].value) {
            cells[i][coll - 1].value = cells[i][coll].value;
            cells[i][coll].value = 0;
            coll--;
          } else if (cells[i][coll].value == cells[i][coll - 1].value) {
            cells[i][coll - 1].value *= 2;
            cells[i][coll].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  ajouterunecellule();
}

function moveUp() {
  var i, j, row;
  for (j = 0; j < size; j++) {
    for (i = 1; i < size; i++) {
      if (cells[i][j].value) {
        row = i;
        while (row > 0) {
          if (!cells[row - 1][j].value) {
            cells[row - 1][j].value = cells[row][j].value;
            cells[row][j].value = 0;
            row--;
          } else if (cells[row][j].value == cells[row - 1][j].value) {
            cells[row - 1][j].value *= 2;
            cells[row][j].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  ajouterunecellule();
}

function moveDown() {
  var i, j, row;
  for (j = 0; j < size; j++) {
    for (i = size - 2; i >= 0; i--) {
      if (cells[i][j].value) {
        row = i;
        while (row + 1 < size) {
          if (!cells[row + 1][j].value) {
            cells[row + 1][j].value = cells[row][j].value;
            cells[row][j].value = 0;
            row++;
          } else if (cells[row][j].value == cells[row + 1][j].value) {
            cells[row + 1][j].value *= 2;
            cells[row][j].value = 0;
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  ajouterunecellule();
}