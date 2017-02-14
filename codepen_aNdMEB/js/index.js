$(document).ready(function(){
  $('.num,.operator').click(function(){
    if($(this).text()=='C'){
      $('#display').empty();
    }
    else if($(this).text()=='←'){
      var text=$('#display').text();
      text=text.slice(0,-1);
      $('#display').empty();
      $('#display').append(text);
    }
    else{
      $('#display').append($(this).text());
    }
  });
  $('.equals').click(function(){
    var answer=eval($('#display').text());
    $('#display').html(answer);
  });
});