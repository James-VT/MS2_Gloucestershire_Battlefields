/** While building this file, I consulted this tutorial to refresh my memory: https://www.youtube.com/watch?v=In0nB0ABaUk
 * However, that tutorial was for building a log-in form. I have adapted it heavily for my own use.
 */

const fullName = document.getElementById("fullname");

const form = document.getElementById("form");

const emailAddress = document.getElementById("emailaddress");

const errorElement = document.getElementById("error-messages");

const messageBox = document.getElementById("messagebox");

/**The below function checks our form for the required fields - name, email and message. If one of these is not filled in, the form will not submit.
 * @param e below is the submit button.
 */
form.addEventListener("submit", (e) => {
    /**The e.preventDefault() below is to stop the form from refreshing before it reaches the if/else statement that determines whether any error messages will 
     * prevent it from sending below.
     */
    e.preventDefault();
    let errorMessages = [];
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
    } else {
        /**The e.preventDefault() below stops the form refreshing before the email can be sent via email.js*/
        e.preventDefault();
        /**@ param e = e is the submit button, while e.target is the form itself. This is how we get it to send. */
        sendEmail(e.target);
    }
})

/**Much of the code in the below function came from Code Institute's tutorial in the CV project: https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/e4710f80cdf34bffbd607bc102482d5c/
 * I have edited to make use of my project's parameters.
 */

 function sendEmail(contactForm) {
    emailjs.init("user_5ueze81fv5kyPAkGuJJD8");
    emailjs.send("service_wvkwl78","template_dtsj6ch", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "from_organisation": contactForm.organisationtype.value,
        "about_site": contactForm.siteselect.value,
        "inquiry_type": contactForm.inquirytype.value,
        "inquiry_request": contactForm.messagebox.value
    })
    .then(
    function(response) {
        /**console.log below is a success message, so has been left in. */
        console.log("SUCCESS", response);
        alert("Thank you for your email. We will get back to you as soon as we can.")
        },
    function(error) {
        /**console.log below is a fail message, so has been left in. */
        console.log("FAILED", error);
    })
    return false;
}
