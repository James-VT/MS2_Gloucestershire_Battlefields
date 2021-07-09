// The below is to test whether this file is linked properly to the index.html file
// and its button elements

let button = document.getElementById("tewkesbury-button");

function buttonTest() {
    console.log("button clicked");
}

button.addEventListener('click', buttonTest);

// The (document).ready below is to make sure the page has loaded properly before any JQuery/JavaScript is used

$(document).ready(function() {

    $("#tewkesbury-button").click(function() {
        $(".battle-title").text(`Battle of Tewkesbury ${data}`);
    })
});

var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://en.wikipedia.org/wiki/Battle_of_Tewkesbury#Background");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = this.responseText;
        console.log(data);
    };
}

