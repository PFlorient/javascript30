let canvas = document.getElementById('viewport');
let ctx = canvas.getContext("2d");
let img = new Image();

img.onload = function () {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.drawImage(img, 0, 0, window.innerWidth, window.innerHeight);
}

img.src = 'img/japan.jpg'

function changement() {


    let blur = document.getElementById('rangeb').value;
    let grayscale = document.getElementById('rangeg').value;
    let opacity = document.getElementById('rangeo').value;
    let brightness = document.getElementById('rangebr').value;
    let saturate = document.getElementById('rangesa').value;
    let sepia = document.getElementById('ranges').value;
    if (blur == 'undifined') {
        blur = 0;
    }
    if (grayscale == 'undifined') {
        grayscale = 0;
    }
    if (opacity == 'undifined') {
        opacity = 1;
    }
    if (brightness == 'undifined') {
        brightness = 100;
    }
    if (saturate == 'undifined') {
        saturate = 100;
    }
    if (sepia == 'undifined') {
        sepia = 0;
    }

    canvas.style.filter = "blur(" + blur + "px) " +
        "grayscale(" + grayscale + "%) " +
        " opacity(" + opacity + ") " +
        " brightness(" + brightness + "%) " +
        " saturate(" + saturate + "%) " +
        " sepia(" + sepia + "%) ";
}

function clear() {
    changement;
}