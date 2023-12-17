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

const mail = document.querySelector("#inputEmail4")
const password = document.querySelector("#inputPassword4")
const signIn=document.querySelector(".signIn")
signIn.addEventListener('click',async()=>{
    let res = await fetch(`https://karla-data.onrender.com/users`)
    let products = await res.json()
    console.log(mail.value);
    for(let i =0 ; i < products.length ; i++)
    {
    if(products[i].mail== mail.value ){
        if(products[i].password == password.value)
            {
                location.href=("index.html")
                localStorage.setItem("loginButton","true")
                localStorage.setItem("mail",mail.value)
                break;
        }
        else
            error("password")
        break;
    }
}
})

function error(word){
    if(word=="mail"){
        document.querySelector("#inputEmail4").border="1px solid red"
        Swal.fire({
            icon: 'error',
            title: `Mail Erorr`,
            className:'sweetAlert',
        })}
        document.querySelector("#inputPassword4").border="1px solid red"
        if(word=="password"){
        Swal.fire({
            icon: 'error',
            title: `Password Erorr`,
            className:'sweetAlert',
        })}
}



