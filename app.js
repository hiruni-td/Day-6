let calculatorHistory = [];

function clickNumbers(buttons){
    let number = document.getElementById("expression").value;
    number += buttons.value;

    document.getElementById("expression").value = number;
}


