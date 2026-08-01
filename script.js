const burger = document.getElementById(`burger-menu`);
const menu = document.getElementById(`nav-menu`);
const tes = document.getElementById(`test`);

burger.addEventListener(`click`, () => {    
    menu.classList.toggle(`active`);
    // alert('coba');
})

// tes.addEventListener(`click`, ()=>{
//     alert('Coba!');
//     // menu.classList.toggle(`active`);
// })