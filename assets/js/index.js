$(".text-reveal").click(function() {
    $(".intro-expanded").show(1000, function() {
        $(".text-reveal").addClass("hide")
    })
})