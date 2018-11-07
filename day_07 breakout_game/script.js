var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = canvas.width / 3;
var y = canvas.height - 15;
var dx = 2;
var dy = -2;
var gauche = false;
var droite =  false;

//Le cercle
function cercle() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, false);
    ctx.fillStyle = "#22A7F0";
    ctx.fill();
    ctx.closePath();

}

//Le tapeur
function tapeur() {
    ctx.beginPath();
    ctx.rect(300, 790, 200, 10);
    ctx.fillStyle = "#22A7F0";
    ctx.fill();
    ctx.closePath();
}
/*
// Briques
for (var i = 0; i <= 3; i++) {
    for (var j = 0; j <= 6; j++) {
        var top;
        top = 50;
        ctx.beginPath();
        ctx.rect(300, top, 120, 30);
        ctx.fillStyle = "#22A7F0";
        ctx.fill();
        ctx.closePath();

    }
}
*/

//bouger ball
function moveball() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cercle()
   
    x += dx;
    y += dy;
    if (x + dx > canvas.width - 10 || x + dx < 0) {
        dx = -dx;
    }
    if (y + dy > canvas.height - 10 || y + dy < 0) {
        dy = -dy
    }
}

function movetapeur() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tapeur();
}


setInterval(moveball, 10);