var nav = document.querySelector("#navbar");
var topnav = nav.offsetTop;

function fixed() {
console.log(topnav);
    if (window.scrollY >= topnav ) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed');
    } else {
        
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed');
    }
}

window.addEventListener('scroll', fixed);