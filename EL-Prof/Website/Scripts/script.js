const hamburger = document.querySelector('.Burger_Menu');
const navmenu = document.querySelector(".Nav_Menu nav ul");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');
})

document.querySelectorAll('.Menu-Header nav ul li a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navmenu.classList.remove('active');
}));