$(document).scroll(function() {
  var scroll_pos = 0;
  scroll_pos = $(this).scrollTop();
  if (scroll_pos > 0) {
    $(".navigation-bar").addClass("navbar-scroll")
  } else {
    $(".navigation-bar").removeClass("navbar-scroll")
  }
});

$(document).scroll(function() {
  var scroll_pos_2 = 0;
  scroll_pos_2 = $(this).scrollTop();
  if (scroll_pos_2 > 200) {
    $(".features").addClass("show")
  } else {
    $(".features").removeClass("show")
  }
});
