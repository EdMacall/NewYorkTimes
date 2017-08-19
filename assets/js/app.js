var searchTerms = $("#basic-addon2");
var numRecords  = $("#num-records");
var startYear   = $("#start-year");
var endYear     = $("#end-year");
var topArticles = $("top-articles");

$("#search-button").on("click", function(){
  var whaturl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  whaturl += '?' + $.param({
    'api-key': "2297024f04844eb29533928ae0be73b3",
    'q': searchTerms.val()
  });

  if(false){whaturl += '?' + $.param({
    'begin_date': startYear
  })}

  if(false){whaturl += '?' + $.param({
    'end_date': endYear
  })}

  console.log(searchTerms.val());
  console.log(whaturl);

  $.ajax({

    url: whaturl,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
    console.log(result.docs);
    for (var i = 0; i < result.docs.length; i++) {
      var articleDiv = $("<div class='item'>");
      // var rating = results[i].rating;
      var p = $("<p>").text("Rating: " + rating);
      var articleImage = $("<img>");
      articleImage.attr("src", results[i].images.fixed_height.url);
      articleDiv.prepend(p);
      articleDiv.prepend(articleImage);
      $("#gifs-appear-here").prepend(articleDiv);
    }
  }).fail(function(err) {
    throw err;
  });
});

$("#clear-results").on("click", function(){
	topArticles.empty();
});