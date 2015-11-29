// API Docs at:
// https://developer.spotify.com/technologies/web-api/search/


// function searchByArtist(keyword) {
//     var url = 'http://ws.spotify.com/search/1/artist.json?q='+keyword;
// }


// function searchByTrack(keyword) {
//   var url = 'http://ws.spotify.com/search/1/track.json?q='+keyword;
// }


$(document).ready(function(){
  userInput = document.querySelector("#search-keyword")

});

var searchButton = document.querySelector(".submit");

  var searchClickEvent = function(){
    console.log('I was clicked');
  };

searchButton.addEventListener('click', searchClickEvent);
// )
//   $(".submit").on("click", function(keyword){
//     var url = 'http://ws.spotify.com/search/1/artist.json?q='+keyword;
//     $.ajax({
//       url: url,
//       type: "get",
//       dataType: "json"
//
//     }).done(function(response){
//       console.log(response)
//     }).fail(function(){
//       console.log("Ajax request fails")
//     }).always(function(){
//       console.log("This always happens regardless of successful ajax request or not.")
//     })
//   })
// })
