export const objModal = {

    wrapper: document.querySelector(".modal-wrapper"),
    messageResult: document.querySelector(".span"),
    btnClose: document.querySelector(".close"),


    open() {
        objModal.wrapper.classList.add('open')
    },
    close() {
        objModal.wrapper.classList.remove('open')
    }
}

objModal.btnClose.onclick = () => {
    // modal.classList.remove('open')
 
    objModal.close()
 }

 //SO ACEITA UM POR APP
//window.onkeydown = handlekeydown
//function handlekeydown() {}

 window.addEventListener('keydown', event => {

    if (event.key == 'Escape') {
        objModal.close()
    }

 })