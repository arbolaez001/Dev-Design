$('.slides').slick({
	fade: true,
	autoplay: true,
	arrows: false,
	dots: true
});

$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});