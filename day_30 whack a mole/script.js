const trous = document.querySelectorAll('.hole');
const scoreBoard = document.querySelectorAll('.score');
const taupes = document.querySelectorAll('.mole');
let score = 0;

let derniertrou;
let timeUp = false;

function randTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomtrou(trous) {
    const idx = Math.floor(Math.random() * trous.length);
    const trou = trous[idx];
    if (trou === derniertrou) {
        console.log('cest le meme trou')
     return  randomtrou(trous);
    }
    derniertrou = trou;
    return trou;
}

function peep() {
    const time = randTime(200, 1000);
    const trou = randomtrou(trous);
    trou.classList.add('up');
    setTimeout(() => {
        trou.classList.remove('up')
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000);
}

taupes.forEach(taupe => taupe.addEventListener('click', bonk));

function bonk(e) {
    if(!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
    console.log(score);
  }