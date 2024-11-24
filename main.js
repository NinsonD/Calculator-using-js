let num1, num2, op;
let show = document.querySelector(".show");
let dot = false;
let equal = false;
ops = ["+", "*", "/"];
let enteredNumber = [];
let enteredOp = [];
let showValue = [];

function inputs(number) {
  let display = document.querySelector(".input");

  if (number == "." && dot == true) return;

  if (display.value == 0) {
    if (number == 0 || ops.includes(number)) return;
    else display.value = number;
  } 
  else {
    if (ops.includes(number) || number == "-") {
      // num1 = display.value;
      // console.log(num1);
      // op = number;
      // show.value = num1 + op;
      //  display.value = "0";

      let num = display.value;
      let op = number;
      //  display.value = number;
      enteredNumber.push(num);
      enteredOp.push(op); 
      dot = false;
console.log(enteredNumber);

      let displayValue = display.value;
      showValue.push(displayValue);
      show.value = showValue.join("");

      display.value = "";
    } else {
      if (equal) {
        display.value = "";
        equal = false;
      }
      display.value += number;
      if (number == ".") dot = true;
    }
  }
}

function result() {
  let display = document.querySelector(".input");
  let num = display.value;
  enteredNumber.push(num);
  console.log(enteredNumber);
  // show.value += num;
  showValue.push[num];
  let displayValue = display.value;
  showValue.push(displayValue);
  console.log(showValue);

  show.value = showValue;
  equal = true;

  // num2 = display.value;

  // show.value = num + op + num;
  for (i = 0; i <= enteredNumber.length - 1; i++) {
    switch (enteredOp[i]) {
      case "+":
        // display.value = Number(num1) + Number(num2);

        enteredNumber[i + 1] =
          parseFloat(enteredNumber[i]) + parseFloat(enteredNumber[i + 1]);
        display.value = enteredNumber[enteredNumber.length - 1];

        break;
      case "-":
        enteredNumber[i + 1] =
          parseFloat(enteredNumber[i]) - parseFloat(enteredNumber[i + 1]);
        display.value = enteredNumber[enteredNumber.length - 1];

        break;
      case "*":
        enteredNumber[i + 1] =
          parseFloat(enteredNumber[i]) * parseFloat(enteredNumber[i + 1]);
        display.value = enteredNumber[enteredNumber.length - 1];

        break;
      case "/":
        if (num2 == 0) {
          display.value = "Cannot divided by Zero";
        } else {
          enteredNumber[i + 1] =
            parseFloat(enteredNumber[i]) / parseFloat(enteredNumber[i + 1]);
          display.value = enteredNumber[enteredNumber.length - 1];
        }
        break;
    }
    console.log(num);
  }
}

function handleClear() {
  document.querySelector(".input").value = "0";
  document.querySelector(".show").value = "";
  enteredNumber = [];
  enteredOp = [];
}
function deletes() {
  let currentvalue = document.querySelector(".input").value;
  if (currentvalue.length == 1) {
    document.querySelector(".input").value = "0";
    document.querySelector(".input").value = "0";
  } else {
    document.querySelector(".input").value = currentvalue.slice(0, -1);
  }
}
