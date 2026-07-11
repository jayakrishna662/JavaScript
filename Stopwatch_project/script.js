const timeDisplay = document.getElementById("time");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timer = null; // timer stores interval id returned by startInterval(), initially it is null because No interval exists yet.

// Start button
startBtn.addEventListener("click", start);

// Stop button
stopBtn.addEventListener("click", stop);

// Reset button
resetBtn.addEventListener("click", reset);

function start() {

    // Prevent multiple intervals (for eg: clicking start button multiple times even stopwatch is running)
    if (timer !== null) return;

    // current time when start is clicked
    startTime = Date.now();

    // Every 10 ms, we calculate how much time has passed since the stopwatch started, and then update the display with that new value.
    timer = setInterval(() => {

        // calculate how much time has passed since stopwatch is started
        elapsedTime = Date.now() - startTime;

        // Show formatted time on display
        timeDisplay.textContent = formatTime(elapsedTime);

    }, 10);

}

function stop() {

    clearInterval(timer); // Stop interval with current timer
    timer = null; // reset timer to null

}

function reset() {

    clearInterval(timer);
    timer = null;

    startTime = 0;
    elapsedTime = 0;

    timeDisplay.textContent = "00:00:00:00";

}

function formatTime(ms) {

    // Divide by 3600000 and remove the decimal part.
    // Since 1 hour = 3600000 milliseconds.
    const hours = Math.floor(ms / 3600000);

    // Remove complete hours, then divide by 60000.
    // Since 1 minute = 60000 milliseconds.
    const minutes = Math.floor((ms % 3600000) / 60000);

    // Remove complete minutes, then divide by 1000.
    // Since 1 second = 1000 milliseconds.
    const seconds = Math.floor((ms % 60000) / 1000);

    // Calculate remaining hundredths of a second ( because we display milliseconds in 00 format like 45ms not 450ms)
    const milliseconds = Math.floor((ms % 1000) / 10);

    return (
        String(hours).padStart(2, "0") + ":" +   // Make this string at least 2 characters long. If it's shorter, add "0" at the beginning. 
        String(minutes).padStart(2, "0") + ":" + // bcz, we show 01 hours not 1 hours in display, same for others also
        String(seconds).padStart(2, "0") + ":" +
        String(milliseconds).padStart(2, "0")
    );

}