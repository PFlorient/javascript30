const fichier = document.querySelector(".fichier");
const vide = document.querySelectorAll('.vide');

fichier.addEventListener('dragstart', dragStart);
fichier.addEventListener('dragend', dragEnd);

//Définit l'action a suivre lors du drag
for (var vidage of vide) {
    vidage.addEventListener('dragover', dragOver);

    vidage.addEventListener('dragenter', dragEnter);

    vidage.addEventListener('dragleave', dragLeave);

    vidage.addEventListener('drop', dragDrop);

}


function dragStart() {
    this.className += ' garder';
    setTimeout(() =>(this.className = 'invisible'), 0);

}

function dragEnd() {
    this.className = "fichier";
}

function dragOver(e){
   e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className +=' hovered';
}

function dragLeave(e){
    this.className = 'vide';
}

function dragDrop(){
   this.className='vide';
   this.append(fichier);
}