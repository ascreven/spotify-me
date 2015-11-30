// API Docs at:
// https://developer.spotify.com/technologies/web-api/search/




// function searchByTrack(keyword) {
//   var url = 'http://ws.spotify.com/search/1/track.json?q='+keyword;
// }
$(document).ready(function(){
  searchFor = $( "#search-type" ).val();
  $(".submit").on("click", function(event) {
    event.preventDefault();
    searchInput = $('#search-keyword').val();
    searchByArtist(searchInput)
  })

function searchByArtist(keyword) {
  $('ul').append('<li>' + keyword + '</li>');
  var url = 'http://ws.spotify.com/search/1/artist.json?q='+keyword;
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: url
  }).done(function(response) {
    console.log(response);
  }).fail(function(response){
    console.log("Ajax get request failed.");
  })
}
})
