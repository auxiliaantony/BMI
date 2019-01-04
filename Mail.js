
function mail() {
    var email = window.localStorage.getItem("email");
    var result = window.localStorage.getItem("value");
   

     $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: '{"email":"' + email+ '", "result":"' + result  + '"}',
        url: "Credentials/mail",
        dataType: "json",
        success: function (result) {
            alert(result);
        },
      
    });
   
}