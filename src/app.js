const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const h1 = document.querySelector("#h1")
const h2 = document.querySelector("#h2")
const h3 = document.querySelector("#h3")
const hlinks=document.querySelectorAll("#hlink")
const body=document.querySelector("body")
const moon=document.querySelector("#moon")


hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    h1.classList.toggle("bg-white")
    h2.classList.toggle("bg-white")
    h3.classList.toggle("bg-white")
})

hlinks.forEach(link=>{
    link.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    h1.classList.toggle("bg-white")
    h2.classList.toggle("bg-white")
    h3.classList.toggle("bg-white")
    
})
})


moon.addEventListener("click",()=>{
    body.classList.toggle("dark")
   
})