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

function clickHandleCalculator(){
    let txtValue = document.getElementById("expression").value;
    let mathsymbol = "";

    if(txtValue.includes("+")){
        mathsymbol = "+";

    }else if(txtValue.includes("-")){
        mathsymbol = "-";

    }else if(txtValue.includes("*")){
        mathsymbol  = "*";

    }else if(txtValue.includes("/")){
        mathsymbol = "/";

    }
    let numbers = txtValue.split(mathsymbol);

    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);

    let answer = 0;

    if(mathsymbol == "+"){
        answer = num1 + num2;
    }else if(mathsymbol == "-"){
        answer =  num1 - num2;
    }else if(mathsymbol == "*"){
        answer = num1 * num2;
    }else if(mathsymbol == "/"){
        answer = num1 / num2;
    }

    document.getElementById("answer").value = answer;
    
    let history = txtValue + " = " + answer;

    calculatorHistory.push(history);

}
