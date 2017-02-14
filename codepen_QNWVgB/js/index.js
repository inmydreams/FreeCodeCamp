$(document).ready(function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success);
  }
  else{
    alert('Sorry unsupported');
  }
  
function success(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var kelvin;
    var celsius;
    var url="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=44db6a862fba0b067b1930da0d769e98";
    $.getJSON(url, function(data){
    kelvin = data.main.temp;
    celsius = kelvin - 273.15;
    var iconPic='<img src="http://openweathermap.org/img/w/'+data.weather[0].icon+'.png">';
    var description = data.weather[0].description;
    var city = data.name;
    var country = data.sys.country;
    $('#location').html(city+", "+country);
    $('#icon').html(iconPic);
    $('#description').html(description);
    $('#temp').html(Math.round(celsius));
  });
  $('#celsius').click(function(){
    $('#temp').html(Math.round(celsius));
    $('#celsius').addClass('selected');
    $('#fahrenheit').removeClass('selected');
  });
  $('#fahrenheit').click(function(){
    var fahrenheit = kelvin * 9/5 - 459.67;
    $('#temp').html(Math.round(fahrenheit));
    $('#celsius').removeClass('selected');
    $('#fahrenheit').addClass('selected');
  });
  $('#left').show();
  $('#right').show();
  }
});