const sliderPrevButton = document.querySelector('.slider__arrow_prev')
const sliderNextButton = document.querySelector('.slider__arrow_next')
const imgArray = Array.from(document.querySelectorAll('.slider__item'))
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'))

function changeImg(event) {
    const activeElementIndex = sliderDots.indexOf(document.querySelector('.slider__dot_active'))
    function executeChange(clickedElementIndex, activeElementIndex){
        imgArray[clickedElementIndex].classList.add('slider__item_active')
        imgArray[activeElementIndex].classList.remove('slider__item_active')
        sliderDots[clickedElementIndex].classList.add('slider__dot_active')
        sliderDots[activeElementIndex].classList.remove('slider__dot_active')
    }
    
    if (Array.from(event.currentTarget.classList).includes("slider__dot")) {
        let clickedElementIndex = sliderDots.indexOf(event.currentTarget)
        executeChange(clickedElementIndex, activeElementIndex)
    } 

    if (Array.from(event.currentTarget.classList).includes("slider__arrow_next")) {
        let clickedElementIndex = activeElementIndex+1
        if (clickedElementIndex > sliderDots.length-1) {
            clickedElementIndex = 0
        }
        executeChange(clickedElementIndex, activeElementIndex)
    }

    if (Array.from(event.currentTarget.classList).includes("slider__arrow_prev")) {
        let clickedElementIndex = activeElementIndex-1
        if (clickedElementIndex < 0) {
            clickedElementIndex = sliderDots.length-1
        }
        executeChange(clickedElementIndex, activeElementIndex)
    }
}   

sliderNextButton.addEventListener('click', changeImg)
sliderPrevButton.addEventListener('click', changeImg)
sliderDots.forEach((element)=>{
    element.addEventListener('click', changeImg)
})
