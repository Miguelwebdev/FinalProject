//documentación en https://developers.google.com/maps/documentation/javascript/tutorial#MapOptions
function initialize() {
  
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(40.429462, -3.630941)
  }
  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);


  /*var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.429462, -3.630941),
      map: map,
      title: 'Hello World!'
  });*/


  var iconBase = 'http://maps.google.com/mapfiles/kml/pushpin/';
  
  var fnac = [
        ['Preciados 28', 40.419228, -3.705243, 1],
        ['Paseo de la Castellana 79', 40.447799, -3.692580, 2],
        ['Paseo de la Finca 1', 40.418731, -3.800636, 3],
        ];
  var markerF, i;

    for (i = 0; i < fnac.length; i++) {  
      markerF = new google.maps.Marker({
        position: new google.maps.LatLng(fnac[i][1], fnac[i][2],fnac[i][3]),
        map: map,
        title: 'Fnac',
        icon: iconBase + 'ylw-pushpin.png'
      })};

  var casalibro = [
          ['calle Maestro Victoria 3',  40.418431, -3.705542],
          ['calle Gran Via 9', 40.419907, -3.703012],
          ['calle Fuencarral 119',  40.430388, -3.702962],
          ['calle alcala 117',  40.424650, -3.676378]
        ];
  var markerCL, i;

    for (i = 0; i < casalibro.length; i++) {  
      markerCL = new google.maps.Marker({
        position: new google.maps.LatLng(casalibro[i][1], casalibro[i][2],casalibro[i][3]),
        map: map,
        title: 'La Casa del Libro',
        icon: iconBase + 'grn-pushpin.png'
      })};

var bookcenter = [
          ['calle luchana', 40.429625, -3.701239],
          ['c.c. shopping zielo', 40.441536, -3.784008],
          ['calle princesa 57',   40.431096, -3.716625],
          ['c.c gran plaza 2',  40.491551, -3.899110]
        ];
  var markerBC, i;

    for (i = 0; i < bookcenter.length; i++) {  
      markerBC = new google.maps.Marker({
        position: new google.maps.LatLng(bookcenter[i][1], bookcenter[i][2],bookcenter[i][3]),
        map: map,
        title: 'Book Center',
        icon: iconBase + 'red-pushpin.png'
      })};

      var iconBase2 = 'http://maps.google.com/mapfiles/kml/paddle/';
      var Anaya = new google.maps.Marker({
          position: new google.maps.LatLng(40.448209, -3.629770),
          map: map,
          icon: iconBase2 + 'wht-blank.png',
          title: 'Editorial Anaya'
      });
      var Salamandra = new google.maps.Marker({
          position: new google.maps.LatLng(41.393649, 2.185291),
          map: map,
          icon: iconBase2 + 'grn-blank.png',
          title: 'Editorial Salamandra'
      });
      var Gigamesh = new google.maps.Marker({
          position: new google.maps.LatLng(41.392091, 2.177613),
          map: map,
          icon: iconBase2 + 'pink-blank.png',
          title: 'Editorial Gigamesh'
      });
      var Akal = new google.maps.Marker({
          position: new google.maps.LatLng(40.614352, -3.709112),
          map: map,
          icon: iconBase2 + 'purple-blank.png',
          title: 'Editorial Akal'
      });


 // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Hola paco'
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
