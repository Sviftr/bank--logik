


let eMail = document.querySelector(".form__email");
let pAssword = document.querySelector(".form__pas");
let bUtton = document.querySelector(".form__btn");
let cHeckbox = document.querySelector(".form__checked");

eMail.addEventListener("input", function () {
  let emailValue = eMail.value;

  if (emailValue.length > 5 && emailValue.includes("@") && emailValue.includes(".")) 
    {
      eMail.classList.add("active");
      eMail.classList.remove("deactive");
    } 

    else if (emailValue.length === 0) {
      eMail.classList.remove("deactive");
      eMail.classList.remove("active");
    } 

    else {
      eMail.classList.remove("active");
      eMail.classList.add("deactive");
    }
});

pAssword.addEventListener("input", function () {
  let passwordValue = pAssword.value;
  let passwordFirstChar = passwordValue[0];

  if (passwordValue.length > 8 && passwordFirstChar === passwordFirstChar.toUpperCase()) 
    {
      pAssword.classList.remove("deactive");
      pAssword.classList.add("active");

    } 
    else if (passwordValue.length === 0) {
      pAssword.classList.remove("deactive");
      pAssword.classList.remove("active");
    } 

    else {
      pAssword.classList.remove("active");
      pAssword.classList.add("deactive");
    }
});


// let numBer = document.querySelector('.form__phone') 

// numBer.addEventListener('input' , function(){
//   let numberValue = numBer.value

//   if(numberValue.length < 12 && numberValue.includes('+')) {
//     numBer.classList.remove('active')
//     numBer.classList.add('deactive')
//   }
//   else if(numberValue.length === 0){
//     numBer.classList.remove("deactive");
//     numBer.classList.remove("active");
//   }
//   else {
//     numBer.classList.remove("active");
//     numBer.classList.add("deactive");
//   }

// })