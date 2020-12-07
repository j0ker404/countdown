// functions


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