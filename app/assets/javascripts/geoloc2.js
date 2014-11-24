//documentación en https://developers.google.com/maps/documentation/javascript/tutorial#MapOptions
function initialize() {
  
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(40.429462, -3.630941)
  }
  var map = new google.maps.Map(document.getElementById('map_canvas2'), mapOptions);


  



      var iconBase2 = 'http://maps.google.com/mapfiles/kml/paddle/';
      var Hendrix = new google.maps.Marker({
          position: new google.maps.LatLng(47.608599, -122.335219),
          map: map,
          icon: iconBase2 + 'wht-blank.png',
          title: 'Jimi Hendrix'
      });
      var Roses = new google.maps.Marker({
          position: new google.maps.LatLng(34.063172, -118.252431),
          map: map,
          icon: iconBase2 + 'grn-blank.png',
          title: 'Guns N Roses'
      });
      var Rolling = new google.maps.Marker({
          position: new google.maps.LatLng(51.520311, -0.135931),
          map: map,
          icon: iconBase2 + 'pink-blank.png',
          title: 'The Rolling Stones'
      });
      var Muse = new google.maps.Marker({
          position: new google.maps.LatLng(50.548499, -3.496650),
          map: map,
          icon: iconBase2 + 'purple-blank.png',
          title: 'Muse'
      });

      var Extremoduro = new google.maps.Marker({
          position: new google.maps.LatLng(40.042344, -6.085988),
          map: map,
          icon: iconBase2 + 'purple-blank.png',
          title: 'Extremoduro'
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