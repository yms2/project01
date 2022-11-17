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