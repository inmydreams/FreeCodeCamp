$(document).ready(function(){
  var enddate = new Date(new Date().setHours(0, 0, 0, 0));
var startdate = new Date(new Date().setHours(0, 0, 0, 0));

active();
function active(){
	if($('#clock').hasClass('break')){
  	startdate.setMinutes($('#break').text());
  }
  else{
  	startdate.setMinutes($('#work').text());
  }
}

function tick() {
	var timeformat=startdate.toString().split(" ");
	$('#clock').html(timeformat[4]);
  if (startdate > enddate) {
  	startdate = new Date(startdate - 1000);
  }
  else{
  	$('#clock').toggleClass('break');
    active();
  }
}

var ticking;
function start() {
	ticking=setInterval(tick, 1000);
}

function pause() {
  clearInterval(ticking);
}

$('#clock').click(function(){
  $('#clock').toggleClass('start');
  if($('#clock').hasClass('start')){
  	start();
    $('#action').html('Click time again to pause');
  }
  else{
  	pause();
    $('#action').html('Click on time to resume');
  }
});
  $('.fa-plus').click(function(){
    var minutes=$(this).next().text();
    var test=parseInt($('#work').text())+parseInt($('#break').text());
    if(test<1439){
      minutes++;
      $(this).next().html(minutes);
      active();
    }
  });
  $('.fa-minus').click(function(){
    var minutes=$(this).prev().text();
    if(minutes>1){
      minutes--;
      $(this).prev().html(minutes);
      active();
    }
  });
  $('#reset').click(function(){
    history.go(0);
  });
});