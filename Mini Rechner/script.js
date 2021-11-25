function addClicked() {
    console.log("add clicked");
    let num1 = document.getElementById("number1").value;
    console.log(num1);
    let num2 = document.getElementById("number2").value;
    console.log(num2);

    let result = parseFloat(num1) + parseFloat(num2);
    console.log(result);
    document.getElementById("addition").innerHTML = result;
}

function buttonClicked2() {
    console.log("clicked");
    let num1 = document.getElementById("2number1").value;
    console.log(num1);
    let num2 = document.getElementById("2number2").value;
    console.log(num2);

    let result = parseFloat(num1) - parseFloat(num2);
    console.log(result);
    document.getElementById("subtraktion").innerHTML = result;
}

function buttonClicked3() {
    console.log("clicked");
    let num1 = document.getElementById("3number1").value;
    console.log(num1);
    let num2 = document.getElementById("3number2").value;
    console.log(num2);

    let result = parseFloat(num1) * parseFloat(num2);
    console.log(result);

}

function buttonClicked4() {
    console.log("clicked");
    let num1 = document.getElementById("4number1").value;
    console.log(num1);
    let num2 = document.getElementById("4number2").value;
    console.log(num2);

    let result = parseFloat(num1) / parseFloat(num2);
    console.log(result);

}