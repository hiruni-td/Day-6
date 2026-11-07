let calculatorHistory = [];

function clickNumbers(buttons){
    let number = document.getElementById("expression").value;
    number += buttons.value;

    document.getElementById("expression").value = number;
}

function clickMathSymbol(buttons){
    let mathSymbol = document.getElementById("expression").value;

    if(buttons.value == "+"){
        mathSymbol = mathSymbol + "+";
        //mathSymbol+="+";

    }else if(buttons.value =="-"){
        mathSymbol =  mathSymbol + "-";

    }else if(buttons.value =="*"){
        mathSymbol = mathSymbol + "*";

    }else if(buttons.value =="÷"){
        mathSymbol = mathSymbol + "÷";
    }
    document.getElementById("expression").value = mathSymbol;

}
