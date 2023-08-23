/*

const displayScreen = document.querySelector(".displayScreen");
const buttons = document.querySelectorAll("button");
const operators = ["=", "+", "-", "x", "/", "%"];
let output = "";

const calculation = (buttonValue) => {
  if (buttonValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (buttonValue === "AC") {
    output = "";
  } else if (buttonValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && operators.includes(buttonValue)) return;
    output += buttonValue;
  }
  displayScreen.value = output;
};
buttons.forEach((button) => {
  button.addEventListener("click", (empty) =>
    calculation(empty.target.dataset.value)
  );
});
 */

const displayScreen = document.querySelector(".displayScreen");
const buttons = document.querySelectorAll("button");
const operators = ["=", "+", "-", "*", "/", "%"];
let output = "";

const calculation = (buttonValue) => {
  if (buttonValue === "=" && output !== "") {
    output = evaluateExpression(output.replace("%", "/100"));
  } else if (buttonValue === "AC") {
    output = "";
  } else if (buttonValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && operators.includes(buttonValue)) return;
    output += buttonValue;
  }
  displayScreen.value = output;
};

const evaluateExpression = (expression) => {
  return Function(`return ${expression}`)();
};

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    calculation(event.target.dataset.value);
  });
});


