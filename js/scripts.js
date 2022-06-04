$(document).ready(function() {
   $("p").click(function() {
   $(".html-showing").toggle();
   $(".html-hidden").toggle();
    newFunction();
  });
});

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    e.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const question = $("input#question").val();
    const otherQuestion = $("input#otherQuestion").val();

    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".animal").append(animalInput);
    $(".question").append(questionInput);
    $(".otherQuestion").append(otherQuestionInput);

    $("#story").show();
  });
});
