$(document).ready(function() {
  // global variable to store current quote/author from API
  var currentQuote = "";
  var currentAuthor = "";
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
  // When quote button is clicked, use proxy to call quote API with getJSON request, fade in quote/author and render to corresponding element.
  $("#generateQuoteButton").on("click", function() {
    changeColor();
    $("body").animate({backgroundColor: colors[i]}, 1000);
    $.getJSON("https://crossorigin.me/https://quotes.stormconsultancy.co.uk/random.json?dataType=%27jsonp%27&type=%27GET%27", function(json) {
      $("#quote").html(JSON.stringify(json.quote)).hide().fadeIn(800);
      $("#quoteAuthor").html(json.author).hide().fadeIn(800);
      // set the quote/author from the quote on the screen.
      currentQuote = json.quote;
      currentAuthor = json.author;
    });
  });
  // When twitter button is clicked open a new window with twitter dashboard, loaded with current quote/author.
  $('#generateTwitterButton').on("click", function() {
      window.open("https://twitter.com/intent/tweet?text="+ currentQuote + " -" + currentAuthor);
  });
});
