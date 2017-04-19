console.log('log');

$(document).ready(onReady);

function onReady(){

  $.ajax( {
    url: 'http://www.omdbapi.com/?t=driving+miss+daisy',
    success: function(response) {
    $('#movie').append('<div class="movie-title">' + response.Title + '</div>');
    $('#movie').append('<img src='+ response.Poster + '>');
    }
  });
}
