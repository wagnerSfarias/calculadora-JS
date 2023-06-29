const btn = document.querySelectorAll('button')
const display = document.querySelector('.display')


for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {

        if (display.value.length > 10) {
            display.scrollLeft += 30
        }

        this.style.border = 'none'

        setTimeout(() => {
            this.style.borderBottom = '3px solid #9f9797'
        }, 200)
    })
}

function insertCaracter(number) {
    const valueInput = document.querySelector(".display").value
    const lastCaracter = valueInput.slice(-1)

    if (isNaN(lastCaracter) && number == '.') {
        document.querySelector(".display").value = valueInput + '0.'
        return
    }

    document.querySelector(".display").value = valueInput + number
}

function operation(op) {
    const valueInput = document.querySelector(".display").value
    let result = 0

    if (!valueInput) {
        document.querySelector(".display").value = 0 + op
        return
    } else {
        const lastCaracter = valueInput.slice(-1)
        if (isNaN(lastCaracter)) {
            document.querySelector(".display").value = valueInput.slice(0, -1) + op
            return
        }
        result = eval(valueInput)
        document.querySelector(".display").value = result + op
    }
}

function clearDisplay() {
    document.querySelector(".display").value = ""
}

function calculate() {
    const valueInput = document.querySelector(".display").value

    const lastCaracter = valueInput.slice(-1)

    if (isNaN(lastCaracter) || !valueInput) return

    document.querySelector(".display").value = eval(valueInput)
}

function invertValue() {
    const valueInput = document.querySelector(".display").value

    if (isNaN(valueInput)) return

    else {
        document.querySelector(".display").value = valueInput * -1
    }

}