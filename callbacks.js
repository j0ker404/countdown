// callback function for input
function updateInput(e) {
    // console.log(`temp:${temp}`);
    currVal = e.target.value;

    if (!isNaN(currVal)) {
        if (currVal < 1000000) {
            prevVal = currVal;
        } else {
            currVal = prevVal;
            e.target.value = currVal;
        }
    } else {
        // console.log("butrh");
        // console.log(`prevVal:${prevVal}`);
        e.target.value = prevVal;
        currVal = e.target.value;
    }

    // from this point currVal is always a number
    currVal = Math.floor(currVal);
    e.target.value = currVal;
    console.log(currVal);
    numDigit = numDigits(currVal);
    // console.log(`numDigits:${this.numDigit}`);
    // 00h 00m 00s
    time = updateTime(currVal);
    console.log(time);
}