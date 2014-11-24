//documentación en https://developers.google.com/maps/documentation/javascript/tutorial#MapOptions
function initialize() {
  
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(40.429462, -3.630941)
  }
  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);


  



      var iconBase2 = 'http://maps.google.com/mapfiles/kml/paddle/';
      var Nirvana = new google.maps.Marker({
          position: new google.maps.LatLng(47.605821, -122.331786),
          map: map,
          icon: iconBase2 + 'wht-blank.png',
          title: 'Nirvana'
      });
      var Stone = new google.maps.Marker({
          position: new google.maps.LatLng(32.721207, -117.174814),
          map: map,
          icon: iconBase2 + 'grn-blank.png',
          title: 'Stone Temple Pilots'
      });
      var Bush = new google.maps.Marker({
          position: new google.maps.LatLng(51.517747, -0.129751),
          map: map,
          icon: iconBase2 + 'pink-blank.png',
          title: 'Bush'
      });
      var Silverchair = new google.maps.Marker({
          position: new google.maps.LatLng(-32.942444, 151.751506),
          map: map,
          icon: iconBase2 + 'purple-blank.png',
          title: 'Silverchair'
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
