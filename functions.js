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


// return formated string
function format(hour, min, sec)  {
    return hour+"h" + " " + min+"m" + " " + sec+"s";
}

// create formatted time blocks
let timeFormat = function(arr) {
    if (arr.length === 3 ) {
        let hour = arr[2];
        let min = arr[1];
        let sec = arr[0];
        return format(hour, min, sec);
    } else if (arr.length == 2) {
        let hour = 00;
        let min = arr[1];
        let sec = arr[0];
        return format(hour, min, sec);
    } else if (arr.length == 1) {
        let hour = 00;
        let min = 00;
        let sec = arr[0];
        return format(hour, min, sec);
    } else {
        // return format(0, 0, 0);
        return "0s";
    }
}

