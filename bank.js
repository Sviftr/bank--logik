let formBtn = document.querySelector('.int__button')

//CV

let btnCV = document.querySelector('.btn__CV') 

let cardCV = document.querySelector('.card__CV')

btnCV.addEventListener('click' , function(){
    let randomCV = Math.floor(Math.random() * 900) + 100
    cardCV.textContent = `CV ${randomCV}`
})




//CARD OWNER / FIRST NAME

let nameOwner = document.querySelector('.card__owner')

let askOwner = document.querySelector('.int__name')


askOwner.addEventListener('input' , function(){
    let newTextName = askOwner.value
    nameOwner.textContent = newTextName

})


//CARD OWNER / SURE NAME


let surName = document.querySelector('.card__sur-name')

let askSurName = document.querySelector('.int__surName')


askSurName.addEventListener('input' , function(){
    let newTextSurName = askSurName.value
    surName.textContent = newTextSurName
})


//CARD DATA

let  nameData = document.querySelector('.card__data')

let askData = document.querySelector('.int__data')

askData.addEventListener('change' , function(){
    let newData = askData.value
    let partsData = newData.split('-')
    if(partsData.length === 3) {
        let yearData = partsData[0]
        let monthData = partsData[1]
        let dayData = partsData[2]
        nameData.textContent = `${monthData}/${yearData}`
    }
})


//MODAL


let intBtn = document.querySelector('.int__button')

let modBlok = document.querySelector('.modal__blok')


intBtn.addEventListener('click' , function(){
    if(modBlok.className === 'modal__blok') {
        modBlok.style.display = 'block'
    }

    else {
        modBlok.style.display = 'none'
    }
})


//MODAL CLODSE BTN


let modBtn = document.querySelector('.modal__btn')

modBtn.addEventListener('click' , function(){
    if(modBlok.className === 'modal__blok') {
        modBlok.classList.add('close')
    }
    else {
        modBlok.classList.remove('close')
    }
})

//MODAL ANIMATION

intBtn.addEventListener('click' , function(){
    if(modBlok.className === 'modal__blok') {
        modBlok.classList.add('modActive')
    }
    else {
        modBlok.classList.remove('mpdActive')
    }
})


//CARD NUMBER

let cardNamber = document.querySelector('.card__number')

let numbBtn = document.querySelector('.btn__namber')

numbBtn.addEventListener('click' , (event) => {
    event.preventDefault()
})

numbBtn.addEventListener('click' , function(){
    let numbOne = Math.floor(Math.random() * 9000) + 1000 
    let numbTwo = Math.floor(Math.random() * 9000) + 1000 
    let numbThre = Math.floor(Math.random() * 9000) + 1000 
    let numbFore = Math.floor(Math.random() * 9000) + 1000 
    cardNamber.textContent = `${numbOne} ${numbTwo} ${numbThre} ${numbFore}`
})


let nameValue = sessionStorage.getItem('nameValue')
document.querySelector('.nav-name').innerHTML = nameValue



window.addEventListener('scroll' , function(){
    let intBlock = document.querySelector('.main__inputs-blok')

    if(this.scrollY > 300) {
        intBlock.classList.add('block')
    }

    else{
        intBlock.classList.remove('block')
    }

    let intInfo = document.querySelector('.text__block-last')

    if(this.scrollY > 1000) {
        intInfo.classList.add('block1')
    }

    else{
        intInfo.classList.remove('block1') 
    }
})











/* let urlCharacters = new URLSearchParams(window.location.search)

let nameReslut = urlCharacters.get('newName')

document.querySelector('.nav-name').innertext = newName
 */
