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

let cardtotal = 0;
function addCarts(x) {
    // check if item addded before or not
    id = x.parentElement.parentElement.getAttribute("data-id")
    if(!localStorage.getItem(id))
    {
        localStorage.setItem(id , id)
        if(localStorage.getItem("card"))
        {
            cardtotal = localStorage.getItem("card");
        }
        cardtotal++;
        localStorage.setItem( "card" , cardtotal )
        cardsNumber.innerHTML = localStorage.getItem("card")
        addedSuccessfullyAlert();
    }
    else 
    {
        addedBeforeAlert();
    }
}

function addedBeforeAlert(){
    Swal.fire({
        icon: 'error',
        title: 'ITEM ADDED BEFORE',
        className:'sweetAlert',
    })
}

function addedSuccessfullyAlert(){
    Swal.fire({
        icon: 'success',
        title: 'ITEM ADDED SUCCESSFULLY',
        className:'sweetAlert',
    })
}

// show POPUp Carts

// part 2
let cartItems = document.querySelector(".cartItems")
getproducts()

async function getproducts() {
    let res = await fetch('http://localhost:3000/products')
    let products = await res.json();
    getIdsFromLocalstorage(products);
}

// get ids from localstorage 
function getIdsFromLocalstorage(products) {
    let data = ""
    let arr = [...products]
    arr.forEach((e)=>{
        if(e.id == localStorage.getItem(e.id))
            data+= `
                <div class = "my-3 rounded-1  position-relative mx-0">
                    <div class=" p-1 ms-0 me-2 row cartItems__card align-items-start ">
                        <div class="cartItems__left d-flex flex-column p-1 justify-content-start align-items-center col-3">
                            <img src="${e.image}" alt="" class="rounded-2 img-fluid">
                        </div>
                        <div class="cartItems__right col-7 ">
                            <p class="fs-5 my-2 fw-bold"> Size : <span class="text-uppercase text-primary">${e.size}</span</p>
                            <p class="w-25 px-0 bg-primary rounded-2 text-white text-center fs-4 price">${e.price}$</p>
                            <i class="btn fa-solid fa-trash text-danger" onclick = "removeFromCarts(${e.id})"></i>
                            <div class = "quantity d-flex align-items-center gap-2 py-2">
                                <i class="fa-solid fa-minus btn btn-primary" onclick = "quantityMinus(this)"></i>
                                <input type="number" class = "text-center priceValue rounded-2" value = "1">
                                <i class="fa-solid fa-plus btn btn-primary fs-6" onclick = "quantityPlus(this)"></i>
                                <span class="mx-5 p-1 text-light fs-6  fw-bold text-center bg-dark rounded-2 quantity__totalPrice position-absolute end-0">${e.price} $</span>
                            </div>
                        </div>
                    </div>
                </div>
                `
        else if(cartNum.innerHTML == 0){
            removeAll.style.display = "none"
            setTimeout(()=>{
                Swal.fire({
                    showConfirmButton:false,
                    title: '<strong>No ITEMS In Cart</strong>',
                    icon: 'error',
                    html:
                        '<a href="shop.html" class = "btn btn-primary" onclick = "alertProp()">Shop NOW</a> ',
                })
            },1000)
        }
    document.querySelector(".cartItems").innerHTML = data;
    })
}

function alertProp(){
    localStorage.setItem("shopCategory","shop")
}

function removeFromCarts(id) {
    let cardsNumber = document.querySelector(".cardsNumber")
    localStorage.removeItem(id)
    if(localStorage.getItem("card") > 0)
    {
        let cards = localStorage.getItem("card")
        --cards;
        localStorage.setItem("card",cards)
        Swal.fire({
            icon: 'success',
            title: 'ITEM Removed SUCCESSFULLY',
        })  
    }
    getproducts()
    cardsNumber.innerHTML = localStorage.getItem("card")
    setTimeout(() => {
        totalPrice()
        localStorage.setItem("promo",0)
    }, 500);
}

function quantityPlus(th){
    let totPrice = th.parentElement.childNodes[7]
    let prevSibling = th.previousElementSibling;
    let value = prevSibling.getAttribute("value")
    value ++ ;
    prevSibling.setAttribute("value",value)
    totPrice.innerHTML = value * parseInt(th.parentElement.parentElement.childNodes[2].innerHTML) + " $"
    totalPrice()
    localStorage.setItem("promo",0)
}
function quantityMinus(th){
    let totPrice = th.parentElement.childNodes[7]
    const originalValue = parseInt(th.parentElement.parentElement.childNodes[2].innerHTML)
    let nextSibling = th.nextElementSibling;
    let value = nextSibling.getAttribute("value")
    if(value > 0) {
        value --;
        nextSibling.setAttribute("value",value)
        totPrice.innerHTML = value * originalValue + " $"
        localStorage.setItem("promo",0)
    }   
    totalPrice()
    console.log(totalPrice());
}

let  giftVideo = document.querySelector(".giftVideo")
let applyButton = document.querySelector(".applyButton")
let promoCode = document.querySelector(".promoCode")
localStorage.setItem("promo",0)
applyButton.addEventListener('click',()=>{
    if(promoCode.value == "eraasoft419" && localStorage.getItem("promo")==0 && localStorage.getItem("card")>0)
    {
        // setTimeout(() => {
        //     giftVideo.style.display = "block";
        // }, 500);
        // setTimeout(() => {
        //     giftVideo.style.display = "none";
        // }, 3000);
        let canvas = document.createElement("canvas");
        canvas.width = 1000;
        canvas.height = 1000;
        applyButton.appendChild(canvas);
        let confetti_button = confetti.create(canvas);
        confetti_button().then(() => container.removeChild(canvas));
        localStorage.setItem("promo",1)
        sale()
    }
    else if(promoCode.value != "eraasoft419")
        {
            Swal.fire({
                title: '<strong>This Is not Promo Code</strong>',
                icon: 'error',
            })
        }
    else if (localStorage.getItem("promo")!=0 && localStorage.getItem("promo")==1)
        {
            Swal.fire({
                title: '<strong>Already Used Before</strong>',
                icon: 'error',
            })
        }
    else 
    {
        Swal.fire({
            title: '<strong>No Items In Cart</strong>',
            icon: 'error',
        })
    }
})


let cartSummary__totalPrice__value =document.querySelector(".cartSummary__totalPrice__value")
function sale(){
    let x = Math.trunc(.8 * parseInt(cartSummary__totalPrice__value.innerHTML))
    cartSummary__totalPrice__value.innerHTML = Math.trunc(.8 * parseInt(cartSummary__totalPrice__value.innerHTML))+"$"
    console.log(cartSummary__totalPrice__value.innerHTML)
    localStorage.setItem("totalPrice",x)
}



// remove All Items From Cart
let removeAll = document.querySelector(".removeAll")
removeAll.addEventListener('click',async()=> {
    localStorage.setItem("card",0)
    let res = await fetch('http://localhost:3000/products')
    let products = await res.json();
    for(let i =1 ; i <= [...products].length ;i++)
        localStorage.removeItem(i)
    setTimeout(() => {
        cartNum.innerHTML = localStorage.getItem("card")
        document.querySelector(".cartItems").innerHTML = "";
        removeAll.style.display = "none"
        getproducts()
        totalPrice()
    }, 1000);
})


let preload = document.querySelector(".preload")
window.addEventListener("load",()=> {
    preload.style.display = "none";
})


function totalPrice() {
    let tp = document.querySelector(".cartSummary__totalPrice__value")
    if(document.querySelectorAll(".quantity__totalPrice"))
        {
            let total = 0
            let totalItems = 0
            document.querySelectorAll(".quantity__totalPrice").forEach((e)=>{
                total += parseInt(e.innerHTML)
            })
            document.querySelectorAll(".priceValue").forEach((e)=>{
                totalItems += parseInt(e.value)
            })
            localStorage.setItem("totalPrice", total)
            total= total + "$"
            tp.innerHTML = total
            localStorage.setItem("itemsNumber",totalItems)
        }
    else if(document.querySelector(".quantity__totalPrice"))
        {
            tp.innerHTML= parseInt(document.querySelector(".quantity__totalPrice").value)+"$"
            totalItems = parseInt(document.querySelectorAll(".priceValue").value)
            localStorage.setItem("itemsNumber",totalItems)
            localStorage.setItem("totalPrice", parseInt(document.querySelector(".quantity__totalPrice").value))
        }
    else 
        {
            tp.innerHTML = 0 +"$";
            totalItems = 0
            localStorage.setItem("itemsNumber",totalItems)
            localStorage.setItem("totalPrice", 0)
        }
}

setTimeout(() => {
    totalPrice()
}, 500);


let cartSummary__nextStep__btn = document.querySelector(".cartSummary__nextStep__btn")
cartSummary__nextStep__btn.addEventListener('click',()=>{
    console.log(cartSummary__nextStep__btn);
    if(localStorage.getItem("loginButton")=="true")
    {
        if(localStorage.getItem("totalPrice") > 0 )
            location.assign("../../delivery.html")
    }
    else 
    {
        location.assign("login.html")
    }
})


let filterResponsive = document.querySelector(".filterResponsive")
filterResponsive.addEventListener('click',()=>{
    let cartSummary = document.querySelector(".cartSummary")
    if(!filterResponsive.classList.contains("active")){
        cartSummary.style.setProperty("right", "10%");
        filterResponsive.classList.add("active");
        cartSummary.style.visibility = "visible"
        filterResponsive.innerHTML=`
        <i class="fa-solid fa-circle-arrow-right fs-2 btn"></i>
        `
        console.log(true);
    }
    else if(filterResponsive.classList.contains("active")){
        cartSummary.style.setProperty("right", "-500%");
        filterResponsive.classList.remove("active");
        filterResponsive.innerHTML=`
            <i class="fa-solid fa-circle-arrow-left fs-2 btn"></i>
                `
        console.log(false);
    }
})

// add to favourite



let loginButton = document.querySelector(".loginButton")
loginButton.addEventListener('click',()=>{
    if(localStorage.getItem("loginButton")=="true")
    {
        if(localStorage.getItem("admin")=="true"){
            //go to dashboard Admin
            console.log("in admin page");
        }
        else {
            // go to user page
            showUserData();
        }
    }
    else
        location.assign("login.html")
})


let userData = document.querySelector(".userData")
function showUserData(){
    console.log(userData);
    if(!userData.classList.contains("active")){
        userData.classList.add("active")
        userData.style.visibility = "visible"
        userInfo()
    }
    else if(userData.classList.contains("active"))
    {
        userData.classList.remove("active")
        userData.style.visibility = "hidden"
        console.log(userData);
    }
}


async function profilePage(){
    let mail = localStorage.getItem("mail")
    let res = await fetch(`http://localhost:3000/users/?mail=${mail}`)
    let products = await res.json()
    checkAdmin(products);
}

function checkAdmin(products){
    if(products[0].type == "user")
        location.assign("user.html")
    else if(products[0].type == "admin")
        location.assign("admin.html")
}

async function userInfo(){
    let mail = localStorage.getItem("mail")
    let res = await fetch(`http://localhost:3000/users/?mail=${mail}`)
    let products = await res.json()
    userData.innerHTML = `
    <h3 class="text-light text-uppercase fw-bold text-center userTitle align-self-center">${products[0].name}</h3>
    <div class="form-check form-switch ">
        <label class="form-check-label fw-bold text-uppercase text-light text-center" for="flexSwitchCheckChecked">Notifications</label>
        <input class="form-check-input text-light bg-dark" type="checkbox" id="flexSwitchCheckChecked" checked>
    </div>
    <div class="form-check form-switch">
        <input class="form-check-input text-light bg-dark align-self-start" type="checkbox" id="flexSwitchCheckChecked" checked>
        <label class="form-check-label fw-bold text-uppercase text-light text-center" for="flexSwitchCheckChecked">sync</label>
    </div>
    <div class="form-check form-switch ">
        <input class="form-check-input text-light bg-dark align-self-start" type="checkbox" id="flexSwitchCheckChecked" checked>
        <label class="form-check-label fw-bold text-uppercase text-light text-center" for="flexSwitchCheckChecked">recommendition</label>
    </div>
    <a class="fw-bold btn btn-dark align-self-center" onclick="profilePage()">My Profile</a>
    <a class="fw-bold btn btn-danger logout align-self-center" onclick="logout()">Log Out</a>
    `
}

function logout(){
    localStorage.setItem("loginButton","false")
    localStorage.clear()
    location.assign("login.html")
}