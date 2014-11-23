//documentación en https://developers.google.com/maps/documentation/javascript/tutorial#MapOptions
function initialize() {
  
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(40.429462, -3.630941)
  }
  var map = new google.maps.Map(document.getElementById('map_canvas3'), mapOptions);


  



      var iconBase2 = 'http://maps.google.com/mapfiles/kml/paddle/';
      var Jackson = new google.maps.Marker({
          position: new google.maps.LatLng(41.598303, -87.352900),
          map: map,
          icon: iconBase2 + 'wht-blank.png',
          title: 'Michael Jackson'
      });
      var Beatles = new google.maps.Marker({
          position: new google.maps.LatLng(53.418659, -2.995300),
          map: map,
          icon: iconBase2 + 'grn-blank.png',
          title: 'The Beatles'
      });
      var U2 = new google.maps.Marker({
          position: new google.maps.LatLng(53.348742, -6.263833),
          map: map,
          icon: iconBase2 + 'pink-blank.png',
          title: 'U2'
      });
      var Robbie = new google.maps.Marker({
          position: new google.maps.LatLng(52.779231, -1.967846),
          map: map,
          icon: iconBase2 + 'purple-blank.png',
          title: 'Robbie Williams'
      });

      var Prince = new google.maps.Marker({
          position: new google.maps.LatLng(44.980565, -93.274877),
          map: map,
          icon: iconBase2 + 'purple-blank.png',
          title: 'Prince'
      });

      var Cranberries = new google.maps.Marker({
          position: new google.maps.LatLng(52.668070, -8.631513),
          map: map,
          icon: iconBase2 + 'purple-blank.png',
          title: 'The Cranberries'
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