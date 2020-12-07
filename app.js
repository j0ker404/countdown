
let input = document.querySelector("input");
let startStop =  document.getElementById("start-stop");
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
// input.addEventListener("keyup", updateFormat);

startStop.addEventListener("click", startStopHandler);
restart.addEventListener("click", restartHandler);