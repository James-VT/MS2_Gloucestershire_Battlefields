/** While building this file, I consulted this tutorial to refresh my memory: https://www.youtube.com/watch?v=In0nB0ABaUk
 * However, that tutorial was for building a log-in form. I have adapted it heavily for my own use.
 */

const fullName = document.getElementById("fullname");

const form = document.getElementById("form");

const emailAddress = document.getElementById("emailaddress");

const errorElement = document.getElementById("error-messages");

const messageBox = document.getElementById("messagebox");

/**The below function checks our form for the required fields - name, email and message. If one of these is not filled in, the form will not submit. */
form.addEventListener("submit", (e) => {
    let errorMessages = [];
    e.preventDefault()
    if (fullName.value === "" || fullName.value == null) {
        errorMessages.push("Your name is required");
    } else  {
        for (let i = 0; i < errorMessages.length; i++) {
            if (errorMessages[i] === "Your name is required") {
                errorMessages.splice[i, 1]
            }
        }
    }

    if (messageBox.value === "" || messageBox.value == null) {
        errorMessages.push("Your message is required");
    } else  {
        for (let i = 0; i < errorMessages.length; i++) {
            if (errorMessages[i] === "Your message is required") {
                errorMessages.splice[i, 1]
            }
        }
    }
    
    /** The following link is where I learned the expression pattern for validating an email address: https://www.w3resource.com/javascript/form/email-validation.php
    */
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress.value)) {
        for (let i = 0; i < errorMessages.length; i++) {
            if (errorMessages[i] === "Please enter a valid email address") {
                errorMessages.splice[i, 1]
            }
        }
    } else {
        errorMessages.push("Please enter a valid email address");
    };

    if (errorMessages.length > 0) {
        e.preventDefault();
        errorElement.innerText = errorMessages.join(", ");
    }
    console.log(errorMessages);
})

function sendMail(contactForm) {
    emailjs.send("service_wvkwl78","template_dtsj6ch", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "from_organisation": contactForm.organisationname.value,
        "from_contactnumber": contactForm.phonenumber.value,
        "about_site": contactForm.siteselect.value,
        "inquiry_type": contactForm.inquirytype.value,
        "inquiry_request": contactForm.messagebox.value
    })
    .then(
    function(response) {
        console.log("SUCCESS", response);
        },
    function(error) {
        console.log("FAILED", error);
    })
    return false;
}