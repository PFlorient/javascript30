
var text,typo,font ;

function transform() {
     text = document.getElementById("vanillatext").value;
     typo = document.getElementById("fonts_list").value;
     font = document.getElementById("fontsize").value;     
     document.getElementById("changedtext").style.fontSize = font+"px";
     document.getElementById("changedtext").style.fontFamily = typo +", serif";
     document.getElementById("changedtext").value = text;
     
}

function valuechange(){
var change = document.getElementById("fontsize").value;
document.getElementById("valuechange").value = change +" px";
}