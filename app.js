let calculatorHistory = [];

function clickNumbers(buttons){
    let number = document.getElementById("expression").value;
    number += buttons.value;

    document.getElementById("expression").value = number;
}

function clickMathSymbol(buttons){
    let txtValue = document.getElementById("expression").value;

    if(buttons.value == "+"){
        txtValue = txtValue + "+";
        //txtValue+="+";

    }else if(buttons.value =="-"){
        txtValue =  txtValue + "-";

    }else if(buttons.value =="*"){
        txtValue = txtValue + "*";

    }else if(buttons.value =="÷"){
        txtValue = txtValue + "÷";
    }
    document.getElementById("expression").value = txtValue;

}

function clickFeatures(buttons){
    if(buttons.value  == "C"){

        document.getElementById("expression").value ="";
        document.getElementById("answer").value ="";

    }

}
