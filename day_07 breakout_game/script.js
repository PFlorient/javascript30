var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var posx = 300;
var gauche = false;
var droite = false;

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
    ctx.rect(posx, 790, 200, 10);
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
/*---------------Déplacement-------------*/
//bouger ball
function moveball() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cercle();
    tapeur();
    x += dx;
    y += dy;
    if (x + dx > canvas.width - 10 || x + dx < 0) {
        dx = -dx;
    }
    if (y + dy < 10) {
        dy = -dy
    } else if (y + dy > canvas.height - 10) {
        if (x > posx && x < posx + 200) {
            dy = -dy;
        } else {
            alert('game over');
            document.location.reload()
        }
    }
    if (gauche && posx > 0) {
        posx -= 7
    }

    if (droite && posx < canvas.width - 200) {
        posx += 7
    }
}

function movetapeur() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tapeur();
}

function appuye(e) {
    if (e.keyCode == 37) {
        gauche = true;
    }
    if (e.keyCode == 39) {
        droite = true;
    }
}

function desapuye(e) {
    if (e.keyCode == 37) {
        gauche = false;
    }
    if (e.keyCode == 39) {
        droite = false;
    }
}


document.addEventListener('keydown', appuye);
document.addEventListener('keyup', desapuye);

setInterval(moveball, 10);