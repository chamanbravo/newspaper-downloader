var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
month = month < 10 ? '0' + month : month;
var day = date.getDate();
day = day < 10 ? '0' + day : month;
var url = `https://epaper.ekantipur.com/kathmandupost/download/${year}-${month}-${day}`;

var btn = document.querySelector("button");
btn.addEventListener('click', call);

function call() {
    window.location.href = url;
}
