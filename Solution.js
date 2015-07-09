$(function() {

  // form to search spotify API
  var $spotifySearch = $('#spotify-search');
  var $trackInput = $('#track-input');

  // element to hold results from spotify API
  var $searchResults = $('#search-results');

  var songTemplate = _.template($('#song-template').html());

  // submit form to search spotify API
  $spotifySearch.on('submit', function(event) {
    event.preventDefault();
    $searchResults.empty();
    var searchTerms = $trackInput.val();
    var spotifyAPIurl = 'https://api.spotify.com/v1/search?type=track&q=' + searchTrack;
    // use AJAX to call spotify API
    $.get(spotifyAPIurl, function(data) {

      var searchResults= data.tracks.items;
      console.log(searchResults);

      // only append results if there are any
      if (searchResults.length > 0) {

        // iterate through results
        _.each(searchResults, function(result, index) {
          
          // build object of data we want in our template
          var templateData = {
            albumArt: result.album.images.length > 0 ? result.album.images[0].url : null,
            artist: result.artists[0].name,
            name: result.name,
            previewUrl: result.preview_url
          };

          // put data in template and append to view
          var $searchDataAppend = $(songTemplate(templateData));
          $searchResults.append($searchDataAppend);
        });

      // else let user know there are no results
      } else {
        $searchResults.append('No results.');
      }
    });

    // reset the form
    $spotifySearch[0].reset();
    $trackInput.focus();
  });

});