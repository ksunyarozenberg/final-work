// Для мобильных устройств (меню)
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.menu-list');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    const icon = menuIcon.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});