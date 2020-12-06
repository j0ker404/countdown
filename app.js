function numDigits(num) {
    let digits = 0;
    while(num > 0 ) {
        num = Math.round(num / 10);
        digits++;
    }
    console.log(digits);
    return digits;   
} 

class InputState {

    constructor(input) {
        this.input = input;
        this.currVal = this.input.innerHTML;
        this.prevVal = 0;
        this.input.addEventListener('input', this.updateInput);
    }
    
    updateInput(e) {
        // console.log(e.target.value);
        this.currVal = e.target.value;
        
        // check if input is a number 
        if (isNaN(this.currVal)) {
            e.target.value = this.prevVal; 
            this.currVal = e.target.value;
        } else {
            this.prevVal = this.currVal;
        }
        // from this point this.currVal is always a number
        // console.log(this.currVal);
        let numDigit = numDigits(this.currVal);
        console.log(`numDigits:${numDigit}`); 
    }

}


let input = document.querySelector('input');
let inputState = new InputState(input);

// input.addEventListener('input',update);

// function update(e) {
//     console.log(e.target.value);
// }