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
    // time = updateTime(currVal);
    // console.log(time);
    // console.log(timeFormat(time));
    // e.target.value = timeFormat(time);
}


// callback function for input that also formats input
function updateInputWithFormat(e) {

    // get cursor starting position
    let position = e.target.selectionStart;
    // console.log(`pos: ${position}`);
    
    let txt = e.target.value;
    // extract numbers from input
    let numb = txt.match(/\d/g);
    try {
        // try to parse numb as number
        numb = Math.floor(Number(numb.join("")));
        currVal = numb;
        // set max limit on time inputted
        if (currVal <= 995959) {
            prevVal = currVal;
        } else {
            currVal = prevVal;
            e.target.value = currVal;
        }
    } catch {
        numb = undefined;
        e.target.value = prevVal;
        currVal = e.target.value;
    }
    currVal = Math.floor(currVal);
    // console.log(`numb=${numb}`);
    
    // get the time split into blocks(sec,min,hour)
    time = updateTimeFormat(currVal);
    // console.log('--------------');
    // console.log(`currVal=${currVal}`);
    // console.log(`time=${time}`);
    // console.log(`time2num=${time2num(time)}`);
    // console.log(`time_cov=${updateTimeFormat(time2num(time))}`);
    // console.log('--------------');
    // display the formated time as the user types
    // 00h 00m 00s
    // set the formatted time as value of input
    e.target.value = timeFormat(time);

    // TODO: cursor position
    e.selectionEnd = position;
    e.selectionStart = position;

}

// update format of time after input lost focus
function updateFormat(e) {
    // console.log('updateFormat starting');
    // format time
    format(time);
    e.target.value = timeFormat(time);
}


function startStopHandler(e) {
    // console.log('startStopHandler');
    // console.log(`time=${time}`);
    // console.log(`time2num=${time2num(time)}`);
    // determin btn state
    if (!startStop[1]) {
        // stop state
        timeStop(startStop);
        // update btn lable
        updateStartStopBtnLabel(startStop);
    } else {
        // start state
        if (time2num(time) > 0) {
            updateTime(input, currVal, prevVal, time, startStop);
            // update btn lable
            updateStartStopBtnLabel(startStop);
        }
    }
}

// restart countdown back to 0
function restartHandler(e) {
    // console.log('restart Handler');
    timeStop(startStop);
    prevVal = 0;
    currVal = 0;
    time = [0,0,0];
    input.value = timeFormat(time);
    updateStartStopBtnLabel(startStop);
}