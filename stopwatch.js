/*
User Story
When I open the site I see a timer set at 0
When I click start, the timer begins (++)
When I click stop, the timer stops
When I click reset, the timer will reset back to 0 
*/

/*
What are the steps to creating a timer in JS?
1. Start by being able to increment the timer 
2. 
*/

/*
How do I think I can achieve this project?
-conditionals/loops such as if/else statements, for/while? 
-function
-getElementById().click ---click event?
    we would use the click event so when you click on a btn on the html page it will execute a function from the js file
-
*/
/*
var seconds = 00;
var min = 00;
var appendSeconds = document.getElementById('seconds')
var appendMinutes = document.getElementById('minutes')

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function startTimer() {
    seconds ++
    console.log(startTimer);
    if(seconds <= 9) {
        appendSeconds.innerHTML("0" + seconds)
        console.log(seconds)
    }
    if(seconds > 9) {
        appendSeconds.innerHTML(seconds);
    }
    if(seconds > 59) {
        seconds = 0; min = min++;
        appendMinutes.innerHTML("0" + min);
    }
    if(min > 9){
        appendMinutes.innerHTML(min);
    }
    
}


*/ 
var myInterval = setInterval(startTimer, 1000);
var appendSeconds = document.getElementById('seconds')
var appendMinutes = document.getElementById('minutes')
let seconds = 0;
let minutes = 0;

function startTimer() {
    appendSeconds.innerHTML = seconds;
    seconds++

    if(seconds <= 9) {
        appendSeconds.innerText = "0" + seconds;
    }
    /*
    if(seconds > 59) {
        seconds = 0; minutes = minutes;
        minutes++
    }*/
   console.log(appendSeconds)
}
    
    
function stopTimer() {
    clearInterval(myInterval);
}

function resetTimer() {

}

