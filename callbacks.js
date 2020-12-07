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
        if (currVal < 1000000) {
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
    // console.log(`currVal=${currVal}`);

    // get the time split into blocks(sec,min,hour)
    time = updateTime(currVal);
    // console.log(time);
    // console.log(timeFormat(time));
    
    // display the formated time as the user types
    // 00h 00m 00s
    // set the formatted time as value of input
    e.target.value = timeFormat(time);

    // TODO: cursor position
    e.selectionEnd = position;
    e.selectionStart = position;

}

// debug function-update format of time
function updateFormat(e) {
    console.log('updateFormat starting');
    time = updateTime(currVal);
    console.log(`currVal=${currVal}`);
    console.log(`time=${time}`);
    // console.log(timeFormat(time));
    // e.target.value = timeFormat(time);
    formatResults.innerHTML = timeFormat(time);
    e.target.value = timeFormat(time);
    // console.log();
}