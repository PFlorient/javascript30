var recuptext;
var enter = document.getElementById("bar");

enter.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
       addmsg();
    }
});


function addmsg() {
    recuptext = document.getElementById("bar").value;
    var ul = document.getElementById("list")
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(recuptext));
    ul.appendChild(li);
    document.getElementById("bar").value = "";
}