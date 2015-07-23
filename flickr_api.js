$(document).ready(function () {  //make sure the page is fully loaded
  $('button').click(function () {
    $("button").removeClass("selected"); //highlight off when the pointer move away
    $("button").addClass("selected"); // highlight on when the pointer hovers
    var flickerAPI = "http://api.flicker.com/services/feeds/photo_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json",
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each (data.items, function (i, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  });
});