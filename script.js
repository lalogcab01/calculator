function clickAC() {
  memory = 0;
  display.textContent = "0";
  AC.textContent = "AC";
}
function clickAdd() {
  waitingNextInput = true;
  add.style.color = "orange";
  add.style.backgroundColor = "white";
  addAction = true;
  memory = display.textContent;
}
function clickEquals() {
  if (addAction) {
    display.textContent = parseFloat(display.textContent) + parseFloat(memory); 
    addAction = false;
  }
}
function clickOne() {
  if (display.textContent === "0" || waitingNextInput) {
    display.textContent = "1";
    AC.textContent = "C";
  } else {
    display.textContent += "1";
  }
  waitingNextInput = false;
  add.style.color = "white";
  add.style.backgroundColor = "orange";
}
function clickTwo() {
  if (display.textContent === "0" || waitingNextInput) {
    display.textContent = "2";
    AC.textContent = "C";
  } else {
    display.textContent += "2";
  }
  waitingNextInput = false;
  add.style.color = "white";
  add.style.backgroundColor = "orange";
}
function clickThree() {
  if (display.textContent === "0" || waitingNextInput) {
    display.textContent = "3";
    AC.textContent = "C";
  } else {
    display.textContent += "3";
  }
  waitingNextInput = false;
  add.style.color = "white";
  add.style.backgroundColor = "orange";
}
function clickFour() {
  if (display.textContent === "0" || waitingNextInput) {
    display.textContent = "4";
    AC.textContent = "C";
  } else {
    display.textContent += "4";
  }
  waitingNextInput = false;
  add.style.color = "white";
  add.style.backgroundColor = "orange";
}
function clickFive() {
  if (display.textContent === "0" || waitingNextInput) {
    display.textContent = "5";
    AC.textContent = "C";
  } else {
    display.textContent += "5";
  }
  waitingNextInput = false;
  add.style.color = "white";
  add.style.backgroundColor = "orange";
}
function clickSix() {
  if (display.textContent === "0" || waitingNextInput) {
    display.textContent = "6";
    AC.textContent = "C";
  } else {
    display.textContent += "6";
  }
  waitingNextInput = false;
  add.style.color = "white";
  add.style.backgroundColor = "orange";
}
function clickSeven() {
  if (display.textContent === "0" || waitingNextInput) {
    display.textContent = "7";
    AC.textContent = "C";
  } else {
    display.textContent += "7";
  }
  waitingNextInput = false;
  add.style.color = "white";
  add.style.backgroundColor = "orange";
}
function clickEight() {
  if (display.textContent === "0" || waitingNextInput) {
    display.textContent = "8";
    AC.textContent = "C";
  } else {
    display.textContent += "8";
  }
  waitingNextInput = false;
  add.style.color = "white";
  add.style.backgroundColor = "orange";
}
function clickNine() {
  if (display.textContent === "0" || waitingNextInput) {
    display.textContent = "9";
    AC.textContent = "C";
  } else {
    display.textContent += "9";
  }
  waitingNextInput = false;
  add.style.color = "white";
  add.style.backgroundColor = "orange";
}
function clickZero() {
  if (display.textContent === "0" || waitingNextInput) {
    display.textContent = "0";
  } else {
    display.textContent += "0";
  }
  waitingNextInput = false;
  add.style.color = "white";
  add.style.backgroundColor = "orange";
}

const display = document.querySelector("#display");

const AC = document.querySelector("#AC");
const add = document.querySelector("#add");
const equals = document.querySelector("#equals");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

AC.addEventListener("click", clickAC);
add.addEventListener("click", clickAdd);
equals.addEventListener("click", clickEquals);
one.addEventListener("click", clickOne);
two.addEventListener("click", clickTwo);
three.addEventListener("click", clickThree);
four.addEventListener("click", clickFour);
five.addEventListener("click", clickFive);
six.addEventListener("click", clickSix);
seven.addEventListener("click", clickSeven);
eight.addEventListener("click", clickEight);
nine.addEventListener("click", clickNine);
zero.addEventListener("click", clickZero);

waitingNextInput = false;
addAction = false;           

memory = 0;