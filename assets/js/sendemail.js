

console.log("linked");

function sendMail(contactForm) {
    emailjs.send("service_wvkwl78","template_dtsj6ch", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "from_organisation": contactForm.organisationname.value,
        "from_contactnumber": contactForm.contactnumber.value,
        "about_site": contactForm.siteselect.value,
        "inquiry_type": contactForm.siteselect.value,
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