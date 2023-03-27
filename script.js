var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var merdium = document.getElementById("meridium");

setInterval(() => {
    var date = new Date();
    hour.innerText = date.getHours();
    min.innerText = date.getMinutes();
    sec.innerText = date.getSeconds();
    if (date.getHours() < 12) {
        merdium.innerText = "AM";
    }
}, 1000);

