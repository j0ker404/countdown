// functions

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

// return the number of digits
function numDigits(num) {
    let digits = 0;
    while (num > 0) {
    num = Math.round(num / 10);
    digits++;
    }
    // console.log(digits);
    return digits;
}

// splits a number into array parts 
function updateTime(num) {
    // console.log('test');
    let temp = 0;
    let n = num;
    arr = [];

    while (n > 0) {
    temp = n % 100;
    arr.push(temp);
    n = Math.floor(n / 100);
    }
    // console.log(`arr:${arr}`);
    // console.log(arr);
    return arr;
}