/*
User Story
When I open the site I see a timer set at 0
When I click start, the timer begins (++)
When I click stop, the timer stops
When I click reset, the timer will reset back to 0 
*/


let myInterval;
let appendSeconds = document.getElementById('seconds')
let appendMinutes = document.getElementById('minutes')
let stopBtn = document.getElementById('stop');
let startTime = 0;

// start by setting the timer to 0 and applying the date.now time method
function startTimer() {
    if(startTime === 0) {
        startTime = Date.now();
    }
    myInterval = setInterval(calculateTime, 1000);
}

// subtract time you started at with the current time to get your seconds and minutes
function calculateTime() {
    const currentTime = Date.now();
    const timeElapsed = (currentTime - startTime) / 1000;
    let seconds = Math.floor(timeElapsed % 60);
    const minutes = Math.floor(timeElapsed / 60);
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;

// if statement is used to place a 0 in front of single digits and to convert seconds into minutes
    if(seconds <= 9) {
        appendSeconds.innerHTML = "0" + seconds;
    }
    if(seconds > 9) {
        seconds = seconds;
    }
    if(seconds > 59){
        seconds = 0; appendMinutes.innerHTML = minutes;
        minutes++
    }
    if(minutes <= 9) {
        appendMinutes.innerHTML = "0" + minutes;
    }
}
       
function stopTimer() {
    clearInterval(myInterval);
    
    
}

function resetTimer() {
    clearInterval(myInterval);
    seconds = "00";
    minutes = "00";
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    startTime = 0
}

/* Issues I need to fix
- how to get real time to stop when you hit stop button vs having it paused on html but still       counting in js
- when you press reset you can see it goes back to "00". Need to figure out how to go back to zero in js because once you press start it continues when it left off at(well supposed to leave off at).
*/