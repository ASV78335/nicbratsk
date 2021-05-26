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
        
        function showTabContent(i = 1) {
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
        const experts = document.querySelectorAll('.about_block_person_item');
        const left_btn = document.querySelector('.person_scroll_left');
        const right_btn = document.querySelector('.person_scroll_right');
        const left_btn_disable = document.querySelector('.person_scroll_left_disable');
        const right_btn_disable = document.querySelector('.person_scroll_right_disable');
        
        left_btn.style.display = 'none';
        left_btn_disable.style.display = 'flex';
        right_btn.style.display = 'flex';
        right_btn_disable.style.display = 'none';
        let currentPos = 0;

        setCurrent(currentPos);

        function setCurrent(n) {
            experts.forEach(item => {
                item.style.display = 'none';
            });
            for (let i = 0; i < 4; i++) {
            experts[n + i].style.display = 'flex';
            };
        };
        
        left_btn.addEventListener('click', () => {
            currentPos--;
            if (currentPos < 0) {
                currentPos = 0;
                left_btn.style.display = 'none';
                left_btn_disable.style.display = 'flex';
            };
            right_btn.style.display = 'flex';
            right_btn_disable.style.display = 'none';
            setCurrent(currentPos);
        });

        right_btn.addEventListener('click', () => {
            currentPos++;
            if (currentPos > experts.length - 4) {
                currentPos = experts.length - 4
                right_btn.style.display = 'none';
                right_btn_disable.style.display = 'flex';
            };
            left_btn.style.display = 'flex';
            left_btn_disable.style.display = 'none';
            setCurrent(currentPos);
        });

        experts.forEach((item, i) => {
            item.addEventListener('click', () => {

            });
         });
        

    };

    const showCerts = () => {
        const about = document.querySelector('.about_blocks');
        let frameWidth = document.querySelector('.about_blocks').clientWidth;
        const experts = document.querySelectorAll('.about_block_person_item');
        const expertsWrap = document.querySelector('.about_block_person');

        let certsWrap = document.createElement('div');
        certsWrap.classList.add('certs_gallery');
        certsWrap.style.display = 'none';
        certsWrap.style.justifyContent = 'center';
        certsWrap.style.alignItems = 'center';
        certsWrap.style.width = frameWidth + 'px';

        let imageFrame = document.createElement('div');
        imageFrame.classList.add('certs_frame');
        imageFrame.style.display = 'none';
        imageFrame.style.justifyContent = 'center';
        imageFrame.style.alignItems = 'center';
        imageFrame.style.width = frameWidth + 'px';

        about.appendChild(imageFrame);

        const certsAntonov = ['./img/Certs/Antonov/Page1.jpg'];
        const certsErikova = ['./img/Certs/Erikova/Page1.jpg', './img/Certs/Erikova/Page2.jpg', './img/Certs/Erikova/Page3.jpg', './img/Certs/Erikova/Page4.jpg'];
        const certsGainullin = ['./img/Certs/Gainullin/Page1.jpg', './img/Certs/Gainullin/Page2.jpg', './img/Certs/Gainullin/Page3.jpg', './img/Certs/Gainullin/Page4.jpg'];
        const certsKarneev = ['./img/Certs/Karneev/Page1.jpg'];
        const certsOrl = ['./img/Certs/Orl/Page1.jpg', './img/Certs/Orl/Page2.jpg', './img/Certs/Orl/Page3.jpg', './img/Certs/Orl/Page4.jpg', './img/Certs/Orl/Page5.jpg'];
        const certsSkor = ['./img/Certs/Skor/Page1.jpg', './img/Certs/Skor/Page2.jpg', './img/Certs/Skor/Page3.jpg', './img/Certs/Skor/Page4.jpg', './img/Certs/Skor/Page5.jpg'];

        expertsWrap.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target;

            if (imageFrame.firstChild != null) {
                imageFrame.removeChild(imageFrame.firstChild);
            };

            let fc = certsWrap.firstChild;
            while (fc) {
                certsWrap.removeChild(fc);
                fc = certsWrap.firstChild;
            }

            if (target && target.classList.contains('about_block_person_item') || 
            target.parentNode.classList.contains('about_block_person_item')) {
                about.appendChild(certsWrap);
                        experts.forEach((item, i) => {
                    if ((item == target) || (item == target.parentNode)) {
                        switch (i) {
                            case i = 0: 
                            for (let k = 0; k < certsOrl.length; k++) {
                                let image = document.createElement('img');
                                let path = certsOrl[k];
                                image.setAttribute('src', path);
                                certsWrap.appendChild(image);
                            }
                            break;

                            case i = 1: 
                            for (let k = 0; k < certsSkor.length; k++) {
                                let image = document.createElement('img');
                                let path = certsSkor[k];
                                image.setAttribute('src', path);
                                certsWrap.appendChild(image);
                            }
                            break;
                            case i = 3:
                            for (let k = 0; k < certsErikova.length; k++) {
                                let image = document.createElement('img');
                                let path = certsErikova[k];
                                image.setAttribute('src', path);
                                certsWrap.appendChild(image);
                            }
                            break;
                            case i = 4:
                            for (let k = 0; k < certsGainullin.length; k++) {
                                let image = document.createElement('img');
                                let path = certsGainullin[k];
                                image.setAttribute('src', path);
                                certsWrap.appendChild(image);
                            }
                            break;
                            case i = 5:
                            for (let k = 0; k < certsAntonov.length; k++) {
                                let image = document.createElement('img');
                                let path = certsAntonov[k];
                                image.setAttribute('src', path);
                                certsWrap.appendChild(image);
                            }
                            break;
                            case i = 6:
                            for (let k = 0; k < certsKarneev.length; k++) {
                                let image = document.createElement('img');
                                let path = certsKarneev[k];
                                image.setAttribute('src', path);
                                certsWrap.appendChild(image);
                            }
                            break;
                        }
        
                    }

                });

                certsWrap.style.display = 'flex';
                };

        });
        certsWrap.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target;

                // imageFrame.removeChild(imageFrame.firstChild) 

            const bigImage = document.createElement('img');
            const path = target.getAttribute('src');
            bigImage.setAttribute('src', path);
            bigImage.setAttribute('width', frameWidth + 'px');
            if (imageFrame.firstChild != null) {
                imageFrame.removeChild(imageFrame.firstChild);
            };
            imageFrame.style.display = 'flex';
            imageFrame.appendChild(bigImage);

                

        });
        

    };







    mobileMenu();
    arrowUp();
    slider();    
    aboutTabs();
    ndTabs();
    expertsGallery();
    showCerts();
});

