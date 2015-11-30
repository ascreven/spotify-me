// API Docs at:
// https://developer.spotify.com/technologies/web-api/search/




// function searchByTrack(keyword) {
//   var url = 'http://ws.spotify.com/search/1/track.json?q='+keyword;
// }
$(document).ready(function(){
  $(".submit").on("click", function(event) {
    event.preventDefault();
    searchInput = $('#search-keyword').val();
    searchFor = $( "#search-type" ).val();
    if (searchFor==="artist") {
      searchByArtist(searchInput);
    } else {
      searchByTrack(searchInput);
    }
  });

  function searchByArtist(keyword) {
    var url = 'http://ws.spotify.com/search/1/artist.json?q='+keyword;
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: url
    }).done(function(response) {
      results = response;
      artistResults(results);
    }).fail(function(response){
      console.log("Ajax get request failed.");
    });
  }
});

function searchByTrack(keyword) {
  var url = 'http://ws.spotify.com/search/1/track.json?q='+keyword;
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: url
  }).done(function(response) {
    results = response;
    console.log(results)
    trackResults(results);
  }).fail(function(response){
    console.log("Ajax get request failed.");
  });
};

function artistResults(list) {
  var listItems = list.artists;
  for(var i in listItems) {
    $('ul').append('<li>' + list.artists[i].name + '</li>');
  }
}

function trackResults(list) {
  var listItems = list.tracks;
  for(var i in listItems) {
    $('ul').append('<li>' + list.tracks[i].name + '</li>');
  }
}
