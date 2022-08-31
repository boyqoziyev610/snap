let features = document.querySelector('.features');
let company = document.querySelector('.company');
let first = document.querySelector('.toogle-first');
let second = document.querySelector('.toogle-second');
let fImg = document.querySelector('.features-img');
let cImg = document.querySelector('.company-img');
let menu = document.querySelector('.menu');
let menuPage = document.querySelector('.menu-page');
let close = document.querySelector('.close');
let fff= document.querySelector('#fff');
let body= document.querySelector('body');


features.addEventListener('click' , ()=>{
    first.classList.toggle("block");
if(fImg.getAttribute('src')=='img/icon-arrow-down.svg'){
    fImg.setAttribute('src' , 'img/icon-arrow-up.svg')
}else{

    fImg.setAttribute('src' , 'img/icon-arrow-down.svg')
}
})


company.addEventListener('click' , ()=>{
    second.classList.toggle("block");
if(cImg.getAttribute('src')=='img/icon-arrow-down.svg'){
    cImg.setAttribute('src' , 'img/icon-arrow-up.svg')
    
}else{
    cImg.setAttribute('src' , 'img/icon-arrow-down.svg')
}
})


menu.addEventListener('click' , ()=>{
    menuPage.style.right = '0';
    menuPage.style.boxShadow = '0px 0px 1000px 11110px rgba(0, 0, 0, 0.789)';
    body.style.overflow='hidden'


})
close.addEventListener('click' , ()=>{
    menuPage.style.right = '-90vw';
    menuPage.style.boxShadow = 'none';
    body.style.overflowY = 'scroll'
})




