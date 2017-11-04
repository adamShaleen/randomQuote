$(document).ready(function() {

  // global variable to store current quote/author from API
  var currentQuote = "Everything is its own thing.";
  var currentAuthor = "BODs";

  // list of background colors
  var colors = ["rgb(219, 193, 251)", "rgb(145, 177, 109)", "rgb(238, 158, 83)", "rgb(227, 64, 137)", "rgb(52, 100, 246)"];

  // function to increment through colors list
  var i = 0;
  function changeColor() {
    i += 1;
    if (i === 5) {
      i = 0;
    }
  }

  function getRandomNumber() {
    return Math.floor((Math.random() * 80) + 1);
  }

  $("#generateQuoteButton").on("click", function() {

    changeColor();

    $("body").animate({backgroundColor: colors[i]}, 1000);

    $.ajax({
      type: "GET",
      dataType: "json",
      url: "https://random-quote-generator.herokuapp.com/api/quotes/",
      success: function(data) {

        var quoteNumber = getRandomNumber();

        $(".contentContainer").hide().fadeIn(800);
        $("#quote").html(JSON.stringify(data[quoteNumber].quote));
        $("#quoteAuthor").html(JSON.stringify(data[quoteNumber].author));

        currentQuote = JSON.stringify(data[quoteNumber].quote);
        currentAuthor = JSON.stringify(data[quoteNumber].author);

      }
    });

  });

  // When twitter button is clicked open a new window with twitter dashboard, loaded with current quote/author.  WIll NOT WORK WITH POPUP BLOCKERS
  $('#generateTwitterButton').on("click", function() {
      window.open("https://twitter.com/intent/tweet?text="+ currentQuote + " -" + currentAuthor);
  });

});
