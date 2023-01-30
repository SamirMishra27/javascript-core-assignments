let timeLeft = 0;           // In milliseconds
let timeDeadline = 0;  

let stopTimer = false;
let currentIntervalId = 0;

const countdownInput = document.getElementById("time-picker-box");
const startButton = document.getElementsByClassName("start-timer")[0];
const stopButton = document.getElementsByClassName("stop-timer")[0];
const resetButton = document.getElementsByClassName("reset-timer")[0];

const dayMark = document.getElementsByClassName("timer-category day")[0];
const hourMark = document.getElementsByClassName("timer-category hour")[0];
const minutesMark = document.getElementsByClassName("timer-category minute")[0];
const secondsMark = document.getElementsByClassName("timer-category second")[0];

function fmtWtZeros(number) {
    return number < 10 ? "0" + Math.floor(number) : Math.floor(number);
};

function updateTimer() {
    if (stopTimer) {
        // Do nothing
    }
    else {
        const currentTimeStamp = Date.now();      // In milliseconds
        timeLeft = timeDeadline - currentTimeStamp;

        if (timeLeft <= 0) {
            resetButton.click();
            alert("Countdown is over! 🎉🎉");
        }
    
        const daysLeft = timeLeft / 1000 / 60 / 60 / 24;
        const hoursLeft = (timeLeft / 1000 / 60 / 60) % 24;
        const minutesLeft = (timeLeft / 1000 / 60) % 60;
        const secondsLeft = (timeLeft / 1000) % 60;
    
        dayMark.children[0].textContent = fmtWtZeros(daysLeft);
        hourMark.children[0].textContent = fmtWtZeros(hoursLeft);
        minutesMark.children[0].textContent = fmtWtZeros(minutesLeft);
        secondsMark.children[0].textContent = fmtWtZeros(secondsLeft);
    }
};

function startTimer() {
    if (currentIntervalId) {return;}
    stopTimer = false;
    currentIntervalId = setInterval(updateTimer, 1000);
};

startButton.addEventListener("click", event => {
    timeDeadline = countdownInput.valueAsNumber;
    if (!timeDeadline)
        return alert("Enter a date & time first!");
    startTimer();
});

stopButton.addEventListener("click", event => {
    stopTimer = true;
});

resetButton.addEventListener("click", event => {
    timeLeft = 0;
    timeDeadline = 0;
    stopTimer = false;
    clearInterval(currentIntervalId);

    dayMark.children[0].textContent = "00";
    hourMark.children[0].textContent = "00";
    minutesMark.children[0].textContent = "00";
    secondsMark.children[0].textContent = "00";
});