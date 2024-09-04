const display = document.querySelector('.display');
function append(numb) {
    display.value += numb;
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const container = document.querySelector('.calculator');

function toggleMode() {
    const toggleButton = document.querySelector('.toggle-btn');
    const isLightMode = toggleButton.classList.toggle('active');
    container.style.backgroundColor = isLightMode ? '#fff' : '#22202f';
    display.style.color = isLightMode ? '#111' : '#fff';

    numbers.forEach(button => {
        button.style.backgroundColor = isLightMode ? '#f1f1f1' : '#444';
        button.style.color = isLightMode ? '#111' : '#fff';
    });

    operators.forEach(button => {
        button.style.backgroundColor = isLightMode ? '#ddd' : '#555';
        button.style.color = isLightMode ? '#111' : '#fff';
    });

    const equalButton = document.querySelector('.equal');
    equalButton.style.backgroundColor = isLightMode ? '#4caf50' : '#ff9800';
    equalButton.style.color = isLightMode ? '#fff' : '#111';
}
