var outputNumber = document.getElementById("number");
var outputText = document.getElementById("text");

function MagicButton() {
    outputText.innerHTML = "";
    outputNumber.innerHTML = "";
    let Größe = document.getElementById("Größe").value;
    let Gewicht = document.getElementById("Gewicht").value;

    let result = (Math.round(((Größe * 1.43) / (Gewicht)) - 3.4))
    
    calc(result);
}

function calc(result){
    if (result < 0) {
        for (let index = 0; index > result; index++) {
            outputText.innerText = "negativ";
            if (index == 0){
                outputNumber.innerText += index;
            } else {
                outputNumber.innerText += ", " + index;
            }
        }
    } else if (result > 0 ) {
        for (let index = 0; index < result; index++) {
            outputText.innerText = "positiv";
            if (index == 0){
                outputNumber.innerText += index;
            } else {
                outputNumber.innerText += ", " + index;
            }
        }
    } else {
        console.log("null");
        outputText.innerHTML = "null";
    }
}   

