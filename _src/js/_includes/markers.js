jQuery(function($) {
    if (document.body.classList.contains('page-template-page-institucional') || document.body.classList.contains('page-template-page-institucional-en') ) {

      $(window).load(function() {
        iniciarmap();

      function iniciarmap() {
        var styleMap = [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#e3f2b4"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}];
        var ancestor    = document.getElementById('wrap-mapa'),
            itens_mapa  = ancestor.getElementsByTagName('*');

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          scrollwheel: false,
          center: {lat: +itens_mapa[0].getAttribute('data-lat'), lng: +itens_mapa[0].getAttribute('data-long')},
          styles: styleMap
        });

        var infowindow = new google.maps.InfoWindow();
        var latlngbounds = new google.maps.LatLngBounds();

        var locations   = [];
        var i, e, title, latitude, longitude, content;

        for (i = 0; i < itens_mapa.length; ++i) {
            e         = itens_mapa[i];
            title     = e.getAttribute('data-info');
            latitude  = e.getAttribute('data-lat');
            longitude = e.getAttribute('data-long');
            content   = e.getAttribute('data-content');
            icone     = e.getAttribute('data-icone');
            locations.push([title, latitude, longitude, content, icone]);
        }

        // console.log(locations);
        setMarkers(map,locations, infowindow, latlngbounds);
        map.fitBounds(latlngbounds);

        var listener = google.maps.event.addListener(map, "idle", function() {
          if (map.getZoom() > 16) map.setZoom(16);
          google.maps.event.removeListener(listener);
        });
      }

      function setMarkers(map,locations, infowindow, latlngbounds){

        var marker, i
        for (i = 0; i < locations.length; i++){

         var titulo    = locations[i][0];
         var lat       = locations[i][1];
         var long      = locations[i][2];
         var content   = locations[i][3];
         var icone     = locations[i][4];

         var latlngset  = new google.maps.LatLng(lat, long);
         latlngbounds.extend(latlngset);

         var marker = new google.maps.Marker({
           icon: icone,
           map: map,
           title: titulo,
           position: latlngset
         });
         map.setCenter(marker.getPosition());

         var content    = "<div class='maps'><h4 class='maps__titulo'>" + titulo +  "</h4><p>" + content + "</p></div>";
         google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
            return function() {
               infowindow.close();
               infowindow.setContent(content);
               infowindow.open(map,marker);
            };
         })(marker,content,infowindow));
        }
      }

      });

    }
});