/** This is the JS file for index.html. Although it may seem odd to have a separate file for just this small snippet of code, I wanted
 * to avoid inline or embedded JS as I haven't used it anywhere else in this project. The question, of course, is whether I really 
 * need this bit of code at all if it's to be the only bit of JS (or in this case, JQuery) used in the project. Couldn't I find another 
 * solution? Well, maybe. But I felt it was necessary to present the intro text as being optional as it is fairly long and takes 
 * up a lot of the screen, especially on mobile devices. Plus I haven't been able to use as much JQuery as I would've liked on 
 * this project so I'm taking any excuse to use it.
*/

$(".text-reveal").click(function() {
    $(".intro-expanded").show(1000, function() {
        $(".text-reveal").addClass("hide")
    })
})

$(document).ready(function() {
    $(".index-menu-image").hover(function() {
        $(this).animate({opacity: "0.2"});
    },
    function() {
        $(this).animate({opacity: "1"})
    })

    // $(".index-menu-image").mouseenter(function() {
    //     $(this).animate({opacity: "0.2"});
    // $(".index-menu-image").mouseleave(function() {
    //     $(this).animate({opacity: "1"});
    // })
    // });
})