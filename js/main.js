$('.slides').slick({
	fade: true,
	autoplay: false,
	arrows: false,
	dots: true
});

$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});

function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(25.7752495,-80.1895104),
    scrollwheel: false,
    zoom: 13,
    navigationControl: false,
    scaleControl: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)

  var marker = new google.maps.Marker({
    // The below line is equivalent to writing:
    // position: google.maps.LatLng(25.7752495,-80.1895104),
    position: {lat: 25.7752495, lng: -80.1895104},
    map: map
  });

  var infowindow = new google.maps.InfoWindow({
    content: '<p>Marker Location: 261 NE 1st Street, Miami, FL 33132 </p>'
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', initialize);