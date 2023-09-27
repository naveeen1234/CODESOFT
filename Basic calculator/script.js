let result = document.getElementById("result");
let expression = "";

function appendToResult(value) {
    expression += value;
    result.value = expression;
}

function clearResult() {
    expression = "";
    result.value = "";
}

function calculateResult() {
    try {
        expression = eval(expression).toString();
        result.value = expression;
    } catch (error) {
        result.value = "Error";
    }
}
