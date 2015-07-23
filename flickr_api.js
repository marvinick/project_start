$(document).ready(function () {  //make sure the page is fully loaded
  $('form').click(function (evt) {
    evt.preventDefault();
    var $searchField = $("#search");
    var $submitButton = $("#submit");

    $searchField.prop("disabled", true);
    $submitButton.attr("disabled", true).val("searching ...");

    // the ajax part
    var flickerAPI = "http://api.flicker.com/services/feeds/photo_public.gne?jsoncallback=?";
    var animal = $searchField.val();
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
      $searchField.prop("disabled", false);
      $submitButton.attr("disabled", false).val("Search");
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  });
});