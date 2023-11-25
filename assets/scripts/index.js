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


let shopCategory = document.querySelectorAll(".shopCategory")
shopCategory.forEach((e)=>{
    e.addEventListener('click',()=> {
        let category = e.getAttribute("data-bs-target")
        localStorage.setItem("shopCategory",category)
        location.assign("shop.html")
    })
})

let loginButton = document.querySelector(".loginButton")
console.log(loginButton);
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



const observe = new IntersectionObserver((e)=>{
    e.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else 
            entry.target.classList.remove("show")
    })
})


let hidden = document.querySelectorAll(".hidden")
hidden.forEach(e=>observe.observe(e))

