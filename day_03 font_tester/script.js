
var x ;

function transform() {
     x = document.getElementById("vanillatext").value;
     document.getElementById("changedtext").style.fontFamily = document.getElementById("fonts_list").value;
     document.getElementById("changedtext").value = x;
}
