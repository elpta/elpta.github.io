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

    var contentStringMixtec = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<defaulth1 id="firstHeading" class="firstHeading">Mixtec</defaulth1>'+
        '<div id="bodyContent">'+
        '<p><b>Mixtec</b> dialects are part of the Otomanguean languages.' +
        'Read more about it on the <a href="about.html">about page</a>'
        '</div>'+
        '</div>';
    
    var infowindowMixtec = new google.maps.InfoWindow({
        content: contentStringMixtec
    });
    markerMixtec.addListener('click', function() {
        infowindowMixtec.open(map, markerMixtec);
    });

    var contentStringCatalan = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<defaulth1 id="firstHeading" class="firstHeading">Catalan</defaulth1>'+
        '<div id="bodyContent">'+
        '<p><b>Catalan</b> is a Romance Language spoken in Northeastern Spain, Southern France, '+
        'Andorra, the Balearic Islands, Alghero, and Italy. Read more about it on the '+
        '<a href="about.html">about page</a>'+
        '</div>'+
        '</div>';
    
    var infowindowCatalan = new google.maps.InfoWindow({
        content: contentStringCatalan
    });
    markerCatalan.addListener('click', function() {
        infowindowCatalan.open(map, markerCatalan);
    });

    var contentStringAlgonquin = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<defaulth1 id="firstHeading" class="firstHeading">Algonquin</defaulth1>'+
        '<div id="bodyContent">'+
        '<p><b>Algonquin</b> belongs to the Algic Language Family ' +
        'Based on data pulled from the 2006 and 2011 Canada Census, there were only 2,680 Algonquin speakers '+
        'in 2006 which decreased to 1,800 Algonquin speakers in 2011'+
        'Read more about it on the <a href="about.html">about page</a>'+
        '</div>'+
        '</div>';
    
    var infowindowAlgonquin = new google.maps.InfoWindow({
        content: contentStringAlgonquin
    });
    markerAlgonquin.addListener('click', function() {
        infowindowAlgonquin.open(map, markerAlgonquin);
    });
}
