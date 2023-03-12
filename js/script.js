import { objModal } from './modal.js'
import { AlertError } from './alert.js'
import { notNumber, calculateIMC  } from './utils.js'


const form = document.querySelector("form")
const inputWeight = document.querySelector("#getWeight")
const inputHeight = document.querySelector("#getHeight")

inputWeight.addEventListener("input", AlertError.close);
inputHeight.addEventListener("input", AlertError.close);

form.onsubmit = function(event) {
   
    event.preventDefault()
   

    const weight = inputWeight.value
    const height = inputHeight.value

   
    if(notNumber(weight) || notNumber(height)) {
        AlertError.open()
        return;
    }

    AlertError.close()
    
    const result = calculateIMC(weight, height)
    showResultMessage(result)
}

function showResultMessage(result) {
    const message = `Seu imc é ${result}`

    objModal.messageResult.innerHTML = message
    objModal.open()    
}