let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

 function deleteLast() {
        display.value = display.value.slice(0, -1);
    }
function percent() {
    try {
        display.value = eval(display.value) / 100;
    } catch {
        display.value = 'Error';
    }
}

