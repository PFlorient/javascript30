var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

var posX, posY;
$on('mousemove', function (e) {
    posX = e.clientX || e.pageX;
    posY = e.clientY || e.pageY;
});

var ball = $('#ball');
var x = void 0,
    y = void 0,
    dx = void 0,
    dy = void 0,
    tx = 0,
    y = 0,
    key = -1;

var suiveur = function suiveur() {
    key = requestAnimationFrame(suiveur);
    if (!x || !y) {
        x = posX;
        y = posY;
    } else {
        dx = (posX - x) * 0.125;
        dy = (posY - y) * 0.125;
        if (Math.abs(dx) + Math.abs(dy) < 0.1) {
            x = posX;
            y = posY;
        } else {
            x += dx;
            y = dy;
        }
    }
    ball.style.left = x +"px";
    ball.style.top = y + "px";
};