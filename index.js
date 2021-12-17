const prompt = require('prompt-sync')();

let log = console.log;

function getName() {
    let name = prompt('What is your name? ');
    log(`Ok ${name}, What is your Operator? `);
}

function mainCalculator() {
    log("+ For Addition");
    log("- For Subtraction");
    log("/ For Division");
    log("* for Multiplication");
    let operatorSelect = prompt(``);
    let number1 = prompt(`What is your First Number?`);
    let number2 = prompt(`What is your Second Number?`);

    if (operatorSelect === "+") {
        log(`${number1}` + `${number2}`);
        
    } else if (operatorSelect === "-") {
        log(`${number1}` - `${number2}`);
    } else if (operatorSelect === "/") {
        log(`${number1}` / `${number2}`);
    } else if (operatorSelect === "*") {
        log(`${number1}` * `${number2}`);
    } else {
        log("No Operator Selected")
    }

}

getName()
mainCalculator()

let runAgain = prompt("Do you want to run Program again? (y/n) ");
if (runAgain === "y") {
    getName();
    mainCalculator(); 
} else {
    return log("Have a Great Day!");
}