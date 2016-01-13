$(function () {
    var animal = prompt("Which animal would you like to learn about?");
    if (animal === "turtles") {
      $("#turtles").show();
    }
    else if (animal === "snakes") {
      $("#snakes").show();
    }
    else if (animal === "insects") {
      $("#insects").show();
    } else {
      //$(".jumbotron").show();
      alert("sorry, we don't have that animal!");
          document.location.reload(true);
    }

});

  $(".btn").click(function() {
    document.location.reload(true);
  });
  $(".jumbotron").toggle (function() {
   $(".choices").show();
 });
