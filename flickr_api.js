$(document).ready(function () {  //make sure the page is fully loaded
  $('button').click(function () {
    $("button").removeClass("selected"); //highlight off when the pointer move away
    $("button").addClass("selected"); // highlight on when the pointer hovers
  });
});