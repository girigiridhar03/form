const button = document.querySelector("button");
const text = document.querySelector("#text");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const nameError = document.querySelector("#name-error");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const btnError = document.querySelector(".btn-error");

text.onkeyup = function txt(){
   let textValue = text.value;

   if(textValue.length == 0){
       nameError.innerHTML = "Name is required";
       return false;
   }
   if(!textValue.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = "Write full name";
    return false;
   }
   nameError.innerHTML = "valid";
   nameError.style.color = "green"
   return true;
}
phone.onkeyup = function phn(){
   let phoneValue = phone.value;

   if(phoneValue.length == 0){
       phoneError.innerHTML = "Phone No is required";
       return false;
   }
   if(!phoneValue.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = "Phone No should be 10 digits";
    return false;
   }
   phoneError.innerHTML = "valid";
   phoneError.style.color = "green"
   return true;
}
email.onkeyup = function eml(){
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
password.onkeyup =function pass(){
    let passwordValue = password.value;

    if(passwordValue.length == 0){
        passwordError.innerHTML = "Password required";
    }
    
}
button.addEventListener("click",(e)=>{
    e.preventDefault();
   if(!text.value || !phone.value || !email.value || !password.value){
    btnError.style.display = "block"
    btnError.innerHTML = "Please fill the form!";
    setTimeout(() => {
        btnError.style.display = "none"  
    }, 2000);
    return false;
   }
   else{
      let formDetails = {
          fullname : text.value,
          phoneNo  : phone.value,
          email    : email.value,
          password : password.value,
      }
    createData(formDetails);
    window.location.href = "sign-in.html"
   }
})

const createData = async(details)=>{
    try {
        let res = await fetch(`http://localhost:8080/posts`,{
         method:"POST",
         body: JSON.stringify(details),
         headers:{
            "Content-Type":"Application/json"
         }
     }) 
    } catch (error) {
        console.log(error)
    }
}

const getData = async()=>{
     try {
        let res = await fetch(`http://localhost:8080/posts`,{
             method:"GET",
        })
        let data = await res.json();
        ids(data)
     } catch (error) {
        console.log(error)
     }
}

getData()


const ids = (id)=>{
  localStorage.setItem("det",JSON.stringify(id))
}