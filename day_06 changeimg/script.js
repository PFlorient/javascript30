var canvas= document.getElementById('viewport');
var ctx = canvas.getContext("2d");
var img = new Image();
img.onload = function(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.drawImage(img,0,0,window.innerWidth,window.innerHeight);
}

img.src = 'img/japan.jpg'

