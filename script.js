const inpResult = document.querySelector('.result') // inpResult плохое название. Лучше просто input.

let counter = '';
function press(num) {
    counter += num // а почему ; не ставишь?)
    inpResult.value = counter
}

function equal() {
    inpResult.value = eval(counter) // eval лучше не использовать. В интернете прочитай. Не рекомендуют.
}

function forKeyboard() { // название не говорящие. Лучше countUp
    inpResult.value = eval(inpResult.value)
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        forKeyboard();
    }
})

function reset() {
    inpResult.value = ''
    counter = ''
}
