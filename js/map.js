 var map;

 function initMap() {
   var directionsRender = new google.maps.DirectionsRenderer();
  var geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(35.6311969, 139.2826378);
  var myOptions = {
    zoom: 10,  //kalau 1, boleh view world map
    center: latlng,
    mapTypeId: google.maps.MapTypeId.HYBRID   //ROADMAP, HYBRID, SATELLITE
  };
  map = new google.maps.Map($("#map_canvas").get(0), myOptions);
  directionsRender.setMap(map);
$("#btn").click(function(){
  var directionsService = new google.maps.DirectionsService();
  var request = {
    origin: $('#start').val(),
    destination: $('#end').val(),
    waypoints:[
      {location: $('#singgah1').val()},
      {location: $('#singgah2').val()}
    ],
    travelMode: google.maps.DirectionsTravelMode.DRIVING  //DRIVING-by car, XBICYCLING, XTRANSIT, WALKING
  };
  directionsService.route(request, function(result, status){
    if (status== google.maps.DirectionsStatus.OK){
      directionsRender.setDirections(result);
      directionsRender.setPanel($('#geocoder_info').get(0));
    }
  });

  /*var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title:"拓殖大学"
  });*/
});
}

$(function() {
  $('body').css('color', 'black');
  $('body').css('background', '#CCE8D7');
  $('body').css('font-size', '18px');
  $('body').css('text-align', 'center');
  $('#btn').css('font-size', '20px');
  $('#btn').css('width', '60px');
  $('#btn').css('height', '20px');
  $('#btn').css('cursor', 'pointer');
  $('#geocoder_info').css('text-align', 'left');
  /*$("#btn").click(function(){
    var address = $("#end").val();
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': address},
      function(results, status){
        alert(results[0].formatted_address);
        if(status == google.maps.GeocoderStatus.OK){
         map.setCenter(results[0].geometry.location);
         map.setZoom(17);
         var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          //  title: results[0].geometry.location
        });
      }else{
        alert("ジオコーディングに失敗しました。");
      }

    });
    //var newLatlng = new google.maps.LatLng(lat, lng);
    //map.setCenter(newLatlng);
  }); */
});
