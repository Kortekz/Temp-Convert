// Temperature Conversion

// Formula: (°C × 9/5) + 32 = °F

let display = document.querySelector('[data-fara]')
let btn = document.querySelector('[data-btn]')
btn.addEventListener('click', convert)

function convert(){
    let temp = parseFloat(document.querySelector('[data-cel]').value)
    let calc = (temp * 9/5) + 32

    display.value = calc

}
