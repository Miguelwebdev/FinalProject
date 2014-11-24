//documentación en https://developers.google.com/maps/documentation/javascript/tutorial#MapOptions
function initialize() {
  
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(40.429462, -3.630941)
  }
  var map = new google.maps.Map(document.getElementById('map_canvas4'), mapOptions);


  



      var iconBase2 = 'http://maps.google.com/mapfiles/kml/paddle/';
      var Amstrong = new google.maps.Marker({
          position: new google.maps.LatLng(29.949690, -90.079464),
          map: map,
          icon: iconBase2 + 'wht-blank.png',
          title: 'Louis Amstrong'
      });
      var Coltrane = new google.maps.Marker({
          position: new google.maps.LatLng(34.885211, -79.695582),
          map: map,
          icon: iconBase2 + 'grn-blank.png',
          title: 'John Coltrane'
      });
      var Holiday = new google.maps.Marker({
          position: new google.maps.LatLng(39.951346, -75.163352),
          map: map,
          icon: iconBase2 + 'pink-blank.png',
          title: 'Billie Holiday'
      });
      var Cullum = new google.maps.Marker({
          position: new google.maps.LatLng(51.781627, 0.474863),
          map: map,
          icon: iconBase2 + 'purple-blank.png',
          title: 'Jamie Cullum'
      });

      var Wooten = new google.maps.Marker({
          position: new google.maps.LatLng(43.132019, -115.692427),
          map: map,
          icon: iconBase2 + 'purple-blank.png',
          title: 'Victor Wooten'
      });

      var Metheny = new google.maps.Marker({
          position: new google.maps.LatLng(38.257229, -92.426113),
          map: map,
          icon: iconBase2 + 'purple-blank.png',
          title: 'Pat Metheny'
      });
 // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Ahora estás aquí'
      });

      map.setCenter(pos);
    }, 
    function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }
}

google.maps.event.addDomListener(window, 'load', initialize);