'use strict';


// Adaptive menu

const menu = document.querySelector('.menu');
const menu_items = document.querySelectorAll('.menu .menu_item');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
});

menu_items.forEach(function(item) {
    item.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
   
    })
});

// =================================================================
// Norma Doc Tabs

const nd_order = document.querySelector('.nd_order');
const nd_order_items = document.querySelectorAll('.nd_order_item');
const nd_block = document.querySelector('.nd_block');
const nd_block_items = document.querySelectorAll('.nd_block_item');

nd_order_items.forEach(function(item) {
    item.addEventListener('click', function() {
        nd_order_items.forEach(function(i) {
            i.classList.remove('nd_order_item_active')
        });
        item.classList.toggle('nd_order_item_active')
 
        if (item.classList.contains('nd_all')) {
            nd_block_items.forEach(function(item, i) {
                item.style.display = 'block';
                item.children[0].childNodes[0].innerHTML = ++i + ". ";
            })    
        };    
        if (item.classList.contains('nd_fz')) {
            let k = 0;
            nd_block_items.forEach(function(item, i) {
                item.style.display = 'none';
                if (item.classList.contains('nd_fz')) {
                    item.style.display = 'block';
                    item.children[0].childNodes[0].innerHTML = ++k + ". ";
                }
            })    
        }; 
        if (item.classList.contains('nd_pp')) {
            let k = 0;
            nd_block_items.forEach(function(item, i) {
                item.style.display = 'none';
                if (item.classList.contains('nd_pp')) {
                    item.style.display = 'block';
                    item.children[0].childNodes[0].innerHTML = ++k + ". ";
                }
            })    
        }; 
        if (item.classList.contains('nd_mt')) {
            let k = 0;
            nd_block_items.forEach(function(item, i) {
                item.style.display = 'none';
                if (item.classList.contains('nd_mt')) {
                    item.style.display = 'block';
                    item.children[0].childNodes[0].innerHTML = ++k + ". ";
                }
            })    
        }; 
        if (item.classList.contains('nd_other')) {
            let k = 0;
            nd_block_items.forEach(function(item, i) {
                item.style.display = 'none';
                if (item.classList.contains('nd_other')) {
                    item.style.display = 'block';
                    item.children[0].childNodes[0].innerHTML = ++k + ". ";
                }
            })    
        } 
    })
})


// При открытии страницы по умолчанию открыта вкладка #2
nd_order_items[1].click();