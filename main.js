const sliderImageItem = [...document.querySelectorAll('.slider-image__item')]
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
const slider = document.querySelector('.slider')
console.log(sliderImageItem);
let i = 0;

btnNext.addEventListener('click',function(){
    sliderImageItem[i].style.display = 'none'
    i++;
    if (i >= sliderImageItem.length) {
        i = 0
    }
    sliderImageItem[i].style.display = 'block'
})
btnPrev.addEventListener('click',function(){
    sliderImageItem[i].style.display = 'none'
    i--
    console.log(i);
    if (i < 0) {
        i = sliderImageItem.length - 1
    }
    sliderImageItem[i].style.display = 'block'
})

function nextSlider() {
    sliderImageItem[i].style.display = 'none'
    i++
    if (i >=sliderImageItem.length) {
        i = 0
    }
    sliderImageItem[i].style.display = 'block'
}
let stopFunc = setInterval(nextSlider,500)
function stop() {
    clearInterval(stopFunc)
}
function start() {
    return stopFunc = setInterval(nextSlider,500)
}
slider.addEventListener('mouseover',function(){
    stop()
})
slider.addEventListener('mouseout',function(){
    start()
})