

$(document).ready(function () {
    $('#btn_token').click(function () {
        debugger;
        var partner_id = "23";
        var secret_key = "GCR942608IDFNSV";
        $.support.cors = true;
         $.ajax({
           
             url: "https://itsapi.hiremee.co.in/getskillassessmentlist",
            type: "GET",
            crossDomain: true,
            
            cors: true,
            secure: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                "contentType": "application/json",
             },
             data: JSON.stringify({
                 "partner_id": partner_id,
                 "secret_key": secret_key
             }),
             
         
            success: function (response) {

                var data = response.responsetext[0].skill_id;
                console.log(data);
                alert('SkillId is :'+ data);
            },
            error: function (e) {
                console.log(e);
            },
           
            dataType: "json",
            contentType: "application/json; charset=utf-8"
        });

    });
})
