const trous = document.querySelectorAll('.hole');
const scoreBoard = document.querySelectorAll('.score');
const taupes = document.querySelectorAll('.hole');

let derniertrou;

function randTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomtrou(trous) {
    const idx = Math.floor(Math.random() * trous.length);
    const trou = trous[idx];

    if (trou === derniertrou) {
        console.log('cest le meme trou')
        randomtrou(trous);
    }
    derniertrou = trou;
    return trou;
}

function peep(){
    const time = randTime(200,1000);
    const trou = randomtrou(trous);
    trou.classList.add('up')
}