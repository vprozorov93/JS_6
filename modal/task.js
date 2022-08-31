const modal = document.getElementById('modal_main')
const modalSuccess = document.getElementById('modal_success')

modal.className = "modal modal_active"

const buttonGood = document.querySelector('.btn_danger')
buttonGood.onclick = () => {
    modal.className = "modal"
    modalSuccess.className = "modal modal_active"
}

const buttonSuccess = document.querySelector('.btn_success')
buttonSuccess.onclick = () => {
    modal.className = "modal modal_active"
    modalSuccess.className = "modal"
}

const modal_close = Array.from(document.querySelectorAll('.modal__close_times'))
modal_close.forEach((element) => {
    element.onclick = () => {
        element.parentElement.className = "modal"
    }
})
