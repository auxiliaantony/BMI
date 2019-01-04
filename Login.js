function login() {

    var mailid = document.getElementById("mailid").value;
    var password = document.getElementById("password").value;
    var result = window.localStorage.getItem("value");
    
    

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: '{"mailid":"' + mailid + '", "password":"' + password + '", "result":"' + result + '"}',
        url: "Login/validate",
        dataType: "json",
        success: function (result) {
            alert(result);
        },
        
    });


}