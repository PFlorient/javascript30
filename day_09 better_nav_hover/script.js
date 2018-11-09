var link = document.querySelectorAll('a');
var surbrillance = document.createElement('span');
surbrillance.classList.add('surbrillance');

document.body.append(surbrillance);

function lien() {
    var coordo = this.getBoundingClientRect();
    console.log(coordo);
    surbrillance.style.width = `${coordo.width}px`;
    surbrillance.style.height = `${coordo.height}px`;
    
}

link.forEach(a => a.addEventListener('mouseenter', lien));