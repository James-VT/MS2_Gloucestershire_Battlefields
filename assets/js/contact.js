/** While building this file, I consulted this tutorial to refresh my memory: https://www.youtube.com/watch?v=In0nB0ABaUk
 * However, that tutorial was for building a log-in form. I have adapted it heavily for my own use.
 */

const fullName = document.getElementById("full-name");

const form = document.getElementById("form");

const emailAddress = document.getElementById("emailaddress");

const errorElement = document.getElementById("error-messages");

/** For the below function used to validate a user's email address, I consulted the following page: https://www.w3resource.com/javascript/form/email-validation.php
 * The above link is also where I learned the expression pattern for validating an email address.
 */

// function validateEmail(emailAddress) {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress.value)) {
//         emailAddress.classList.add("valid");
//         console.log(true);
//     } else {
//         emailAddress.classList.add("invalid");
//         console.log(false);
//     }
// }

form.addEventListener("submit", (e) => {
    let errorMessages = [];
    if (fullName.value === "" || fullName.value == null) {
        errorMessages.push("Your name is required");
    }
    
    // validateEmail();

    if (emailAddress.class === "invalid") {
        errorMessages.push("Please enter a valid email address");
    }

    if (errorMessages.length > 0) {
        e.preventDefault();
        errorElement.innerText = errorMessages.join(", ");
    }
})