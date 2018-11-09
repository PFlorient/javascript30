var link = document.querySelectorAll('a');
var surbrillance = document.createElement('span');
surbrillance.classList.add('surbrillance');

document.body.append(surbrillance);

function lien() {
    var coordo = this.getBoundingClientRect();
    console.log(coordo);
    surbrillance.style.width = `${coordo.width}px`;
    surbrillance.style.height = `${coordo.height}px`;
    surbrillance.style.padding = "5px 10px ";
    surbrillance.style.transform = `translate(${coordo.left-10}px, ${coordo.top-5}px)`;

}

link.forEach(a => a.addEventListener('mouseenter', lien));