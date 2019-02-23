var theNum = "",
    oldNum = "",
    resultNum = "",
    operator = "";

function number(button) {
    theNum += button.innerHTML;
    document.getElementById("screen").innerHTML = oldNum + " " + operator + " " + theNum;
}

function reset() {
    theNum = "";
    oldNum = "";
    resultNum = "";
    operator = "";
    document.getElementById("screen").innerHTML = 0;
}

function operation(button) {
    oldNum = theNum;
    theNum = "";
    operator = button.innerHTML;
    document.getElementById("screen").innerHTML = oldNum + " " + operator;
}

function equal() {
    oldNum = Number(oldNum);
    theNum = Number(theNum);
    switch (operator) {
        case "+":
            resultNum = oldNum + theNum;
            break;
        case "-":
            resultNum = oldNum - theNum;
            break;
        case "×":
            resultNum = oldNum * theNum;
            break;
        case "÷":
            resultNum = oldNum / theNum;
            break;
        default:
            resultNum = theNum;
    }
    document.getElementById("screen").innerHTML = resultNum;
}

function square() {
    resultNum = theNum * theNum;
    document.getElementById("screen").innerHTML = resultNum;
}

function sqrt() {
    resultNum = Math.sqrt(theNum);
    document.getElementById("screen").innerHTML = resultNum;
}

function factorial() {
    resultNum = 1;
    for (i = theNum; i >= 1; i--) {
        resultNum *= i;
    }
    document.getElementById("screen").innerHTML = resultNum;
}

function percent() {
    resultNum = theNum / 100;
    document.getElementById("screen").innerHTML = resultNum;
}