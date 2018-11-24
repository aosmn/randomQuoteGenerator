let getRandomQuote = function(){
    $.ajax({
        cache: false,
        url:
          "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        success: function(a) {
          $(".quote-text").html($(a[0].content).html());
          $(".author").html("&mdash; " + a[0].title);
          getRandomColor();
        }
      });
  };
  $(function() {
     getRandomColor();
    $("#generate-quote").on("click", function(e) {
      getRandomQuote()
    });
    $("#tweet-quote").on("click", e => {
      let text = "";
      text+=$(".quote-text").html();
      text+=$(".author").html();
      tweetTweet(text);
    })
  });
  
  
  function getRandomColor() {
    var letters = '0123456789ABCD';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 14)];
    }
    $("body").css("background", color);
    $(".quote-container").css("color", color);
    $(".btn").css("background", color);
    return color;
  }
  
  
  function tweetTweet(text){
    let url = "https://twitter.com/intent/tweet";
    window.open(url+"?text="+text+";","","width:500,height:300");
    }