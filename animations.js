$(".btn, a, #hide-quote").hide();

$(function() {
    $.ajax({
            headers: {"X-Mashape-Key": "6zKSOPpM4JmshXHfdNYW9J5ZGUaRp1HMB3ljsnDYjFJMcGoMGZ"} ,
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
            success: function(data) {
                object = JSON.parse(data);
                $("#author").hide().html("- " + object["author"]).fadeIn(1000);
                $("#quote").hide().html(object["quote"]).fadeIn(1000);
                $(".btn, #hide-quote").fadeIn(1000)
                $("a").attr( "href", "https://twitter.com/share?url=google.com&text=" + "'" + object["quote"] + "'  - " + object["author"] ).fadeIn(1000);
            },

        });

    $(".btn").on("click", function() {
   		$.ajax({
            headers: {"X-Mashape-Key": "6zKSOPpM4JmshXHfdNYW9J5ZGUaRp1HMB3ljsnDYjFJMcGoMGZ"} ,
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
            success: function(data) {
                window.object = JSON.parse(data);
            },

        });

        $("a").removeAttr( "href" ).attr( "href", "https://twitter.com/share?url=google.com&text=" + "'" + window.object["quote"] + "'  - " + window.object["author"] );
//superlight, dark: purple, pink, red, light-blue, green, yellow, orange
        var colors = [["#E8D7F7", "#300F4F"], ["#F7D5F5", "#590454"], ["#FCD9DE", "#5C000C"], ["#DEF5FA", "#02404D"], ["#D7FAD7", "#004501"], ["#F5F3CB", "#757206"], ["#F7DABA", "#5E3302"]] 
                var rand = colors[Math.floor(Math.random() * colors.length)]
      
        $("#quote, #author").fadeOut(500, function() {
         	$("#author").html("- " + window.object["author"]).fadeIn(500);
         	$("#quote").html(window.object["quote"]).fadeIn(500);
     	});

        while (JSON.stringify(rand) == JSON.stringify(window.check)) {
        	rand = colors[Math.floor(Math.random() * colors.length)];
        }

        window.check = rand;
        $(".container-fluid").css("color", rand[1]);
        $("button, a").css("color", rand[0]);
     	$("body").css("background", rand[1]);
     	$(".container-fluid").css("background", rand[0]);
        $("button, a").css("background", rand[1]);
    });
});