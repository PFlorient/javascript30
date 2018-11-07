var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height - 20;
var dx = 2;
var dy = -2;
var posx = 300;
var gauche = false;
var droite = false;
var briqueRowCount = 3;
var briqueColumnCount = 5;
var briqueWidth = 140;
var briqueHeight = 50;
var briquePadding = 10;
var briqueOffsetTop = 30;
var briqueOffsetLeft = 30;
var 
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

// Briques
var briques = [];
for (var c = 0; c < briqueColumnCount; c++) {
    briques[c] = [];
    for (var r = 0; r < briqueRowCount; r++) {
        briques[c][r] = {
            x: 0,
            y: 0,
            status: 1
        };
    }
}

function lesbriques() {
    for (var c = 0; c < briqueColumnCount; c++) {
        for (var r = 0; r < briqueRowCount; r++) {
            if (briques[c][r].status == 1) {
                var briqueX = (c * (briqueWidth + briquePadding)) + briqueOffsetLeft;
                var briqueY = (r * (briqueHeight + briquePadding)) + briqueOffsetTop;
                briques[c][r].x = briqueX;
                briques[c][r].y = briqueY;
                ctx.beginPath();
                ctx.rect(briqueX, briqueY, briqueWidth, briqueHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}


/*---------------Déplacement-------------*/
//bouger ball
function moveball() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cercle();
    tapeur();
    /*creation briques*/
    lesbriques();
    ///////////////////
    collision()
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
/*-------------Colision--------------*/
function collision() {
    for (var c = 0; c < briqueColumnCount; c++) {
        for (var r = 0; r < briqueRowCount; r++) {
            var b = briques[c][r];
            if (b.status == 1) {
                if (x > b.x && x < b.x + briqueWidth && y > b.y && y < b.y + briqueHeight) {
                    dy = -dy;
                    b.status = 0;
                }
            }
        }
    }
}


document.addEventListener('keydown', appuye);
document.addEventListener('keyup', desapuye);

setInterval(moveball, 10);