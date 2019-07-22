/* Update copyright year */
var date = new Date();
document.querySelector(".copyright-year").textContent = date.getFullYear();

/*  animateHeadings() function animates all the h1 and h2 headings on the webpage
    each time it's called.
    Input: Respective string indicating the animation.
    Output: Nothing.
*/
function animateHeadings(animation) {
    /* Add the animated and the respective animation clases with web broweser support and remove it once
       done so it can repeat the animation next time */
    $("h1, h2").addClass("animated " + animation).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
        $("h1, h2").removeClass("animated " + animation);
    });
}

/* Animate headings once webpage loads */
$(document).ready(function() {
    animateHeadings("rubberBand");
});

/* Animate headings every time navigation bar is clicked */
$(".nav-link").on("click", function() {
    $(".navbar-collapse").collapse("hide"); /* Hide navigation bar right away after click */
    animateHeadings("rubberBand");
});


