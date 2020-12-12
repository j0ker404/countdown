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
function updateTimeFormat(num) {
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
    while (arr.length < 3) {
        arr.push(0);
    }
    // console.log(arr);
    // arr = 00s 00m 00h
    return arr;
}


// return formated string
function formatString(hour, min, sec)  {
    return hour+"h" + " " + min+"m" + " " + sec+"s";
}

// format time values in simplest form
// mutates array paramater
function format(arr) {
    let hour = arr[2];
    let min = arr[1];
    let sec = arr[0];
    
    let temp = 0;

    // basically time math that simplifies 
    // the time value in each block[sec,min,hour]
    temp = Math.floor(sec/60); 
    sec = Math.floor(sec%60);

    min += temp;

    temp = Math.floor(min/60);
    min = Math.floor(min%60);

    hour += temp;

    arr[0] = sec;
    arr[1] = min;
    arr[2] = hour;

    // return [sec,min,hour];
}

// create formatted time blocks
let timeFormat = function(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });

    if (sum != 0 ) {
        let hour = arr[2];
        let min = arr[1];
        let sec = arr[0];
        return formatString(hour, min, sec);
    // } else if (arr.length == 2) {
    //     let hour = 00;
    //     let min = arr[1];
    //     let sec = arr[0];
    //     return formatString(hour, min, sec);
    // } else if (arr.length == 1) {
    //     let hour = 00;
    //     let min = 00;
    //     let sec = arr[0];
    //     return formatString(hour, min, sec);
    } else {
        arr = [0,0,0];
        return "0s";
    }
}


function updateTime(input, cur, prev, time,startStop) {
    // input.value=Math.floor(Math.random()*10);
    // update time every 1s(1000ms)
    startStop[2]=setInterval(()=> {
        console.log(time);
        sec = time[0]
        min = time[1]
        hour = time[2]
        
        // subtract one second
        sec -= 1;
        // update time accordingly
        if (hour > 0) {
            if (sec === -1) {
                sec = 59;
                min -= 1; 
            }
    
            if (min === -1) {
                min = 59;
                hour -= 1;
            }
    
            if (hour === -1) {
                hour = 0;
            }
        } 
        else {
            if (min > 0) {
                if (sec === -1) {
                    sec = 59;
                    min -= 1; 
                }
        
                if (min === -1) {
                    min = 0;
                }  
            }
            else {
                if (sec === -1) {
                    sec = 0;
                }
            }
        }
        
        time[0] = sec;
        time[1] = min;
        time[2] = hour;

        prev = cur;
        cur = time2num(time);

        // input.value=Math.floor(Math.random()*10);
        // update time on counter with formated time
        input.value=timeFormat(time);

        if (time2num(time)===0) {
            // startStop[1] = !startStop[1];
            // timeStop(input, startStop);
            timeStop(startStop);
            updateStartStopBtnLabel(startStop);
        }
    },1000);
}

// converts time array: AAs BBm CCh to number: AABBCC  
function time2num(time) {
    stack = new Stack();

    let temp = "";
    time.forEach(el => {
        stack.push(el);
        // temp = temp + el + "";
    });
    while (stack.getSize() !=0) {
        temp += stack.pop();
    }
    // console.log(`temp=${temp}`);
    let num = Number(temp);
    return num;
}

// stop timer count down
function timeStop(startStop) {
    clearInterval(startStop[2]);
    // input.value = "stopped";
}

// update start/stop btn label
function updateStartStopBtnLabel(startStop) {
    startStop[1] ? startStop[0].innerHTML="stop": startStop[0].innerHTML="start";
    startStop[1] = !startStop[1];
}