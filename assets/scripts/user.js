let cartNum = document.querySelector(".cardsNumber")
let favouriteNum= document.querySelector(".favouriteNum")
if(localStorage.getItem("favouriteNum")){
        let num = localStorage.getItem("favouriteNum")
        let totalNum=JSON.parse(num)
        favouriteNum.innerHTML = totalNum.length
    }
else 
    favouriteNum.innerHTML = 0


    if(localStorage.getItem("card")){
        let num = localStorage.getItem("card")
        cartNum.innerHTML = num
    }
else 
cartNum.innerHTML = 0

let buttons = document.querySelectorAll(".sideBar .btn")
let content = document.querySelectorAll(".content div")
console.log(content);
buttons.forEach((e,index)=>{
    e.addEventListener('click',()=>{
        content.forEach(el=>{
            el.classList.remove("show")
            el.classList.add("hidden")
        })
        content[index].classList.remove("hidden")
        content[index].classList.add("show")
        content[index].style.border = "1px solid white"
    })
})


