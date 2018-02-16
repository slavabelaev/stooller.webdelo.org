function initMap() {
    initDirections();
    initPlaces();
    initMapS();
}

function initDirections() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('google-map-directions'), {
        zoom: 7,
        center: {lat: 41.85, lng: -87.65},
        disableDefaultUI: true
    });
    directionsDisplay.setMap(map);

    displayRoute(directionsService, directionsDisplay);

    function displayRoute(directionsService, directionsDisplay) {
        directionsService.route({
            origin: '22 Folsom Street, San Francisco, CA, USA',
            destination: '16 Elizabeth Street, San Francisco, CA, USA',
            travelMode: 'DRIVING'
        }, function(response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            }
        });
    }
}

function initPlaces() {
    var map;
    var infowindow;

    var pyrmont = {lat: -33.867, lng: 151.195};

    map = new google.maps.Map(document.getElementById('google-map-places'), {
        center: pyrmont,
        zoom: 15,
        disableDefaultUI: true
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: pyrmont,
        radius: 500,
        type: ['store']
    }, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }
}

function initMapS() {
    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 10,
        center: {lat: -37.814, lng: 144.963},
        disableDefaultUI: true
    });

    // Define the LatLng coordinates for the polygon's path.
    var triangleCoords = [
        new google.maps.LatLng(-37.884608857503785, 144.82177734375),
        new google.maps.LatLng(-37.73271097867417, 144.75860595703125),
        new google.maps.LatLng(-37.68055980320511, 144.95498657226562),
        new google.maps.LatLng(-37.71859032558814, 145.096435546875),
        new google.maps.LatLng(-37.810868914072984, 145.21591186523438),
        new google.maps.LatLng(-37.883524980871314, 145.27084350585938),
        new google.maps.LatLng(-37.9864220106266, 145.24200439453125),
        new google.maps.LatLng(-38.021049624126036, 145.18295288085938),
        new google.maps.LatLng(-38.040520469688225, 145.118408203125)
    ];

    // Construct the polygon.
    var bermudaTriangle = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: '#ff6a59',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#ff6a59',
        fillOpacity: 0.15
    });
    bermudaTriangle.setMap(map);
}