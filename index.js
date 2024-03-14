let screenWidth

if ($( ".features" ).length) {
  screenWidth = $( ".features" ).width();
} else {
  screenWidth = $( ".report_headings" ).width();
}

if (screenWidth < 900) {
  $(".row").removeClass("service-row");
  $('.svc-text').each(function () {
          $(this).insertBefore($(this).prev('.svc-img'));
  });};

  if (screenWidth < 1300) {
    $("iframe").hide();
    $(".view-report-button").show();
    };

$(document).scroll(function() {
  var scroll_pos = 0;
  scroll_pos = $(this).scrollTop();
  if (scroll_pos > 0) {
    $(".navigation-bar").addClass("navbar-scroll")
  } else {
    $(".navigation-bar").removeClass("navbar-scroll")
  }
});

if($(window).width() <= 1024) {

  setTimeout( function() {
    $(".feature_heading").addClass("show")
  },1000)

  setTimeout( function() {
    $(".power_bi").addClass("show")
  },1500)

  setTimeout( function() {
    $(".power_automate").addClass("show")
  },2000)

  setTimeout( function() {
    $(".power_apps").addClass("show")
  },2500)

  setTimeout( function() {
    $(".feat_subtitle").addClass("show")
  },3000)
  
} else {
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
};

setTimeout( function() {
  $(".who-copy").addClass("show")
  $(".who-img").addClass("show")
},500);

