jQuery(function ($) {

// side bar toggle

  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });



  // 4. magnify popup video
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });

}); // JQuery end


// cross icon toggle navbar

function myFunction(x) {
  x.classList.toggle("change");
}
