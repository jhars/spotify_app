$(function(){

//-------------CONSTRUCTOR FOR SONG+ARTIST == NO NEED-------//
var templateData = {
            albumArt: result.album.images.length > 0 ? result.album.images[0].url : null,
            artist: result.artists[0].name,
            name: result.name,
            previewUrl: result.preview_url
          };

 // var templateData = function (song,artist,art,link){
 // 	this.song =  

 // });


SearchTerms.prototype.render = function(){
	var $song_item = $(songTemplate(this));
	this.index = SearchTerms.all.indexOf(this);
	$song_item.attr('data-index',this.index);
	$resultsList.append($song_item);

	//this is where I should iterate through array
	// spot_search["tracks"]["items"][1]["name"];
}

var $spotifySearch = $('#spot_search');
var $newSearch= $('#track');
var $resultsList=$('#results');
var songTemplate = _.template($('#song-template').html());





$spotifySearch.on('submit', function(event){
	event.preventDefault();

	var track_search = $newSearch.val();
	var searchAPI = 'https://api.spotify.com/v1/search?
  	q='+track_search;

  $.get(searchAPI, function(data) {
  	var searchResults = data.tracks.items;
    console.log(searchResults);

    if (searchResults.length > 0) {
    	_.each(searchResults, function(result, index){

    		var var templateData = {
            albumArt: result.album.images.length > 0 ? result.album.images[0].url : null,
            artist: result.artists[0].name,
            name: result.name,
            previewUrl: result.preview_url
          };
// would like to put this into constructor
		  var $trackResult = $(trackTemplate(templateData));
		  $results.append($trackResult);
		});

    	  } else {
    	    $results.append('No results.');
    	  }
    	});
		  $spotifySearch[0].reset();
		  $track.focus();
    	});
});














































});