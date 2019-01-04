
function signup() {

    validatepassword();
    validateemail();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobileno = document.getElementById("mobileno").value;
    var age = document.getElementById("age").value;
    var password = document.getElementById("psw").value;
    var result = window.localStorage.getItem("value");
    window.localStorage.setItem("email", email);
    $.post("/Credentials/insert", { "name": name, "mail": email, "mobileno": mobileno, "age": age, "password": password, "result": result });
  

}


function validatepassword() {
    var password = document.getElementById("psw").value;
    var rpassword = document.getElementById("rpsw").value;

    if (password != rpassword) {
        alert("enter the password correctly");
        return false;
    } else {
        return true;
    }
}

function validateemail() {
    var x = document.getElementById("email").value;
    var at = x.indexOf("@");
    var dot = x.lastIndexOf(".");
    if (at < 1 || dot < at + 2 || dot + 2 >= x.length) {
        alert("Please enter a valid e-mail address");
        return false;
    }
}
