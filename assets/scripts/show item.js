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
let navCard = document.querySelector(".navCard")
navCard.addEventListener('click',()=> {
    location.assign("cart.html")
})


// show item butoons to slide
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

let slide = document.querySelector("#slide")
let showItem = localStorage.getItem("showItem")
async function getAllProducts(){
    let res = await fetch(`http://localhost:3000/products?id=${showItem}`)
    let products = await res.json();
    showProducts(products);
}

function showProducts(data){
    let showData = "";
    let arr = []
    data.forEach(element => {
        arr = element.images
        arr.forEach(el=>{
            console.log(el)
            console.log(element.price)
            showData += `
                    <div class="item" style="background-image: url(${el});">
                        <div class="content text-center">
                            <div class="name text-uppercase"><span class="text-uppercase text-primary">${element.title}</span></div>
                            <div class="des text-center fs-5">${element.description}</div>
                            <div class="d-flex justify-content-center gap-2" >
                                <p class="w-25 text-center text-light bg-dark rounded-2">Price : ${Math.trunc(element.price)}$</p>
                                <p class="w-25 text-center text-light bg-dark rounded-2 ">Rating : ${element.rating.rate}</p>
                            </div class = "rounded-2">
                            <a class="btn btn-primary text-uppercase text-capitalize mx-auto text-center p-2 w-50 rounded-3" onclick="addCarts(${element.id})">Add To Cart</a>
                        </div>
                    </div>
        `;
        })
        slide.innerHTML = showData;
    });
}

getAllProducts()


document.querySelector(".cardsNumber").innerHTML = localStorage.getItem("card")
function addCarts(id) {
    // check if item addded before or not
    if(!localStorage.getItem(id))
    {
        localStorage.setItem(id , id)
        if(localStorage.getItem("card"))
        {
            cardtotal = localStorage.getItem("card");
        }
        cardtotal++;
        localStorage.setItem( "card" , cardtotal )
        document.querySelector(".cardsNumber").innerHTML = localStorage.getItem("card")
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