const sliderPrevButton = document.querySelector('.slider__arrow_prev')
const sliderNextButton = document.querySelector('.slider__arrow_next')

const imgArray = Array.from(document.querySelectorAll('.slider__item'))
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'))
let activeIMG = document.querySelectorAll('.slider__item_active')[0]


sliderNextButton.onclick = ()  => {
    activeImgIndex = imgArray.indexOf(activeIMG)
    imgArray[activeImgIndex].className = 'slider__item'
    sliderDots[activeImgIndex].className = 'slider__dot'
    if (imgArray.length-1 == activeImgIndex) {
        imgArray[0].className = 'slider__item slider__item_active'
        sliderDots[0].className = 'slider__dot slider__dot_active'
        activeIMG = imgArray[0]
    } else {
        imgArray[activeImgIndex+1].className = 'slider__item slider__item_active'
        sliderDots[activeImgIndex+1].className = 'slider__dot slider__dot_active'
        activeIMG = imgArray[activeImgIndex+1]
    }
}

sliderPrevButton.onclick = ()  => {
    activeImgIndex = imgArray.indexOf(activeIMG)
    imgArray[activeImgIndex].className = 'slider__item'
    sliderDots[activeImgIndex].className = 'slider__dot'
    if (activeImgIndex == 0) {
        imgArray[imgArray.length-1].className = 'slider__item slider__item_active'
        sliderDots[imgArray.length-1].className = 'slider__dot slider__dot_active'
        activeIMG = imgArray[imgArray.length-1]
    } else {
        imgArray[activeImgIndex-1].className = 'slider__item slider__item_active'
        sliderDots[activeImgIndex-1].className = 'slider__dot slider__dot_active'
        activeIMG = imgArray[activeImgIndex-1]
    }
}