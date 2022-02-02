const navLink = document.querySelector('.nav-link');
const mobileMenu = document.querySelector('#mobile-menu')

mobileMenu.addEventListener('click',()=>{
    mobileMenu.classList.toggle('is-active')
    navLink.classList.toggle('active')
})