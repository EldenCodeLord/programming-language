$(document).ready(function() {  
   $("p").click(function() {
   $(".html-showing").toggle();
   $(".html-hidden").toggle();
    newFunction();
  });

  $("form#list").submit(function(event) {
      event.preventDefault();
      const favoriteNumber = $("input#favNum").val();
        if (favoriteNumber <= 10) {
          console.log('Try HTML!'); 
        } else if (favoriteNumber <= 100) {
          console.log('TRY CSS');
        } else (favoriteNumber <= 200) {
          console.log('TRY JAVASCRIPT');
        }

    });
});

