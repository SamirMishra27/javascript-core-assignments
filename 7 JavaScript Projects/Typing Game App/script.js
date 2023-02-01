const typingBox = document.querySelector(".typing-box");
const wpmInfo = document.querySelector(".wpm-info");
const toggleButton = document.querySelector(".start-stop-button");
const timerWindow = document.querySelector(".timer");

let started = false;
let startTime = 0;
let currWord = "";
let typedTextSoFar = [];
let timerTask = undefined;
let WPM = 0;
let highestWPM = 0;

function fmtWtZeros(number) {
    return number < 10 ? "0" + Math.floor(number) : Math.floor(number);
};

function incrementTimer() {
    const elapsedTime = Date.now() - startTime;
    const elapsedMinutes = (elapsedTime / 1000 / 60) % 60;
    const elapsedSeconds = (elapsedTime / 1000) % 60;
    timerWindow.textContent = `${fmtWtZeros(elapsedMinutes)} : ${fmtWtZeros(elapsedSeconds)}`;
};

function stopTypingSession(event) {
    toggleButton.textContent = "START";
    wpmInfo.textContent = "00 WPM";
    timerWindow.textContent = "00 : 00";
    
    started = false;
    typedTextSoFar = "";
    startTime = 0;

    clearInterval(timerTask);
    alert(`Your Final WPM: ${WPM} \nYour highest WPM: ${highestWPM}`);
};

function startTypingSession(event) {
    started = true
    startTime = Date.now();

    toggleButton.textContent = "STOP";
    timerTask = setInterval(incrementTimer, 1000);
    typingBox.focus();
};

toggleButton.addEventListener("click", event => {
    if (started) {
        stopTypingSession(event);
    }
    else if (!started) {
        startTypingSession(event);
    };
});

typingBox.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        toggleButton.click();
    };
    
    if ( 
        (event.key === "v" && event.ctrlKey) || 
        (event.key === "Backspace") ||
        (event.key === "Delete")
    ) {
        // Do nothing
    };

    if (started) {
        if (event.code === "Space" || event.code === "Enter") {
            if (!currWord) {
                // Do nothing
            }
            else {
                console.log(2222222)
                typedTextSoFar.push(currWord);
                currWord = "";
            };
        } else {
            console.log(111111)
            currWord += typingBox.value.slice(-1);
        }

        const elapsedTime = (Date.now() - startTime) / 1000 / 60;
        WPM = Math.round(typedTextSoFar.length / elapsedTime);

        wpmInfo.textContent = `${WPM} WPM`;
        if (WPM >= highestWPM) {
            highestWPM = WPM;
        };
    };
});