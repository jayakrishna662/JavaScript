const userInput = document.getElementById("userInput"); // Get the calculator display (input box) 
const buttons = document.querySelectorAll("button");   // Find all button elements

// Loop through every button one by one and add eventListener to them
buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);  // When this button is clicked, run handleButtonClick().
});

function handleButtonClick(event) { // event is event object that contains info about event happened

    const button = event.target;  // Get the button that the user clicked
    const value = button.value;  // Get the value of the clicked button
    const text = button.textContent; // Get the text displayed on the clicked button

    // If AC is clicked, clear the display and stop
    if (text === "AC") {
        clearDisplay();
        return;  // Without return, JS would continue executing the remaining code.
    }

    // If '=' is clicked, calculate the result and stop
    if (value === "=") {
        calculate();
        return;
    }

    // For all other buttons, add the value to the display
    appendValue(value);
}

// Reset the calculator display to 0
function clearDisplay() {
    userInput.value = "0";
}

// Add the clicked button's value to the calculator display
function appendValue(value) {

    if (userInput.value === "Error") { // If the display shows "Error", clear it before adding new input so that it doesnt become like this Eg: Error7
        userInput.value = "";
    }

    if (userInput.value === "0") { // Replace the initial 0 with the clicked value, so that it doesnt become like this Eg: 08
        userInput.value = value;
    } else {
        userInput.value += value; // Otherwise, add the clicked value to the end of the current display
    }
}

// Calculate and display the result of the current expression
function calculate() {

    try { // Evaluate the mathematical expression and show the result
        userInput.value = eval(userInput.value);
    } catch {
        userInput.value = "Error";
    }
}