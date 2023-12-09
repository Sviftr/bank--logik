


bUtton.addEventListener("click", function () {
  let eMail = document.querySelector(".form__email");
  let pAssword = document.querySelector(".form__pas");
  let cHeckbox = document.querySelector(".form__checked");
  let naMe = document.querySelector('.form__name')
  let ascNumber = document.querySelector('.form__phone')

  let emailValue = eMail.value;
  let passwordValue = pAssword.value;
  let nameValue = naMe.value
  let newNumberValue = ascNumber.value
  

  

  if(emailValue.length < 5 && !emailValue.includes("@") && !emailValue.includes(".")) {
    let modal1 = document.querySelector('.form__modal-1')
    modal1.classList.add('new')
    setTimeout(function(){
      modal1.classList.remove('new')
    }, 4000);
    return;
  }
  else if(passwordValue.length < 7){
    let modal2 = document.querySelector('.form__modal-2')
    modal2.classList.add('new')
    setTimeout(function(){
      modal2.classList.remove('new')
    }, 4000);
    return;
  }
  else if(nameValue.length === 0){
    let modal3 = document.querySelector('.form__modal-3')
    modal3.classList.add('new')
    setTimeout(function(){
      modal3.classList.remove('new')
    }, 4000);
    return;
  }
  else if(newNumberValue.length !== 12 && !newNumberValue.includes('+')) {
    let modal4 = document.querySelector('.form__modal-4')
    modal4.classList.add('new')
    setTimeout(function(){
      modal4.classList.remove('new')
    }, 4000);
    return;
  }
  else if(!cHeckbox.checked){
    let modal5 = document.querySelector('.form__modal-5')
    modal5.classList.add('new')
    setTimeout(function(){
      modal5.classList.remove('new')
    }, 4000);
    return;
  }
  else {
    sessionStorage.setItem('nameValue' , nameValue)
    window.location.href = './bank.html'
  }

});










