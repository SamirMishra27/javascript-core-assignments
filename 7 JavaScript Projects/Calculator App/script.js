const inputBox = document.getElementById("input-component");
const answerBox = document.getElementsByClassName("answer")[0];
const backspaceButton = document.getElementById("backspace-button");

let backspaceOnHold = false;
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};

async function fetchAndCalculate(expression) {
    
    const encodedExpr = encodeURIComponent(expression);
    const response = await fetch("http://api.mathjs.org/v4/?expr=" + encodedExpr);
    
    result = await response.json();
    return result;
};

function calculateExpression() {
    expression = inputBox.value;
    fetchAndCalculate(expression)
    
        .then((result) => {
            answerBox.style.color = "white"
            answerBox.innerText = `= ${result}`
        })

        .catch((error) => {
            answerBox.style.color = "#F55050"
            answerBox.innerText = "Format Error"
        });
};

function onButtonClick(event) {
    
    if (event.srcElement.innerText === "=") {
        calculateExpression();
    }
    else if (event.srcElement.className.includes("backspace")) {
        inputBox.value = inputBox.value.slice(0, -1);
    } else {
        const target = event.srcElement.innerText;
        inputBox.value += !isNaN(target) ? Number(target) : target;
    }
    inputBox.focus();
};

for (element of ["helper", "number", "operand"]) {

    const groupOfElements = document.getElementsByClassName(element);

    for (button of groupOfElements) {
        button.addEventListener("click", onButtonClick);
    };
};

inputBox.addEventListener("keydown", function(event) {
    if (event.code === "Enter" && inputBox.value)
        calculateExpression()
});

backspaceButton.addEventListener("mousedown", async (event) => { 
    backspaceOnHold = true; 
    await sleep(1 * 1000);
    if (backspaceOnHold === true) {
        inputBox.value = "";
        backspaceOnHold = false;
    }
});
backspaceButton.addEventListener("mouseup", event => {backspaceOnHold = false})

backspaceButton.addEventListener("contextmenu", event => {
    event.preventDefault();
});