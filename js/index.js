const menu = document.querySelector(".menuButton")
const layer = document.querySelector(".gnbAllLayer")
const xbutton = document.querySelector(".gnbLayerBt")
const nav = document.querySelector(".slide-menu")

menu.addEventListener('click',()=>{
    layer.style.display = "block"
    layer.style.display = "block"
})

xbutton.addEventListener('click',()=>{
    layer.style.display = "none"
})


const navBar = document.querySelectorAll(".nav-cate1")
// const nav = document.querySelector(".slide-menu")

navBar.addEventListener('click',() =>{
    nav.style.display = "block"
})