var searchTerms = $("#search-terms");
var numRecords  = $("#num-records");
var startYear   = $("#start-year");
var endYear     = $("#end-year");
var topArticles = $("top-articles");

$("#search-button").on("click", function(){
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  url += '?' + $.param({
    'api-key': "2297024f04844eb29533928ae0be73b3",
    'q': searchTerms,
  });

  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
  }).fail(function(err) {
    throw err;
  });
});

$("#clear-results").on("click", function(){
	topArticles.empty();
});