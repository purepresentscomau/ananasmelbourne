$(window).bind('DOMContentLoaded load resize', function () {
  if ($(window).innerWidth() > $(window).innerHeight() ) {
    $(".large_sunday").removeClass("large_sunday").addClass("small_sunday");
    $(".larger_logo_size").removeClass("larger_logo_size").addClass("large_logo_size");
  } else {
    $(".large_logo_size").removeClass("large_logo_size").addClass("larger_logo_size");
    $(".small_sunday").removeClass("small_sunday").addClass("large_sunday");
  }
});
