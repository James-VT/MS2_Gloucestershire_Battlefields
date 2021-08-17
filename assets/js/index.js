/** This is the JS file for index.html. Although it may seem odd to have a separate file for just these small snippets of code, I wanted
 * to avoid inline or embedded JS as I haven't used it anywhere else in this project.
*/

$(document).ready(function() {
    $(".text-reveal").click(function() {
        $(".intro-expanded").show(1000, function() {
            $(".text-reveal").addClass("hide");
        });
    });

    $(".index-menu-image").hover(function() {
        $(this).animate({opacity: "0.2"});
    },
    function() {
        $(this).animate({opacity: "1"});
    });
});