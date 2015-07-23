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
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  });
});