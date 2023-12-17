

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

const name = document.querySelector("#inputName")
const mail = document.querySelector("#inputEmail4")
const password = document.querySelector("#inputPassword4")
const signUp=document.querySelector(".signUp")
const signIn=document.querySelector(".signIn")


// sign in click
signIn.addEventListener("click",(e)=>{
    e.preventDefault();
    location.assign("login.html")
})


// sign up click
signUp.addEventListener("click",(e)=>{
    e.preventDefault();
    validateForm(name,mail,password)
    console.log(mail.value.endsWith(".com"));
})




function validateForm(name,mail,password) {
    const mailFormat =  /\S+@\S+\.\S+/;
    if(name.value == "" || mail.value=="" ||password.value=="")
        errorValidation()
    else if(!mail.value.match(mailFormat)||password.value.length<8)
        errorValidation()
    else
        checkMailAndName(name,mail,password);
}
function asignLocation(){
    location.assign("login.html")
}

async function checkMailAndName(name,mail,password) {
    let res = await fetch(`https://karla-data.onrender.com/users`)
    let products = await res.json();
    let chk = true

    for(let i =0 ; i< products.length ; i++)
        if(products[i].mail == mail.value || products[i].name == name.value)
            {
                chk = false
                break;
            }
    if( chk == true)
        {    
            fetch('https://karla-data.onrender.com/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "id": products.length+1,
                    "name": name.value,
                    "mail": mail.value,
                    "password": password.value,
                    "type": "user"
                /* other post data */
            })
        }
        )
            changeLocation()
        
    }
        else {
        Swal.fire({
            icon: 'error',
            title: `Info Already Added`,
            className:'sweetAlert',
        })}
}


// wrong data
function errorValidation(){
    const mailFormat =  /\S+@\S+\.\S+/;
    if(name.value=="" && mail.value=="" && password.value==""){
        document.querySelector("#inputName").style.border="1px solid red"
        document.querySelector("#inputEmail4").style.border="1px solid red"
        document.querySelector("#inputPassword4").style.border="1px solid red"
    }
    else if(name.value=="" && mail.value==""){
        document.querySelector("#inputEmail4").style.border="1px solid red"
        document.querySelector("#inputName").style.border="1px solid red"
        document.querySelector("#inputPassword4").style.border="none"
    }
    else if(name.value=="" && password.value==""){
        document.querySelector("#inputName").style.border="1px solid red"
        document.querySelector("#inputPassword4").style.border="1px solid red"
        document.querySelector("#inputEmail4").style.border="none"
    }
    else if(mail.value=="" && password.value==""){
        document.querySelector("#inputEmail4").style.border="1px solid red"
        document.querySelector("#inputPassword4").style.border="1px solid red"
        document.querySelector("#inputName").style.border="none"
    }
    else if(mail.value==""){
        document.querySelector("#inputEmail4").style.border="1px solid red"
        document.querySelector("#inputName").style.border="none"
        document.querySelector("#inputPassword4").style.border="none"
    }
    else if(name.value==""){
        document.querySelector("#inputName").style.border="1px solid red"
        document.querySelector("#inputEmail4").style.border="none"
        document.querySelector("#inputPassword4").style.border="none"
    }
    else if(password.value==""){
        document.querySelector("#inputPassword4").style.border="1px solid red"
        document.querySelector("#inputEmail4").style.border="none"
        document.querySelector("#inputName").style.border="none"
    }

    else if(!mail.value.match(mailFormat))
    {
        document.querySelector("#inputEmail4").style.border="1px solid red"
        document.querySelector("#inputName").style.border="none"
        document.querySelector("#inputPassword4").style.border="none"
        mailerror("mail")
    }

    else if(password.value.length<8)
    {
        document.querySelector("#inputPassword4").style.border="1px solid red"
        document.querySelector("#inputName").style.border="none"
        document.querySelector("#inputEmail4").style.border="none"
        mailerror("password")
    }

}

function mailerror(word){
    if(word=="mail"){
    Swal.fire({
        icon: 'error',
        title: `Mail Erorr`,
        className:'sweetAlert',
    })}
    if(word=="password"){
    Swal.fire({
        icon: 'error',
        title: `Password Erorr`,
        className:'sweetAlert',
    })}
}

function changeLocation(){
        location.assign("login.html")
}


