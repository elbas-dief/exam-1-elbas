const burger = document.getElementById(`burger-menu`);
const menu = document.getElementById(`nav-menu`);
const tes = document.getElementById(`test`);

burger.addEventListener(`click`, () => {    
    menu.classList.toggle(`active`);
})