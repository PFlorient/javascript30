var $ = document.querySelectorAll.bind(document);
var $on = document.addEventListener.bind(document);

var x, y;

function ajout(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function c() {
    document.form.textview.value = "";
}

function bach(){
    var text = document.form.textview.value;
    document.form.textview.value = text.substring(0, text.length-1);
}

function equal() {
    var isset = document.form.textview.value;
    if (isset) {
        document.form.textview.value = eval(document.form.textview.value);
    }
}
 //Fin
//By Roku
//02/11/18
 