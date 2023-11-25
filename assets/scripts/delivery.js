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
totalItems.innerHTML =  localStorage.getItem("itemsNumber") + "PCS"




