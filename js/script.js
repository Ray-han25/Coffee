AOS.init({
  duration: 1000,
  delay: 300,
  once: false
});
$('.feedback_silder').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow :'  <button class="prvaaarr sameButton"> <i class="fa-solid fa-arrow-left"></i></button>',
  nextArrow:'<button class="nextaaarr sameButton"> <i class="fa-solid fa-arrow-right"></i></button>'

});
// ----------------------all dom
const popDiv= document.querySelector('.sing_singuP')
const Sing_up= document.querySelector('.Sing_up')
const Login= document.querySelector('.Login')
// ----------------------useName----------------------------------
const UseName =document.querySelector('.Use_name')
const Email =document.querySelector('.Email')
const password =document.querySelector('.password')
const confirmPassword =document.querySelector('.Confirm_password')
// _---------------------------------------------------------all input -here singup input here
const useN=document.querySelector('.useN')
const emailN=document.querySelector('.emailN')
const passwordN=document.querySelector('.passwordN')
const confirmN=document.querySelector('.confirmN')
// ------------------------------------------------------------------------------
// ----------------------------login-input here----------------------------------------------
const longu=document.querySelector('.longu')
const logPass=document.querySelector('.logPass')
 
// ------------------login-all div here
const logingUsediv=document.querySelector('.loging_usediv')
const logPassDiv=document.querySelector('.logPassDiv')




// ---------------------------Login-------------------------------------
const hendelbutton1=()=>{  
 popDiv.style.display='flex'
 Sing_up.style.display='none'
 Login.style.display='block'
 document.body.style.overflow='hidden'
}
// ----------------------------------singup---------------------------
const hendelbutton2=()=>{
 popDiv.style.display='flex'
 Login.style.display='none'
 Sing_up.style.display='block'
 document.body.style.overflow='hidden'
}

// --------------Login t0 singup and singup to login
const hendelbutton3=()=>{
 Login.style.display='none'
 Sing_up.style.display='block'
}
const hendelbutton4=()=>{
 Sing_up.style.display='none'
 Login.style.display='block'
}

// ---------------------hendelsing up--------------------------
const hendelSign=(event)=>{
 event.preventDefault()
if(UseName.value=='') useN.classList.add('same_input')
if(Email.value=='')emailN.classList.add('same_input')
if(password.value=='') passwordN.classList.add('same_input')
if(confirmPassword.value=='')  confirmN.classList.add('same_input')
if(password.value!==confirmPassword.value) return confirmN.classList.add('same_input') 
if (UseName.value=='' ||Email.value=='' ) {
  useN.classList.add('same_input')
  emailN.classList.add('same_input')
  confirmN.classList.add('same_input') 
  passwordN.classList.add('same_input')
  return
 }

  const url ='https://api.freeapi.app/api/v1/users/register';
fetch(url,  {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
   body: JSON.stringify({
    email: Email.value ,
    password:password.value,
    role: 'ADMIN',
    username: UseName.value
  })



})
.then((res)=>{
  if(!res.ok){
    throw new Error(res.statusText)
  }
else{
  return res.json()
}
})
.then((date)=>{
  console.log(date.message)
  Toastify({
  text: date.message,
  duration: 3000,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
}).showToast();
})
 .catch((err)=>{
  console.log(err.message)
   Toastify({
  text: err.message,
  duration: 3000,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  style: {
    background: "red",
  },
}).showToast();
 })
}
// -------------------------add evanlesenar-------------------------
emailN.addEventListener('input',()=>{
  emailN.classList.remove('same_input')
})
useN.addEventListener('input',()=>{
  useN.classList.remove('same_input')
})
passwordN.addEventListener('input',()=>{
  passwordN.classList.remove('same_input')
})
confirmN.addEventListener('input',()=>{
  confirmN.classList.remove('same_input')
})
// --------------------------hendelLogin

const hendelLogin=(event)=>{
event.preventDefault()
if(longu.value=='') logingUsediv.classList.add('same_input')
if(logPass.value=='') logPassDiv.classList.add('same_input')
   if (longu.value === '' || logPass.value === '') {
     return;
   }
const urlLog='https://api.freeapi.app/api/v1/users/login'
fetch( urlLog ,{
   method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
   body: JSON.stringify({
    password: logPass.value ,
    username: longu.value
  })
})
.then(res=>{
  if(!res.ok){
    throw new Error(res.statusText)
  }
  else{
    return res.json();
  }
})
.then((date)=>{
   console.log(date.message)
   Toastify({
  text: date.message,
  duration: 3000,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  style: {
    background: "green",
  },
}).showToast();
 window.location.href = 'index.html';
})
.catch((err)=>{
    console.log(err.message)
   Toastify({
  text: err.message,
  duration: 3000,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  style: {
    background: "red",
  },
}).showToast();
})



}

// const hendelLogin = (event) => {
//   event.preventDefault();

//   if (longu.value === '') {
//     logingUsediv.classList.add('same_input');
//   }

//   if (logPass.value === '') {
//     logPassDiv.classList.add('same_input');
//   }

//   // কোনো input খালি থাকলে এখানেই থেমে যাবে
//  

//   const urlLog = 'https://api.freeapi.app/api/v1/users/login';

//   fetch(urlLog, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       username: longu.value,
//       password: logPass.value
//     })
//   })
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error('Login failed');
//       }

//       return res.json();
//     })
//     .then((data) => {
//       console.log(data.message);
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };
logingUsediv.addEventListener('input',()=>{
  logingUsediv.classList.remove('same_input')
})
logPassDiv.addEventListener('input',()=>{
  logPassDiv.classList.remove('same_input')
})