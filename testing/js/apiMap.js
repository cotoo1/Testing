window.iniciarMapa = function (){
    var coord = {lat:-33.569915 ,lng: -70.801463};
    var map = new google.maps.Map(document.getElementById("mapa"),{
      zoom: 16,
      center: coord, 
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
} 