let cartNum = document.querySelector(".cardsNumber")
if(localStorage.getItem("card")){
    let num = localStorage.getItem("card")
    cartNum.innerHTML = num
}
else 
cartNum.innerHTML = 0

// user log or not

let productsCard = document.querySelector(".menProducts__block__item__cards");
let productsNum = document.querySelector(".menProducts__block__item__title");
let cardsNumber = document.querySelector(".cardsNumber")
async function getAllProducts(){
    let res = await fetch(`https://karla-data.onrender.com/products`)
    let products = await res.json();
    showProducts(products);
}

getAllProducts()


function showProducts(data){
    let filterPrice =document.querySelector(".filterPrice").value
    let showData = "";
    let num=0;
    data.forEach(element => {
        if(localStorage.getItem("shopCategory") == "shop")
        {
            if(element.price <= filterPrice)
            {
            num++;
            showData += `
                <div class="col-lg-4  col-sm-5  my-0 py-sm-0  px-lg-3 overflow-hidden menProducts__card position-relative" data-id = "${element.id}">
                                        <span class="px-3 bg-dark text-light menProducts__card__price position-absolute">${Math.trunc(element.price)} $</span>
                                        <div class = "itemContainer">
                                            <img src="${element.image}" class="w-100 itemImage rounded-2 img-fluid position-relative" style="height:60vh" alt="">
                                            <div class="position-absolute favouritAndView d-flex flex-column justify-content-between align-items-end gap-5">
                                                <i class="btn fs-2 border-0 p-0 text-uppercase text-light text-light fa-solid fa-cart-plus" onclick="addCarts(this)"></i>
                                                <i class="fa-solid fa-eye fs-4" onclick="showItem(${element.id})"></i>
                                                <i class="fa-regular fa-heart fs-4" onclick="addFavourite(${element.id})"></i>
                                            </div>
                                        </div>
                                    </div>
                `;
            }
        }
        else if(localStorage.getItem("shopCategory") == "men")
        {
            if(element.category == "men's clothing")
            {
                if(element.price <= filterPrice)
            {
            num++;
            showData += `
                <div class="col-md-4 col-sm-12 my-0 p-sm-0 px-md-3 overflow-hidden menProducts__card position-relative" data-id = "${element.id}">
                                        <span class="px-3 bg-dark text-light menProducts__card__price position-absolute">${Math.trunc(element.price)} $</span>
                                        <div class = "itemContainer">
                                            <img src="${element.image}" class="w-100 itemImage rounded-2 img-fluid position-relative" style="height:60vh" alt="">
                                            <div class="position-absolute favouritAndView d-flex flex-column justify-content-between align-items-end gap-5">
                                                <i class="btn fs-2 border-0 p-0 text-uppercase text-light text-light fa-solid fa-cart-plus" onclick="addCarts(this)"></i>
                                                <i class="fa-solid fa-eye fs-4" onclick="showItem(${element.id})"></i>
                                                <i class="fa-regular fa-heart fs-4" onclick="addFavourite(${element.id})"></i>
                                            </div>
                                        </div>
                                    </div>
                `;
            }
            }
        }

        else if(localStorage.getItem("shopCategory") == "women")
        {
            if(element.category == "women's clothing")
            {
                if(element.price <= filterPrice)
            {
            num++;
            showData += `
                <div class="col-md-4 col-sm-12 my-0 p-sm-0 px-md-3 overflow-hidden menProducts__card position-relative" data-id = "${element.id}">
                                        <span class="px-3 bg-dark text-light menProducts__card__price position-absolute">${Math.trunc(element.price)} $</span>
                                        <div class = "itemContainer">
                                            <img src="${element.image}" class="w-100 itemImage rounded-2 img-fluid position-relative" style="height:60vh" alt="">
                                            <div class="position-absolute favouritAndView d-flex flex-column justify-content-between align-items-end gap-5">
                                                <i class="btn fs-2 border-0 p-0 text-uppercase text-light text-light fa-solid fa-cart-plus" onclick="addCarts(this)"></i>
                                                <i class="fa-solid fa-eye fs-4" onclick="showItem(${element.id})"></i>
                                                <i class="fa-regular fa-heart fs-4" onclick="addFavourite(${element.id})"></i>
                                            </div>
                                        </div>
                                    </div>
                `;
            }
            }
        }

        else if(localStorage.getItem("shopCategory") == "kids")
        {
            if(element.category == "kids clothing")
            {
                if(element.price <= filterPrice)
            {
            num++;
            showData += `
                <div class="col-md-4 col-sm-12 my-0 p-sm-0 px-md-3 overflow-hidden menProducts__card position-relative" data-id = "${element.id}">
                                        <span class="px-3 bg-dark text-light menProducts__card__price position-absolute">${Math.trunc(element.price)} $</span>
                                        <div class = "itemContainer">
                                            <img src="${element.image}" class="w-100 itemImage rounded-2 img-fluid position-relative" style="height:60vh" alt="">
                                            <div class="position-absolute favouritAndView d-flex flex-column justify-content-between align-items-end gap-5">
                                                <i class="btn fs-2 border-0 p-0 text-uppercase text-light text-light fa-solid fa-cart-plus" onclick="addCarts(this)"></i>
                                                <i class="fa-solid fa-eye fs-4" onclick="showItem(${element.id})"></i>
                                                <i class="fa-regular fa-heart fs-4" onclick="addFavourite(${element.id})"></i>
                                            </div>
                                        </div>
                                    </div>
                `;
            }
            }
        }

        else if(localStorage.getItem("shopCategory") == "accessories")
        {
            if(element.category == "accessories")
            {
                if(element.price <= filterPrice)
            {
            num++;
            showData += `
                <div class="col-md-4 col-sm-12 my-0 p-sm-0 px-md-3 overflow-hidden menProducts__card position-relative" data-id = "${element.id}">
                                        <span class="px-3 bg-dark text-light menProducts__card__price position-absolute">${Math.trunc(element.price)} $</span>
                                        <div class = "itemContainer">
                                            <img src="${element.image}" class="w-100 itemImage rounded-2 img-fluid position-relative" style="height:60vh" alt="">
                                            <div class="position-absolute favouritAndView d-flex flex-column justify-content-between align-items-end gap-5">
                                                <i class="btn fs-2 border-0 p-0 text-uppercase text-light text-light fa-solid fa-cart-plus" onclick="addCarts(this)"></i>
                                                <i class="fa-solid fa-eye fs-4" onclick="showItem(${element.id})"></i>
                                                <i class="fa-regular fa-heart fs-4" onclick="addFavourite(${element.id})"></i>
                                            </div>
                                        </div>
                                    </div>
                `;
            }
            }
        }

        else
        {
            localStorage.setItem("shopCategory","shop")
            if(element.price <= filterPrice)
            {
            num++;
            showData += `
                <div class="col-md-4 col-sm-12 my-0 p-sm-0 px-md-3 overflow-hidden menProducts__card position-relative" data-id = "${element.id}">
                                        <span class="px-3 bg-dark text-light menProducts__card__price position-absolute">${Math.trunc(element.price)} $</span>
                                        <div class = "itemContainer">
                                            <img src="${element.image}" class="w-100 itemImage rounded-2 img-fluid position-relative" style="height:60vh" alt="">
                                            <div class="position-absolute favouritAndView d-flex flex-column justify-content-between align-items-end gap-5">
                                                <i class="btn fs-2 border-0 p-0 text-uppercase text-light text-light fa-solid fa-cart-plus" onclick="addCarts(this)"></i>
                                                <i class="fa-solid fa-eye fs-4" onclick="showItem(${element.id})"></i>
                                                <i class="fa-regular fa-heart fs-4" onclick="addFavourite(${element.id})"></i>
                                            </div>
                                        </div>
                                    </div>
                `;
            }
        }
        productsCard.innerHTML = showData;
        productsNum.textContent = `${num} Products`
    });
}




let small=false , large=false , meduim=false ;
async function getFilterProductsBySize() {
    if(small && large && meduim){
        let res = await fetch(`https://karla-data.onrender.com/products`)
        let products = await res.json();
        showProducts(products);
    }
    else if (small && large && meduim==false)
    {
        let res = await fetch(`https://karla-data.onrender.com/products?size=s&&size=l`)
        let products = await res.json();
        showProducts(products);
    }
    else if (small && meduim && large==false)
    {
        let res = await fetch(`https://karla-data.onrender.com/products?size=s&&size=m`)
        let products = await res.json();
        showProducts(products);
    }
    else if (small==false&&large&&meduim)
    {
        let res = await fetch(`https://karla-data.onrender.com/products?size=m&&size=l`)
        let products = await res.json();
        showProducts(products);
    }
    else if (small)
    {
        let res = await fetch(`https://karla-data.onrender.com/products?size=s`)
        let products = await res.json();
        showProducts(products);
    }
    else if (meduim)
    {
        let res = await fetch(`https://karla-data.onrender.com/products?size=m`)
        let products = await res.json();
        showProducts(products);
    }
    else if (large)
    {
        let res = await fetch(`https://karla-data.onrender.com/products?size=l`)
        let products = await res.json();
        showProducts(products);
    }
    else 
    {
        let res = await fetch(`https://karla-data.onrender.com/products`)
        let products = await res.json();
        showProducts(products);
    }
}
// Filter By Size Function
let sizeSmall = document.querySelector(".checkboxSmall")
let sizeMedium = document.querySelector(".checkboxMedium")
let sizeLarge = document.querySelector(".checkboxLarge")
let size = document.querySelectorAll(".checkbox")
let filterPrice =document.querySelector(".filterPrice")

sizeSmall.addEventListener('change',function(){
    if (this.checked) {
        small = true
        filter()
      } else {
        small = false
        filter()
}})
sizeMedium.addEventListener('change',function(){
    if (this.checked) {
        meduim = true
        filter()
      } else {
        meduim = false
        filter()
}})
sizeLarge.addEventListener('change',function(){
    if (this.checked) {
        large = true
        filter()
    } else {
        large = false
        filter()
}})

filterPrice.addEventListener("change",()=>{
    document.querySelector(".maximumPrice").innerHTML = document.querySelector(".filterPrice").value
    filter()
})



let cardtotal = 0;
function addCarts(x) {
    // check if item addded before or not
    id = x.parentElement.parentElement.parentElement.getAttribute("data-id")
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
// let navCard = document.querySelector(".navCard")
// navCard.addEventListener('click',()=> {
//     location.assign("#")
// })

function showItem(id) {
    localStorage.setItem("showItem",id)
    location.assign("show item.html")
}

// add to favourites
let favouriteNum= document.querySelector(".favouriteNum")
if(localStorage.getItem("favouriteNum")){
        let num = localStorage.getItem("favouriteNum")
        let totalNum=JSON.parse(num)
        favouriteNum.innerHTML = totalNum.length
    }
else 
    {
        favouriteNum.innerHTML = 0
    }
function addFavourite(x) {
    let str = [x]
    // check if item addded before or not
    if(localStorage.getItem("favouriteNum")){
        let retString = localStorage.getItem("favouriteNum")
        let retArray = JSON.parse(retString)
        console.log(retArray);
        if(![...retArray].includes(x))
        {
            let editstring = localStorage.getItem("favouriteNum")
            let editArray = JSON.parse(editstring)
            let editStr = [...editArray];
            editStr.push(x)
            localStorage.setItem("favouriteNum",JSON.stringify(editStr))
            addedSuccessfullyAlert();
            let num2 = localStorage.getItem("favouriteNum")
            let totalNum2=JSON.parse(num2)
            favouriteNum.innerHTML = totalNum2.length
        }
        else 
        {   
            addedBeforeAlert();
        }
    }
    else 
    {
        let string = JSON.stringify(str)
        localStorage.setItem("favouriteNum",string)
        addedSuccessfullyAlert();
        let num3 = localStorage.getItem("favouriteNum")
        let totalNum3=JSON.parse(num3)
        favouriteNum.innerHTML = totalNum3.length
    }
}




let preload = document.querySelector("#preload")
window.addEventListener("load",()=> {
    preload.style.display = "none";
    
})


let shopCategory = document.querySelector(".shopCategory")
shopCategory.addEventListener('click',()=> {
    localStorage.setItem("shopCategory","shop")
    location.assign("shop.html")
})

function filter(){
    let menProducts__filter__card=document.querySelector(".menProducts__filter__card")
    menProducts__filter__card.addEventListener("change",()=>{
        getFilterProductsBySize()
    })
}

let filterResponsive = document.querySelector(".filterResponsive")
filterResponsive.addEventListener('click',()=>{
    let menProducts__filter = document.querySelector(".menProducts__filter")
    if(!filterResponsive.classList.contains("active")){
    // menProducts__filter.style.setProperty("right", "10%");
    menProducts__filter.style.visibility = "visible"
    filterResponsive.classList.add("active");
    filterResponsive.innerHTML=`
    <i class="fa-solid fa-circle-arrow-right fs-2 btn filterResponsive"></i>
    `
    console.log(true);
    }
    else if(filterResponsive.classList.contains("active")){
        menProducts__filter.style.visibility = "hidden"
        filterResponsive.classList.remove("active");
        filterResponsive.innerHTML=`
            <i class="fa-solid fa-circle-arrow-left fs-2 btn filterResponsive position-fixed"></i>
                `
        console.log(false);
    }
})


// search
let search = document.querySelector(".fa-magnifying-glass")
let searchBar = document.querySelector(".searchBar")
let searchBarIcon = document.querySelector(".searchBar i")
let searchBarBlock = document.querySelector(".searchBarBlock input")
search.addEventListener('click',()=>{
    searchBar.style.top = "90px"
})


searchBarIcon.addEventListener('click',()=>{
    searchBar.style.top = "-50%"
    searchfunction()
})

async function searchfunction() {
    let res = await fetch(`https://karla-data.onrender.com/products?title=${searchBarBlock.value}`)
    let products = await res.json();
    showProducts(products);
}


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
    let res = await fetch(`https://karla-data.onrender.com/users/?mail=${mail}`)
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
    let res = await fetch(`https://karla-data.onrender.com/users/?mail=${mail}`)
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