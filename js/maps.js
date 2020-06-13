// Initialize and add the map
function initMap() {
    // The location of the languages
    var mixtec = {lat: -25.344, lng: 131.036};
    var catalan = {lat: 41.587, lng: 1.621};
    var algonquin = {lat: 47.431, lng: -77.598};

    // The map, shows the whole world
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 1, center: {lat: 0, lng: 0}});

    var markerMixtec = new google.maps.Marker({position: mixtec, map: map});
    var markerCatalan = new google.maps.Marker({position: catalan, map: map});
    var markerAlgonquin = new google.maps.Marker({position: algonquin, map: map});
}
