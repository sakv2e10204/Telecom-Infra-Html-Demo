////$(document).ready(function () {
////    debugger;
////    $('#btn_token').click(function () {
////        debugger;
////        var requestData = "12345";

////        $.ajax({
            
////            type: "POST",
////            url: "http://localhost:15715/authenticate",
////            data: JSON.stringify(requestData),
////            contentType: "application/json; charset=utf-8",
////            dataType: "json",
////            success: function (data) {
////                alert(data);
////            },
////            failure: function (errMsg) {
////                alert(errMsg);
////            }
////        });



////    });

////});

$(document).ready(function () {
    $('#btn_token').click(function () {
        debugger;
       /// var username = "12345";
        var partner_id = "23";
       var secret_key = "GCR942608IDFNSV";

        //$.post("https://uatproapi.hiremee.co.in/getskillassessmentlist",
        //    {
        //        'partner_id': partner_id,
        //        'secret_key': secret_key
        //    },
        //    function (data, status) {
        //        alert("Data: " + data + "\nStatus: " + status);
        //    });

        $.ajax({
           
            url: "https://itsapi.hiremee.co.in/getskillassessmentlist",
            type: "POST",
            ///dataType: 'json',
            data: JSON.stringify({
                //'username': username
                'partner_id': partner_id,
               'secret_key': secret_key
                
            }),
            async: true,
           responseType:'application/json',
           
            headers: {
                contentType:"application/json",
                "Access-Control-Allow-Origin": "*",
                
            },
           
            success: function (response) {

                alert(response);
            },
            error: function (e) {
                console.log(e);
            },
            dataType: "jsonp",
            contentType: "application/json"
        });

    });
})