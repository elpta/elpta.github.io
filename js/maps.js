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
        '<p><b>Mixtec</b> is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
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
        '<p><b>Catalan</b> is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
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
        '<p><b>Algonquin</b> is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';
    
    var infowindowAlgonquin = new google.maps.InfoWindow({
        content: contentStringAlgonquin
    });
    markerAlgonquin.addListener('click', function() {
        infowindowAlgonquin.open(map, markerAlgonquin);
    });
}
