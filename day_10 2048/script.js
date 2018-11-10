var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var nombrecase = 4;
var width = canvas.width / nombrecase - 5;

var cellule = [];
var perdu = false;
//créer une cellule
function cells(row, coll) {
    this.value = 0;
    this.x = coll * width + 5(coll + 1);
    this.y = row * width + 5 * (row + 1);
}
//definit permet de creer une celulle dans le carré
function creercellule() {
    for (var i = 0; i < size; i++) {
        cellule[i] = [];
        for (var j = 0; j < size; j++) {
            cellule[i][j] = new cells(i, j);
        }
    }
}
//permet d'afficher une cellule
function voircellule(cells) {
    ctx.beginPath();
    ctx.rect(cells.x, cells.y, width, width);
    switch (cells.value) {
        case 0:
            ctx.fillStyle = "#FFFF00";
            break;
        case 2:
            ctx.fillStyle = "#FFFF00";
            break;
        case 4:
            ctx.fillStyle = "#FFFF00";
            break;
        case 8:
            ctx.fillStyle = "#FFFF00";
            break;
        case 16:
            ctx.fillStyle = "#FFFF00";
            break;
        case 32:
            ctx.fillStyle = "#FFFF00";
            break;
        case 64:
            ctx.fillStyle = "#FFFF00";
            break;
        case 128:
            ctx.fillStyle = "#FFFF00";
            break;
        case 256:
            ctx.fillStyle = "#FFFF00";
            break;
        case 512:
            ctx.fillStyle = "#FFFF00";
            break;
        case 1024:
            ctx.fillStyle = "#FFFF00";
            break;
        case 2048:
            ctx.fillStyle = "#FFFF00";
            break;
    }
}