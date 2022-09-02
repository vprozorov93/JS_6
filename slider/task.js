const sliderPrevButton = document.querySelector('.slider__arrow_prev')
const sliderNextButton = document.querySelector('.slider__arrow_next')

const imgArray = Array.from(document.querySelectorAll('.slider__item'))
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'))
let activeImg = document.querySelector('.slider__item_active')
let activeDot = document.querySelector('.slider__dot_active')

sliderNextButton.onclick = ()  => {
    const activeImgIndex = imgArray.indexOf(activeImg)
    imgArray[activeImgIndex].className = 'slider__item'
    sliderDots[activeImgIndex].className = 'slider__dot'
    if (imgArray.length-1 == activeImgIndex) {
        imgArray[0].className = 'slider__item slider__item_active'
        sliderDots[0].className = 'slider__dot slider__dot_active'
        activeImg = imgArray[0]
    } else {
        imgArray[activeImgIndex+1].className = 'slider__item slider__item_active'
        sliderDots[activeImgIndex+1].className = 'slider__dot slider__dot_active'
        activeImg = imgArray[activeImgIndex+1]
    }
}

sliderPrevButton.onclick = ()  => {
    const activeImgIndex = imgArray.indexOf(activeImg)
    imgArray[activeImgIndex].className = 'slider__item'
    sliderDots[activeImgIndex].className = 'slider__dot'
    if (activeImgIndex == 0) {
        imgArray[imgArray.length-1].className = 'slider__item slider__item_active'
        sliderDots[imgArray.length-1].className = 'slider__dot slider__dot_active'
        activeImg = imgArray[imgArray.length-1]
    } else {
        imgArray[activeImgIndex-1].className = 'slider__item slider__item_active'
        sliderDots[activeImgIndex-1].className = 'slider__dot slider__dot_active'
        activeImg = imgArray[activeImgIndex-1]
    }
}

sliderDots.forEach((element)=>{
    element.onclick = () => {
        const activeDotIndex = sliderDots.indexOf(activeDot)
        const clickedDotIndex = sliderDots.indexOf(element)

        sliderDots[activeDotIndex].className = 'slider__dot'
        sliderDots[clickedDotIndex].className = 'slider__dot slider__dot_active'
        activeDot = element

        imgArray[activeDotIndex].className = 'slider__item'
        imgArray[clickedDotIndex].className = 'slider__item slider__item_active'
    }
})