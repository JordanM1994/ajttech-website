$(document).scroll(function() {
  var scroll_pos = 0;
  scroll_pos = $(this).scrollTop();
  if (scroll_pos > 75) {
    $(".navigation-bar").addClass("navbar-scroll")
  } else {
    $(".navigation-bar").removeClass("navbar-scroll")
  }
});
