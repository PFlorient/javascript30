var recuptext;
var enter = document.getElementById("bar");
var ul = document.getElementById("list");

enter.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        addmsg();
    }
});


function addmsg() {
    recuptext = document.getElementById("bar").value;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(recuptext));
    ul.appendChild(li);
    document.getElementById("bar").value = "";

}


ul.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle('isok');
    }
})