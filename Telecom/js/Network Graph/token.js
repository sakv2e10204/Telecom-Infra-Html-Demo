

$(document).ready(function () {
    $('#btn_token').click(function () {
        debugger;
        $.support.cors = true;
         $.ajax({
           
            url: "https://gorest.co.in/public/v2/posts",
            type: "GET",
            crossDomain: true,
            
            cors: true,
            secure: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                "contentType": "application/json",
            },

            success: function (response) {
                
                var data = response[0].title;
                console.log(data);
                alert(data);
            },
            error: function (e) {
                console.log(e);
            },
           
            dataType: "json",
            contentType: "application/json; charset=utf-8"
        });

    });
})