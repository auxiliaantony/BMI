function calculate() {
    validatenumber();
    empty();
    var weight_unit = document.getElementById('weight').value;
    var height_unit = document.getElementById('height').value;
    var p1 = parseFloat(document.getElementById("num1").value);
    var p2 = parseFloat(document.getElementById("num2").value);
    if (weight_unit == 'g') {
        p1 = p1 / 1000;
    }
    if (height_unit == 'cm') {
        p2 = p2 / 100;
    }

    var result = p1 / (p2 * p2);
    document.getElementById("result").value = result;
    window.localStorage.setItem("value", result);
    window.localStorage.setItem("email", "modal@gmail.com");
    //under 18.5, normal weight: 18.5 to 25, overweight: 25 to 30, obese: over 30
    if (result < 18.5) {

        alert("under");
        document.getElementById("result").value = result;
    }

    else if (result >= 18.5 || result <= 25) {
        alert("normal");
        document.getElementById("result").value = result;
    }
    else if (result > 25 || result <= 30) {
        alert("overweight");
        document.getElementById("result").value = result;
    }
    else if (result > 30) {
        alert("obese");
        document.getElementById("result").value = result;
    }

}

function empty() {

    var weight_unit = document.getElementById('weight').value;
    var height_unit = document.getElementById('height').value;
    var height = document.getElementById("num1").value;
    var p1 = parseFloat(height);
    var weight = document.getElementById("num2").value;
    var p2 = parseFloat(weight);
    if (weight_unit == null || weight_unit == "" && height_unit == null || height_unit == "" && height == 0 || height == "" && weight == 0 || weight == "") {
        alert("fill it");
        return false;
    }
    else
        return true;

}
function validatenumber() {
    var num = document.getElementById("num1").value;
    if (isNaN(num)) {
        alert("enter the numeric value");
        return false;
    } else {
        return true;
    }
}  
