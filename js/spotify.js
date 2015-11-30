// API Docs at:
// https://developer.spotify.com/technologies/web-api/search/




// function searchByTrack(keyword) {
//   var url = 'http://ws.spotify.com/search/1/track.json?q='+keyword;
// }
$(document).ready(function(){
  searchFor = $( "#search-type" ).val();
  $(".submit").on("click", function() {
    searchInput = $('#search-keyword').val();
    searchByArtist(searchInput)
  })
})
function searchByArtist(keyword) {
  $('h2').append(keyword);
  console.log(keyword);
  var url = 'http://ws.spotify.com/search/1/artist.json?q='+keyword;
}
