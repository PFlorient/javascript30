var color = document.getElementsByClassName('case');
var clickme = document.getElementsByClassName('clickme');

for (var i = 0; i < color.length; i++) {
    (function (index) {
        color[index].addEventListener("click", function () {
            const style = getComputedStyle(this)
            var backgroundColor = style.backgroundColor;
            backgroundColor = rgb2hex(backgroundColor);
            copyToClipboard(backgroundColor);
            clickme[index].innerHTML = "Copied !";
        })
    })(i);
}

var hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

function copyToClipboard(val) {
    var couleur = document.createElement("input");
    document.body.appendChild(couleur);
    couleur.setAttribute('value', val);
    couleur.select();
    document.execCommand("copy");
    document.body.removeChild(couleur);

}