$(document).ready(function(){
    var quote_string;
    $("#get_quote").click(function(){
        $.ajax({
            url:"https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
            type: 'GET',
            datatype: 'json',
            success: function(data) { 
                var split = JSON.parse(data);
                quote_string="<h1>"+split.quote+"</h1>"+"<br>"+"<h2>"+" - "+split.author+"</h2>"+"<br>";
                var tweet_button = "<button type='button' class='btn btn-primary btn-lg' id='tweet'><i class='fa fa-twitter'></i> Tweet</button>";
                $("#quote").addClass('well').html(quote_string+tweet_button);
            },
            error: function(err) { 
                alert(err); 
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "OHviaoYp1emshXeR2qf6hTo1ULwyp16ONlRjsn11rmHWdLNPld");
            }
        });
    });
    $(document).on('click','#tweet', function(){
        window.open('https://twitter.com/intent/tweet?text='+$('#quote').text().replace('Tweet',''),'_blank');
    });
});