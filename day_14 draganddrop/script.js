const fichier = document.querySelector(".fichier");
const vide = document.querySelectorAll('.vide');

fichier.addEventListener('dragstart', dragStart);
fichier.addEventListener('dragend', dragEnd);


function dragStart() {
    this.className += ' garder';
    setTimeout(() =>
        (this.className = 'invisible'), 0);

}

function dragEnd() {
    console.log('ok');
}