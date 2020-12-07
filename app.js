
let input = document.querySelector("input");
let formatResults = document.getElementById("time-format");
// let inputState = new InputState(input);
// formatResults.innerHTML = 'text';
let currVal = 0;
let prevVal = 0;
let numDigit = 0;
let time = [];
// let temp = 55;
input.addEventListener("input", updateInputWithFormat);
// input.addEventListener("keyup", updateFormat);

