$('.slides').slick({
	fade: true,
	autoplay: false,
	arrows: false,
	dots: true
});

$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});