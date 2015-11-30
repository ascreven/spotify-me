// API Docs at:
// https://developer.spotify.com/technologies/web-api/search/


// function searchByArtist(keyword) {
//     var url = 'http://ws.spotify.com/search/1/artist.json?q='+keyword;
// }

// function searchByTrack(keyword) {
//   var url = 'http://ws.spotify.com/search/1/track.json?q='+keyword;
// }
$(document).ready(function(){
  searchFor = $( "#search-type" ).val();
  $(".submit").on("click", artistOrTrack(searchFor));
})

function artistOrTrack(selection) {
  if(selection === 'artist') {
    // searchByArtist();
    console.log('artist')
  } else {
    // searchByTrack();
    console.log('track')
  }
}
