
const display = document.querySelector('input[name="display"]');

document.addEventListener("keydown", function (e) {

    if (e.key >= '0' && e.key <= '9') {
        display.value += e.key;
    }

    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        display.value += e.key;
    }

    if (e.key === '.') {
        display.value += '.';
    }

    if (e.key === 'Enter') {
        try {
            display.value = Function('return ' + display.value)();
        } catch {
            display.value = 'Error';
        }
    }

    if (e.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }

    if (e.key === 'Escape') {
        display.value = '';
    }
})