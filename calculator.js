let answer = 0;
// let store = 0;
let operation = "";
let input = [];
let value = 0;
let opPushed = 0;
let numCount = 0;
let memStore = 0;
let total = 0;

// 17 char limit

const display = document.querySelector("#output");

const clr = document.querySelector("#clr");
console.log("clear");
clr.addEventListener("click", () => {
  value = 0;
  answer = 0;
  input = [];
  display.textContent = value;
});

clr.addEventListener("mousedown", () => {
  onPress(clr);
});

clr.addEventListener("mouseup", () => {
  onRelease(clr, "ex");
});

const plusminus = document.querySelector("#plusminus");
console.log("plusminus");
plusminus.addEventListener("click", () => {
  input.push("-");
  value = makeNumber(input);
  console.log(value);
  display.textContent = value;
});

plusminus.addEventListener("mousedown", () => {
  onPress(plusminus);
});

plusminus.addEventListener("mouseup", () => {
  onRelease(plusminus, "ex");
});

const point = document.querySelector("#point");
console.log(point);
point.addEventListener("click", () => {
  input.push(".");
  value = makeNumber(input);
  console.log(value);
  display.textContent = value;
});

point.addEventListener("mousedown", () => {
  onPress(point);
});

point.addEventListener("mouseup", () => {
  onRelease(point, "num");
});

const one = document.querySelector("#one");
console.log(one);
one.addEventListener("click", () => {
  input.push(1);
  value = makeNumber(input);
  console.log(value);
  display.textContent = value;
});

one.addEventListener("mousedown", () => {
  onPress(one);
});

one.addEventListener("mouseup", () => {
  onRelease(one, "num");
});

const two = document.querySelector("#two");
console.log(two);
two.addEventListener("click", () => {
  input.push(2);
  value = makeNumber(input);
  console.log(value);
  display.textContent = value;
});

two.addEventListener("mousedown", () => {
  onPress(two);
});

two.addEventListener("mouseup", () => {
  onRelease(two, "num");
});

const three = document.querySelector("#three");
console.log(three);
three.addEventListener("click", () => {
  input.push(3);
  value = makeNumber(input);
  console.log(value);
  display.textContent = value;
});

three.addEventListener("mousedown", () => {
  onPress(three);
});

three.addEventListener("mouseup", () => {
  onRelease(three, "num");
});

const four = document.querySelector("#four");
console.log(four);
four.addEventListener("click", () => {
  input.push(4);

  value = makeNumber(input);
  console.log(value);
  display.textContent = value;
});

four.addEventListener("mousedown", () => {
  onPress(four);
});

four.addEventListener("mouseup", () => {
  onRelease(four, "num");
});

const five = document.querySelector("#five");
console.log(five);
five.addEventListener("click", () => {
  input.push(5);

  value = makeNumber(input);
  console.log(value);
  display.textContent = value;
});

five.addEventListener("mousedown", () => {
  onPress(five);
});

five.addEventListener("mouseup", () => {
  onRelease(five, "num");
});

const six = document.querySelector("#six");
console.log(six);
six.addEventListener("click", () => {
  input.push(6);

  value = makeNumber(input);
  console.log(value);
  display.textContent = value;
});

six.addEventListener("mousedown", () => {
  onPress(six);
});

six.addEventListener("mouseup", () => {
  onRelease(six, "num");
});

const seven = document.querySelector("#seven");
console.log(seven);
seven.addEventListener("click", () => {
  input.push(7);

  value = makeNumber(input);
  console.log(value);
  display.textContent = value;
});

seven.addEventListener("mousedown", () => {
  onPress(seven);
});

seven.addEventListener("mouseup", () => {
  onRelease(seven, "num");
});
const eight = document.querySelector("#eight");
console.log(eight);
eight.addEventListener("click", () => {
  input.push(8);

  value = makeNumber(input);
  console.log(value);
  display.textContent = value;
});

eight.addEventListener("mousedown", () => {
  onPress(eight);
});

eight.addEventListener("mouseup", () => {
  onRelease(eight, "num");
});

const nine = document.querySelector("#nine");
console.log(nine);
nine.addEventListener("click", () => {
  input.push(9);

  value = makeNumber(input);
  console.log(value);
  display.textContent = value;
});

nine.addEventListener("mousedown", () => {
  onPress(nine);
});

nine.addEventListener("mouseup", () => {
  onRelease(nine, "num");
});

const zero = document.querySelector("#zero");
console.log(zero);
zero.addEventListener("click", () => {
  input.push(0);

  value = makeNumber(input);
  console.log(value);
  display.textContent = value;
});

zero.addEventListener("mousedown", () => {
  onPress(zero);
});

zero.addEventListener("mouseup", () => {
  onRelease(zero, "num");
});

const plus = document.querySelector("#add");
console.log("+");
plus.addEventListener("click", () => {
  operation = "add";
  total = value;
  value = 0;
  input = [];
  clearScreen();
});

plus.addEventListener("mousedown", () => {
  onPress(plus);
});

plus.addEventListener("mouseup", () => {
  onRelease(plus, "op");
});

const subtract = document.querySelector("#minus");
subtract.addEventListener("click", () => {
  console.log("-");
  operation = "subtract";
  total = value;
  value = 0;
  input = [];
  clearScreen();
});

minus.addEventListener("mousedown", () => {
  onPress(minus);
});

minus.addEventListener("mouseup", () => {
  onRelease(minus, "op");
});

const multiply = document.querySelector("#multiply");
multiply.addEventListener("click", () => {
  console.log("*");
  operation = "multiply";
  total = value;
  value = 0;
  input = [];
  clearScreen();
});

multiply.addEventListener("mousedown", () => {
  onPress(multiply);
});

multiply.addEventListener("mouseup", () => {
  onRelease(multiply, "op");
});

const divide = document.querySelector("#divide");
divide.addEventListener("click", () => {
  console.log("/");
  operation = "divide";
  total = value;
  value = 0;
  input = [];
  clearScreen();
});

divide.addEventListener("mousedown", () => {
  onPress(divide);
});

divide.addEventListener("mouseup", () => {
  onRelease(divide, "op");
});

const equals = document.querySelector("#equals");
console.log("=");
clearScreen();
equals.addEventListener("click", () => {
  answer = operate(total, value, operation);
  display.textContent = answer;
  value = answer;
  input = [];
  total = answer;
});

equals.addEventListener("mousedown", () => {
  onPress(equals);
});

equals.addEventListener("mouseup", () => {
  onRelease(equals, "op");
});

function onPress(pressed) {
  pressed.style.background = "grey";
}

function onRelease(pressed, btnType) {
  if (btnType === "num") {
    pressed.style.background = "#7541aa";
  } else if (btnType === "ex") {
    pressed.style.background = "#4190aa";
  } else {
    pressed.style.background = "#ff9233";
  }
}

function clearScreen() {
  display.textContent = "";
}
// const operator = document.querySelector("#memStore");
// console.log("MEM");
// zero.addEventListener("click", () => {
//   memStore = total;
// });
//TODO: also send button type as well as actual button name

function makeNumber(input) {
  if (input == "-") {
    return "-";
  } else if (input == ".") {
    return ".";
  } else {
    let number = input.join("");
    return Number(number);
  }
}

function operate(value1, value2, operator) {
  if (operator === "add") {
    // let a = value1 + value2;
    // console.log(value1, value2, operator, a);
    return value1 + value2;
  } else if (operator === "subtract") {
    return value1 - value2;
  } else if (operator === "multiply") {
    return value1 * value2;
  } else if (operator === "divide") {
    if (value2 === 0) {
      return "OUCH!!";
    } else {
      return value1 / value2;
    }
  } else if (operator === "store") {
    store = answer;
  }
}
