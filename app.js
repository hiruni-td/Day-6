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
    if(txtValue.slice(-1)=="+"  || txtValue.slice(-1)=="-" || txtValue.slice(-1)=="*" || txtValue.slice(-1)=="÷"){
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

    if(txtValue == ""){
        return;
    }

    let numbers = [];
    let operators = [];
    let currentNumber = "";

    for(let i = 0; i < txtValue.length; i++){

        if(txtValue[i] == "+" || txtValue[i] == "-" || txtValue[i] == "*" || txtValue[i] == "÷"){

            numbers.push(Number(currentNumber));
            operators.push(txtValue[i]);
            currentNumber = "";

        }else{
            currentNumber += txtValue[i];
        }
    }

    numbers.push(Number(currentNumber));

    let newNumbers = [];
    let newOperators = [];

    newNumbers.push(numbers[0]);

    for(let i = 0; i < operators.length; i++){

        if(operators[i] == "*"){
            newNumbers[newNumbers.length - 1] *= numbers[i + 1];

        }else if(operators[i] == "÷"){

            if(numbers[i + 1] == 0){
                document.getElementById("answer").value = "Cannot divide by zero";
                return;
            }
            newNumbers[newNumbers.length - 1] /= numbers[i + 1];

        }else{
            newOperators.push(operators[i]);
            newNumbers.push(numbers[i + 1]);
        }
    }
    let answer = newNumbers[0];

    for(let i = 0; i < newOperators.length; i++){

        if(newOperators[i] == "+"){
            answer += newNumbers[i + 1];

        }else if(newOperators[i] == "-"){
            answer -= newNumbers[i + 1];
        }
    }
    document.getElementById("answer").value = answer;
    calculatorHistory.push(txtValue + " = " + answer);
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

