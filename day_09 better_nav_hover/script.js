var link = document.querySelectorAll('a');
var surbrillance = document.createElement('span');
surbrillance.classList.add('surbrillance');

document.body.append(surbrillance);

function lien() {
    var coordo = this.getBoundingClientRect();
    var valeur = {
        width: coordo.width,
        height : coordo.height,
        top : coordo.top + window.scrollY,
        left : coordo.left + window.scrollX
    }
    surbrillance.style.width = `${valeur.width}px`;
    surbrillance.style.height = `${valeur.height}px`;
    surbrillance.style.padding = "5px 10px ";
    surbrillance.style.transform = `translate(${valeur.left-10}px, ${valeur.top-5}px)`;

}

link.forEach(a => a.addEventListener('mouseenter', lien));