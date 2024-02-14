const button = document.querySelector("button");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const btnError = document.querySelector(".btn-error");
const signIn = JSON.parse(localStorage.getItem("det"))
const login = document.querySelector(".login");

email.onkeyup = function(){
    let emailValue = email.value;
 
    if(emailValue.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!emailValue.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
     emailError.innerHTML = "Email Invalid";
     return false;
    }
    emailError.innerHTML = "valid";
    emailError.style.color = "green"
    return true;
 }
 password.onkeyup =function(){
     let passwordValue = password.value;
 
     if(passwordValue.length == 0){
         passwordError.innerHTML = "Password required";
     }
     
 }

    button.addEventListener("click",()=>{
        if(!email.value || !password.value){
            btnError.style.display = "block"
        btnError.innerHTML = "Please fill the form!";
        setTimeout(() => {
            btnError.style.display = "none"  
        }, 2000);
        return false;
        }
        for(let i=0;i<signIn.length;i++){
            if(email.value == signIn[i].email && password.value == signIn[i].password){
               login.style.display = "block";
               email.value = "";
               password.value = "";
               setTimeout(() => {
                login.style.display = "none";
              }, 2000);
                break;
            }
            else{
             login.style.display = "block"
              login.innerHTML = "Invalid Email or Password";
              login.style.color = 'red';
              email.value = "";
              password.value = "";
              setTimeout(() => {
                login.style.display = "none";
              }, 2000);
            
            }
       }
    })

