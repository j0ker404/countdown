
class InputState {

    constructor(input) {
        this.input = input;
        this.currVal = this.input.innerHTML;
        this.prevVal = 0;

        this.input.addEventListener('input', this.update);
    }

    update(e) {
        // console.log(e.target.value);
        this.currVal = e.target.value;
        
        // check if input is a number 
        if (isNaN(this.currVal)) {
            e.target.value = this.prevVal; 
        } else {
            this.prevVal = this.currVal;
        }
        // from this point this.currVal is always a number
        // console.log(this.currVal);
        console.log(this.input);
    }
}


let input = document.querySelector('input');
let inputState = new InputState(input);

// input.addEventListener('input',update);

// function update(e) {
//     console.log(e.target.value);
// }