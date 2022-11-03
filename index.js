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
    $(".feature_heading").addClass("show")

    setTimeout( function() {
      $(".power_bi").addClass("show")
    },1000)

    setTimeout( function() {
      $(".power_automate").addClass("show")
    },1500)

    setTimeout( function() {
      $(".power_apps").addClass("show")
    },2000)

    setTimeout( function() {
      $(".feat_subtitle").addClass("show")
    },2500)
    }
});

setTimeout( function() {
  $(".who-copy").addClass("show")
  $(".who-img").addClass("show")
},500)
