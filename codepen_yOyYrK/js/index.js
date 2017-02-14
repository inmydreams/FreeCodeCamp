$(document).ready(function(){
 $('#search').keyup($.debounce(400,function(){
    $("#result").empty();
    var query=$('#search').val();
    if(query.length>0){
    var url="http://en.wikipedia.org/w/api.php?action=opensearch&search="+query+"&format=json&callback=?";
    $.getJSON(url,function(data){
      $.each(data,function(i,value){
        if(data[1][i].length>0){
        $("#result").append("<div class='well' id='item'><p><strong>"+data[1][i]+"</strong></p><p>"+data[2][i]+"</p><a href='"+data[3][i]+"'target='_blank'>Read more</a></div>");
        }
      });
    });
    }
  }));
  
  $(document).ready(function(){
        $(document.body).css('padding-top', $('#search-box').height() + 20);
        $(window).resize(function(){
            $(document.body).css('padding-top', $('#search-box').height() + 20);
        });
    });
});