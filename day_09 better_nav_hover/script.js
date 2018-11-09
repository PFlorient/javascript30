var link = document.querySelectorAll('a');
var surbrillance = document.createElement('span');
surbrillance.classList.add('surbrillance');

document.body.append(surbrillance);

function lien(){
    console.log('ok');
}

link.forEach(a => a.addEventListener('mouseenter', lien));