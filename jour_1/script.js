//simplification d'écriture "a la jquery"
var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

var posX, posY;
$on('mousemove', function (e) {
    posX = e.clientX || e.pageX;
    posY = e.clientY || e.pageY;
});


var ball = $('#ball');
//definition des variable de position+variable tampon
var x = void 0,
    y = void 0,
    dx = void 0,
    dy = void 0,
    key = -1;
console.log(x);
var suiveur = function suiveur() {
    key = requestAnimationFrame(suiveur);
    
    if (!x || !y) {
        //donne les position du curseur
        x = posX;
        y = posY;
        
    } else {
        //definition de la vitesse 
        dx = (posX - x) * 0.08//+ en + rapide ;
        dy = (posY - y) * 0.08;
        if (Math.abs(dx) + Math.abs(dy) < 0.1) {
            x = posX;
            y = posY;
        } else {
            //met à jours la position
            x += dx;
            y += dy;
        }
    }

     //Change le css de ball pour suivre le curseur
    ball.style.left = x +"px";
    ball.style.top = y + "px";

};
//aggrandit le cercle au click
$on('click', function(e){
    ball.style.width = "100px";
    ball.style.height = "100px";
    setTimeout(function(){
        ball.style.width = "50px";
        ball.style.height = "50px"; },1100);
})