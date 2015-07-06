$(function(){

//-------------CONSTRUCTOR FOR SONG+ARTIST-------//

var SearchReturn = function (song, artist){
	this.song = song;
	this.artist = artist;
}

SearchReturn.all = [];

SearchReturn.prototype.save = function(){
	SearchReturn.all.push(this);
}

SearchReturn.prototype.render = function(){
	var 
}


$('form').on('submit', function(){
	var $track_search = $('#track')

  $.get('https://api.spotify.com/v1/search?
  	q='+$track_search, function(data) {
    console.log(data);
  });
});


// spot_search["tracks"]["items"][1]["name"];












































});