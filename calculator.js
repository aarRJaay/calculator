let answer = 0;
let operation = "";
let input = [];
let value = 0;
let opPushed = 0;
let numCount = 0;
let memStore = 0;
let total = 0;
let plusMinusPressed = 0;
let decimalPressed = 0;

// 17 char limit

const display = document.querySelector("#output");

const clr = document.querySelector("#clr");
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
plusminus.addEventListener("click", () => {
  if (plusMinusPressed == 0) {
    input.unshift("-");
    value = makeNumber(input);
    display.textContent = value;
    plusMinusPressed = 1;
  } else {
    input.pop();
    value = makeNumber(input);
    display.textContent = value;
    plusMinusPressed = 0;
  }
});

const back = document.querySelector("#back");
back.addEventListener("click", () => {
  input.pop();
  value = makeNumber(input);
  display.textContent = value;
});

back.addEventListener("mousedown", () => {
  onPress(back);
});

back.addEventListener("mouseup", () => {
  onRelease(back, "ex");
});

const point = document.querySelector("#point");
point.addEventListener("click", () => {
  if (decimalPressed == 1) {
  } else {
    input.push(".");
    value = makeNumber(input);
    display.textContent = value;
    decimalPressed = 1;
  }
});

point.addEventListener("mousedown", () => {
  onPress(point);
});

point.addEventListener("mouseup", () => {
  onRelease(point, "num");
});

const one = document.querySelector("#one");
one.addEventListener("click", () => {
  input.push(1);
  value = makeNumber(input);
  display.textContent = value;
});

one.addEventListener("mousedown", () => {
  onPress(one);
});

one.addEventListener("mouseup", () => {
  onRelease(one, "num");
});

const two = document.querySelector("#two");
two.addEventListener("click", () => {
  input.push(2);
  value = makeNumber(input);
  display.textContent = value;
});

two.addEventListener("mousedown", () => {
  onPress(two);
});

two.addEventListener("mouseup", () => {
  onRelease(two, "num");
});

const three = document.querySelector("#three");
three.addEventListener("click", () => {
  input.push(3);
  value = makeNumber(input);
  display.textContent = value;
});

three.addEventListener("mousedown", () => {
  onPress(three);
});

three.addEventListener("mouseup", () => {
  onRelease(three, "num");
});

const four = document.querySelector("#four");
four.addEventListener("click", () => {
  input.push(4);

  value = makeNumber(input);
  display.textContent = value;
});

four.addEventListener("mousedown", () => {
  onPress(four);
});

four.addEventListener("mouseup", () => {
  onRelease(four, "num");
});

const five = document.querySelector("#five");
five.addEventListener("click", () => {
  input.push(5);

  value = makeNumber(input);
  display.textContent = value;
});

five.addEventListener("mousedown", () => {
  onPress(five);
});

five.addEventListener("mouseup", () => {
  onRelease(five, "num");
});

const six = document.querySelector("#six");
six.addEventListener("click", () => {
  input.push(6);

  value = makeNumber(input);
  display.textContent = value;
});

six.addEventListener("mousedown", () => {
  onPress(six);
});

six.addEventListener("mouseup", () => {
  onRelease(six, "num");
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
  input.push(7);

  value = makeNumber(input);
  display.textContent = value;
});

seven.addEventListener("mousedown", () => {
  onPress(seven);
});

seven.addEventListener("mouseup", () => {
  onRelease(seven, "num");
});
const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
  input.push(8);

  value = makeNumber(input);
  display.textContent = value;
});

eight.addEventListener("mousedown", () => {
  onPress(eight);
});

eight.addEventListener("mouseup", () => {
  onRelease(eight, "num");
});

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
  input.push(9);
  value = makeNumber(input);
  display.textContent = value;
});

nine.addEventListener("mousedown", () => {
  onPress(nine);
});

nine.addEventListener("mouseup", () => {
  onRelease(nine, "num");
});

const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
  input.push(0);

  value = makeNumber(input);
  display.textContent = value;
});

zero.addEventListener("mousedown", () => {
  onPress(zero);
});

zero.addEventListener("mouseup", () => {
  onRelease(zero, "num");
});

const plus = document.querySelector("#add");
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
  // pressed.style.background = "grey";
}

function onRelease(pressed, btnType) {
  console.log(pressed.id);
  if (btnType === "num") {
    if (pressed.id == "point") {
      pressed.style.background = "grey";
    } else {
      pressed.style.background = "#7541aa";
    }
  } else if (btnType === "ex") {
    pressed.style.background = "#4190aa";
    resetPoint();
  } else {
    pressed.style.background = "#ff9233";
    resetPoint();
  }
}

function resetPoint() {
  point.style.background = "#7541aa";
  decimalPressed = 0;
}

function clearScreen() {
  display.textContent = "";
}

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
  plusMinusPressed = 0;
  if (operator === "add") {
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
