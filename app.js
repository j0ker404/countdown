
let input = document.querySelector("input");
let startStop =  [document.getElementById("start-stop"), true,undefined];
// startStop = [element, btnLabel boolean, id of timer]
let restart =  document.getElementById("restart");

let formatResults = document.getElementById("time-format");
// let inputState = new InputState(input);
// formatResults.innerHTML = 'text';
let currVal = 0;
let prevVal = 0;
let numDigit = 0;
let time = [];

// add event listeners

input.addEventListener("input", updateInputWithFormat);
input.addEventListener("change", updateFormat);
// input.addEventListener("keyup", updateFormat);

startStop[0].addEventListener("click", startStopHandler);
restart.addEventListener("click", restartHandler);