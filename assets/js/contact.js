/** While building this file, I consulted this tutorial to refresh my memory: https://www.youtube.com/watch?v=In0nB0ABaUk
 * However, that tutorial was for building a log-in form. I have adapted it heavily for my own use.
 */

const fullName = document.getElementById("full-name");

const form = document.getElementById("form");

const errorElement = document.getElementById("error-messages");

form.addEventListener("submit", (e) => {
    let errorMessages = [];
    if (fullName.value === "" || fullName.value == null) {
        errorMessages.push("Your name is required");
    }

    

    if (errorMessages.length > 0) {
        e.preventDefault();
        errorElement.innerText = errorMessages.join(", ");
    }
})