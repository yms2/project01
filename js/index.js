const menu = document.querySelector(".menuButton")
const layer = document.querySelector(".gnbAllLayer")
const xbutton = document.querySelector(".gnbLayerBt")

menu.addEventListener('click',()=>{
    layer.style.display = "block"
    layer.style.transform = "translate3d(-100%,0,0);"
})

xbutton.addEventListener('click',()=>{
    layer.style.display = "none"
})

const slideList =document.querySelector(".noticeBn")
const slideCont = document.querySelectorAll(".swiper-slide")
const contLen = slideCont.length;

slideList.style.height = `${130 * (contLen + 1)}px`