$(function () {
  'use strict';
  // Adjust Slider Height
  var winH    = $(window).height(),
      upperH  = $('.upper-bar').innerHeight(),
      navH    = $('.navbar').innerHeight();
  $('.slider, .carousel-item').height(winH - ( upperH + navH ));


// FIlter anything
  $(document).ready(function () {
    $("#anythingSearch").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $(".upper-bar *").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

});
