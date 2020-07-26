/* Update copyright year with the Date object */
var date = new Date();
document.querySelector(".copyright-year").textContent = date.getFullYear();

/*  animateElement() function animates the parameter element with the respective string.
    Input: The element selector string and the respective string indicating the animation.
    Output: Nothing.
*/
function animateElement(element, animation) {
  /* Add animated and the respective animation classes with web browser support, 
       and remove it once done so it can repeat the animation next time */
  $(element)
    .addClass("animated " + animation)
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function () {
        $(element).removeClass("animated " + animation);
      }
    );
}

/* Animate the About page section headings once webpage loads */
$(document).ready(function () {
  animateElement("#about h1, #about h2", "rubberBand");
});

$(".nav-link").on("click", function () {
  $(".navbar-collapse").collapse(
    "hide"
  ); /* Hide navigation bar right away after click */

  /* Animate headings every time a navigation link is clicked */
  /* Target only the h1 and h2 headings of the respective page section (determined from what
       navigation link the user pressed) to animate */
  var headingsSelector =
    $(this).attr("href") + " h1 , " + $(this).attr("href") + " h2";
  animateElement(headingsSelector, "rubberBand");
});
