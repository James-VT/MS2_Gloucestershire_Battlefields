/**Much of the code in this file came from Code Institute's tutorial in the CV project: https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/e4710f80cdf34bffbd607bc102482d5c/
 * I have edited to make use of my project's parameters.
 */

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