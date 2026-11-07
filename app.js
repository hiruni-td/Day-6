let calculatorHistory = [];

function clickNumbers(buttons){
    let number = document.getElementById("expression").value;
    
    number += buttons.value;

    document.getElementById("expression").value = number;
}

function clickMathSymbol(buttons){
    let txtValue = document.getElementById("expression").value;

    if(txtValue == ""){
        return;
    } 
    if(txtValue.includes("+")|| txtValue.includes("-")|| txtValue.includes("*")|| txtValue.includes("÷")){
        return;

    }

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

    }else if(buttons.value == "⌫"){
        let txtValue = document.getElementById("expression").value;

        txtValue = txtValue.slice(0,-1);

        document.getElementById("expression").value = txtValue;
        document.getElementById("answer").value = "";

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

    }else if(txtValue.includes("÷")){
        mathsymbol = "÷";

    }
    if(mathsymbol == ""){
        return;

    }
    let numbers = txtValue.split(mathsymbol);

    if(numbers.length !=2 || numbers[0]==""|| numbers[1]==""){
        document.getElementById("answer").value = "Invalid Input";
        return;

    }

    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);

    let answer = 0;

    if(mathsymbol == "+"){
        answer = num1 + num2;
    }else if(mathsymbol == "-"){
        answer =  num1 - num2;
    }else if(mathsymbol == "*"){
        answer = num1 * num2;
    }else if(mathsymbol == "÷"){
        
        if(num2 ==  0){
            document.getElementById("answer").value ="Cannot divide by zero";
            return;
        }
        answer= num1/num2;

    }

    document.getElementById("answer").value = answer;
    
    let history = txtValue + " = " + answer;

    calculatorHistory.push(history);

}

function clickFeaturesHistory(){
    loadData();

}

function loadData(){
    document.getElementById("calculatorHistory").value = "";
    for(let data of calculatorHistory){
        document.getElementById("calculatorHistory").value += data + "\n";

    }

}

