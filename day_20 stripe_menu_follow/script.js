const triggers = document.querySelectorAll('.cool>li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(){
console.log('ENTER');
this.classList.add('trigger-enter');
setTimeout(()=>
    this.classList.add('trigger-enter-active'),150);

}

function handleLeave(){
    console.log('Leave');

    this.classList.remove('trigger-enter');

}

triggers.forEach(triggers=>triggers.addEventListener('mouseenter',handleEnter));
triggers.forEach(triggers=>triggers.addEventListener('mouseleave',handleLeave));