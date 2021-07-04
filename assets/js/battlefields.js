// The below is to test whether this file in linked properly to the index.html file
// and its button elements

function buttonTest() {
    console.log("button clicked");
}

let button = document.getElementsByClassName("button");
button.addEventListener('click', buttonTest);