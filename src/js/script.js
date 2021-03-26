const menu = document.querySelector('.menu');
const menu_item = document.querySelectorAll('.menu .menu_item');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
});

menu_item.forEach(item, function() {
    item.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
   
    })
});
