$(document).ready(function() {  
   $("p").click(function() {
   $(".html-showing").toggle();
   $(".html-hidden").toggle();
  });

  $("form#list").submit(function(event) {
      event.preventDefault();
      $('#displayresult').empty();
        const favoriteNumber = $("input#favNum").val();
        if (favoriteNumber == "") {
          $('#displayresult').append('PLEASE INPUT A NUMBER!');
        } else if (favoriteNumber <= 10) {
          $('#displayresult').append('Try HTML!');
        } else if (favoriteNumber <= 100) {
          $('#displayresult').append('TRY CSS!');
        } else {
          $('#displayresult').append('TRY JAVASCRIPT!');
        }

    });
});

