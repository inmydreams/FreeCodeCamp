$(document).ready(function(){
var users=["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","ESL_SC2","DotaMajor"];
  $.each(users,function(i,user){
      var url="https://api.twitch.tv/kraken/";
      var callback=".json?callback=?";
      var channels="channels/"
      var streams="streams/"
      $.getJSON(url+channels+user+callback,function(channel){
        var displayName = channel.display_name;
        var link = channel.url;
        var logo = channel.logo;
        if(channel.status!=null){
          var about=channel.status;
        }
        else{
          about="No description";
        }
        var game;
        var onoff;
        $.getJSON(url+streams+user+callback,function(status){
        if(channel.self==status.self){
          if(status.stream!==null){
            onoff="alert-success";
            game=status.stream.game;
          }
          else{
            onoff="alert-danger";
            game="Not streaming";
          }
        }
        if(logo==null){
          logo="https://upload.wikimedia.org/wikipedia/commons/9/9a/No_avatar.png";
        }
        var result="<div class='string_to_append col-sm-6 col-sm-offset-3 alert "+onoff+"'><div class='col-sm-6'><img class='img-responsive center-block' src="+logo+"></div><div class='col-sm-6'><p class='displayName text-center'>"+displayName+"</p><p class='description text-center'>"+game+"<br>"+about+"</p><p class='text-center'><a class='link' target='_blank' href="+link+">Visit "+displayName+" channel</a></p></div></div>";
        $('#results').append(result);
        });
      });
    });
  $('#all').click(all);
  $('#online').click(online);
  $('#offline').click(offline);
  function all(){
    $('.alert-success, .alert-danger').show();
  }
  function online(){
    $('.alert-success').show();
    $('.alert-danger').hide();
  };
  function offline(){
    $('.alert-danger').show();
    $('.alert-success').hide();
  };
  $('#search').keyup(function(){
    var filter = $("#search").val();
    $('.displayName').each(function(){
      if ($(this).text().search(new RegExp(filter, "i")) < 0) {
        $(this).closest('.string_to_append').hide();
      } else {
        $(this).closest('.string_to_append').show();
      }
    });
  });
});