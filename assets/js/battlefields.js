// The below is to test whether this file in linked properly to the index.html file
// and its button elements

let button = document.getElementsByClassName("button");

function buttonTest() {
    console.log("button clicked");
}

button.addEventListener('click', buttonTest);