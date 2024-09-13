const max_value = 8220.00;
const rate_per_second = max_value / (24 * 3600);

let counterValue = 0;
let display = document.getElementById('counter-display');
let input = document.getElementById('initial-value-input');
let startButton = document.getElementById('start-button');
let appContainer = document.querySelector('.app-container');

function startCounter() {
    let initialInput = parseFloat(input.value);
    if (isNaN(initialInput) || initialInput < 0 || initialInput > max_value) {
        alert("Please enter a value between 0.00 and 8220.00.");
        return;
    }
    counterValue = initialInput;
    input.style.display = 'none';
    startButton.style.display = 'none';

    updateDisplay();
}

function updateDisplay() {
    if (counterValue <= max_value) {
        counterValue += rate_per_second * 0.1;
        display.textContent = `${counterValue.toFixed(2)} kg`;
        setTimeout(updateDisplay, 100);
    } else {
        counterValue = max_value;
        display.textContent = `${counterValue.toFixed(2)} kg`;
    }
}

function resizeFont() {
    const fontSize = Math.max(appContainer.clientWidth / 10, 20);
    display.style.fontSize = `${fontSize}px`;
}

const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        resizeFont();
    }
});

resizeObserver.observe(appContainer);
window.addEventListener('load', resizeFont);
