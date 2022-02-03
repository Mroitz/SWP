document.getElementById("run").addEventListener("click", function() {
    let number = document.getElementById("input").value;

    console.log(number);
    if (number > 0) {
        for (let index = 0; index <= number; index++) {
            console.log(index);
        }
    } else {
        for (let index = 0; index >= number; index--) {
            console.log(index);

        }
    }



});