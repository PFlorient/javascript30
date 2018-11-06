let canvas = document.getElementById('viewport');
let ctx = canvas.getContext("2d");
let img = new Image();

img.onload = function () {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.drawImage(img, 0, 0, window.innerWidth, window.innerHeight);
}

function changement() {

    let blur = document.getElementById('rangeb').value;
    let grayscale = document.getElementById('rangeg').value;
    let opacity = document.getElementById('rangeg').value;
    let brightness = document.getElementById('rangeg').value;
    let saturate = document.getElementById('rangeg').value;
    let sepia = document.getElementById('rangeg').value;
    //let grayscale = document.getElementById('rangeg').value;
    if (blur == 'undifined') {
        blur = 0;
    }
    if (grayscale == 'undifined') {
        grayscale = 0;
    }
    canvas.style.filter = "grayscale(" + grayscale + "%) " + " blur(" + blur + "px) ";
}



img.src = 'img/japan.jpg'