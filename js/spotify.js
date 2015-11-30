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
    searchByArtist(searchInput);
  });

  function searchByArtist(keyword) {
    var url = 'http://ws.spotify.com/search/1/artist.json?q='+keyword;
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: url
    }).done(function(response) {
      results = response;
      listResults(results);

    }).fail(function(response){
      console.log("Ajax get request failed.");
    });
  }
});

function listResults(list) {
  var listItems = list.artists;
  for(i in listItems) {
    console.log(listItems[i].name);
  };

  // list.forEach(function() {
  //     console.log(this.artists.name + " likes ");
  //   })
    $('ul').append('<li>' + list.artists[0].name + '</li>');
}
