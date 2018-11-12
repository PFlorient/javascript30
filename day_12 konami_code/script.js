var touches = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

var position = 0;

document.addEventListener('keydown', function (e) {
    var key = touches[e.keyCode];
    var requiredKey = konamiCode[position];

    if (key == requiredKey) {

        position++;

        if (position == konamiCode.length) {
            alert('Yeah !')
            position = 0;

        }
    } else {
        position = 0;
    }
});