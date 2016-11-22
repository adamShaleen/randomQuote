$(document).ready(function() {
  $("#generateQuoteButton").on("click", function() {
    $.getJSON("https://crossorigin.me/https://quotes.stormconsultancy.co.uk/random.json?dataType=%27jsonp%27&type=%27GET%27", function(json) {
      $("#quote").html(JSON.stringify(json.quote));
      $("#quoteAuthor").html(json.author);
    });
  });
});
