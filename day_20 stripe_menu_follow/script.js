const triggers = document.querySelectorAll('.cool>li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    console.log('ENTER');
    this.classList.add('trigger-enter');
    setTimeout(() =>
        this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width
    }
}

function handleLeave() {
    console.log('Leave');
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(triggers => triggers.addEventListener('mouseenter', handleEnter));
triggers.forEach(triggers => triggers.addEventListener('mouseleave', handleLeave));