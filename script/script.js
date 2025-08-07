let menu_icon = document.querySelector('.bx-menu');
let nav_bar = document.querySelector('.menu')
let nav_dark = document.querySelector('.nav-bar')
let nav_logo = document.querySelector('.nav-logo')

menu_icon.onclick=()=>{
    menu_icon.classList.toggle('bx-x');
    nav_bar.classList.toggle('active');
}
window.onscroll= function(){
    menu_icon.classList.remove('bx-x')
    nav_bar.classList.remove('active')
    if(window.pageYOffset>0){
     nav_dark.classList.add('nav-bg-dark')
     nav_logo.src ="./img/Group 11 1.png";
    }
    else{
        nav_dark.classList.remove('nav-bg-dark')
        nav_logo.src ="./img/Group 11.png";
    }
}