window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // =================================================================
    // Adaptive menu
    // =================================================================
    const mobileMenu = () => {
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
    };
    
    // =================================================================
    // Norma Doc Tabs
    // =================================================================

    const ndTabs = () => {
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
            });
        });
        // При открытии страницы по умолчанию открыта вкладка #2
        nd_order_items[1].click();
    };
    
    
    
    // =================================================================
    // PageUp
    // =================================================================
    
    const arrowUp = () => {
        const pageup = document.querySelector('.pageup');
    
        window.addEventListener('scroll', function() {
            if (window.scrollY > 1000) {
                pageup.style.display = 'block';
            }
            else {
                pageup.style.display = 'none';
            }
        });
    };
    
    
    // =================================================================
    // Slider
    // =================================================================
    
    const slider = () => {
        const arrow_prev = document.querySelector('.arrow_prev');
        const arrow_next = document.querySelector('.arrow_next');
        const slides = document.querySelectorAll('.slider');
        let slideIndex = 0;
        
        showSlides(0);
        
        function showSlides(n) {
            slides.forEach(item => {
                item.style.display = 'none';
            });
            slides[n].style.display = 'flex';
        };
        
        arrow_prev.addEventListener('click', () => {
            if (slideIndex > 0) {
                slideIndex = slideIndex - 1;
            } else {
                slideIndex = slides.length - 1;
            };
            showSlides(slideIndex);
        });
        
        arrow_next.addEventListener('click', () => {
            if (slideIndex < (slides.length - 1)) {
                slideIndex = slideIndex + 1;
            } else {
                slideIndex = 0;
            };
            showSlides(slideIndex);
        });
        
        const movieSlider = setInterval(() => {
            if (slideIndex < (slides.length - 1)) {
                slideIndex = slideIndex + 1;
            } else {
                slideIndex = 0;
            };
            showSlides(slideIndex);
        }, 5000);    
    };
    

    // =================================================================
    // About tabs
    // =================================================================

    const aboutTabs = () => {
        const tab_block = document.querySelector('.about_tabs');
        const tabs = document.querySelectorAll('.about_tab');
        const blocks = document.querySelectorAll('.about_block');
        
        function hideTabContent() {
            blocks.forEach(item => {
                item.style.display = 'none';
            });
        
            tabs.forEach(item => {
                item.classList.remove('active');
            });
        };
        
        hideTabContent();
        showTabContent();
        
        function showTabContent(i = 0) {
            blocks[i].style.display = 'flex';
            tabs[i].classList.add('active');
        };
        
        tab_block.addEventListener('click', (e) => {
            const target = e.target;
            if (target && (target.classList.contains('about_tab')) || 
            (target.parentNode.classList.contains('about_tab'))) {
                tabs.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            };
        });
    };
    
    
    // =================================================================
    // Experts gallery
    // =================================================================
    
    const expertsGallery = () => {
        const experts = document.querySelectorAll('.about_block_person');
        let currentPos = 0;

        function setCurrent(n) {
            experts.forEach(item => {
                item.style.display = 'none';
            });
        let i = n;
        for (let i = n; i < n + 3; i++) {
            experts[i].style.display = 'block';
        }

        };

        setCurrent(0);
    };








    mobileMenu();
    arrowUp();
    slider();    
    aboutTabs();
    ndTabs();
    expertsGallery();
    
});

