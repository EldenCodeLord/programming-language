$(document).ready(function() {
  $("p").click(function() {
    $(".html-showing").toggle();
    $(".html-hidden").toggle();
    newFunction();
  });
});

function newFunction() {
  $("p").click(function() {
  $(".csslogo-showing").toggle();
  $(".csslogo-hidden").toggle();
});
}; 


$(document).ready(function () {
   $(".click").click(function () {
   $(".hide").toggle().fadeIn();
   $(".show").toggle().fadeOut();
  });
});