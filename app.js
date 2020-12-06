function numDigits(num) {
    let digits = 0;
    while(num > 0 ) {
        num = Math.round(num / 10);
        digits++;
    }
    // console.log(digits);
    return digits;   
} 

class InputState {

    constructor(input) {
        this.input = input;
        // this.currVal = this.input.innerHTML;
        this.currVal = 0;
        this.prevVal = 0;
        this.numDigit = 0;
        this.input.addEventListener('input', this.updateInput);
    }
    
    updateInput(e) {
        // console.log(e.target.value);
        // this.currVal = e.target.value;
        
        // check if input is a number 
        // if (isNaN(this.currVal)) {
        //     e.target.value = this.prevVal; 
        //     if (e.target.value > 999999) {
        //         e.target.value = 999999;
        //         console.log('hit');
        //     }
        //     this.currVal = e.target.value;
        // } else {
        //     console.log('yo mama');
        //     this.prevVal = this.currVal;
        //     if (this.prevVal > 999999) {
        //         this.prevVal = 999999;
        //         e.target.value = 999999
        //     }
        // }

        this.currVal = e.target.value;
        // if (isNaN(this.currVal)) {
        //     e.target.value = this.prevVal; 
        //     console.log('hit');
        //     this.currVal = e.target.value;
        // } else {
        //     console.log('yo mama');
        //     this.prevVal = this.currVal;
        // }

        if (!isNaN(this.currVal)) {
            // console.log('yo mama');
            if (this.currVal < 1000000) {
                this.prevVal = this.currVal;
            } else {
                this.currVal = this.prevVal;
                e.target.value = this.currVal;
            }
        } else {
            e.target.value = this.prevVal;
            this.currVal = e.target.value;
        }

        // if (this.numDigit < 6) {
        //     this.currVal = e.target.value;
        //     if (!isNaN(this.currVal)) {
        //         console.log('yo mama');
        //         this.prevVal = this.currVal;
        //     }
        // } else {
        //     e.target.value = this.prevVal;
        // }
        // from this point this.currVal is always a number
        console.log(this.currVal);
        this.numDigit = numDigits(this.currVal);
        console.log(`numDigits:${this.numDigit}`); 
        // 00h 00m 00s
        
    }

}


let input = document.querySelector('input');
let inputState = new InputState(input);

// input.addEventListener('input',update);

// function update(e) {
//     console.log(e.target.value);
// }