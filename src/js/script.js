window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let equip = document.querySelectorAll('.about_block_equip_item');

    const scroll = calcScroll();

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    };



    // =================================================================
    // Adaptive menu
    // =================================================================
    // const mobileMenu = () => {
    //     const menu = document.querySelector('.menu');
    //     const menu_items = document.querySelectorAll('.menu .menu_item');
    //     const hamburger = document.querySelector('.hamburger');
        
    //     hamburger.addEventListener('click', function() {
    //         hamburger.classList.toggle('hamburger_active');
    //         menu.classList.toggle('menu_active');
    //     });
        
    //     menu_items.forEach(function(item) {
    //         item.addEventListener('click', function() {
    //             hamburger.classList.toggle('hamburger_active');
    //             menu.classList.toggle('menu_active');
           
    //         })
    //     });
    // };
    
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
        const pageUp = document.querySelector('.pageup');
        
    
        window.addEventListener('scroll', function() {
            if (window.scrollY > 1000) {
                pageUp.style.display = 'block';
            }
            else {
                pageUp.style.display = 'none';
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
        
        function showTabContent(i = 2) {
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
            if (currentPos == 0) {
                left_btn.style.display = 'none';
                left_btn_disable.style.display = 'flex';
            };
            right_btn.style.display = 'flex';
            right_btn_disable.style.display = 'none';
            setCurrent(currentPos);
        });

        right_btn.addEventListener('click', () => {
            currentPos++;
            if (currentPos == experts.length - 4) {
                currentPos = experts.length - 4;
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

    const showSerts = () => {
        const experts = document.querySelectorAll('.about_block_person_item');
        const expertsWrap = document.querySelector('.about_block_person');
            
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        wrap.style.display = 'none';
        document.body.appendChild(wrap);
        

        let sertsWrap = document.createElement('div');
        sertsWrap.classList.add('serts_gallery');
        sertsWrap.style.display = 'none';
        wrap.appendChild(sertsWrap);

        let imageFrame = document.createElement('div');
        imageFrame.classList.add('serts_frame');
        imageFrame.style.display = 'none';
        wrap.appendChild(imageFrame);

        const sertsAntonov = ['./img/Certs/Antonov/Page1.jpg'];
        const sertsErikova = ['./img/Certs/Erikova/Page1.jpg', './img/Certs/Erikova/Page2.jpg', './img/Certs/Erikova/Page3.jpg', './img/Certs/Erikova/Page4.jpg'];
        const sertsGainullin = ['./img/Certs/Gainullin/Page1.jpg', './img/Certs/Gainullin/Page2.jpg', './img/Certs/Gainullin/Page3.jpg', './img/Certs/Gainullin/Page4.jpg'];
        const sertsKarneev = ['./img/Certs/Karneev/Page1.jpg'];
        const sertsOrl = ['./img/Certs/Orl/Page1.jpg', './img/Certs/Orl/Page2.jpg', './img/Certs/Orl/Page3.jpg', './img/Certs/Orl/Page4.jpg', './img/Certs/Orl/Page5.jpg'];
        const sertsSkor = ['./img/Certs/Skor/Page1.jpg', './img/Certs/Skor/Page2.jpg', './img/Certs/Skor/Page3.jpg', './img/Certs/Skor/Page4.jpg', './img/Certs/Skor/Page5.jpg'];

        wrap.addEventListener('click', (e) => {
            if (e.target === wrap) {
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                wrap.style.display = 'none';
            }
        });

        expertsWrap.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target;

            if (imageFrame.firstChild != null) {
                imageFrame.removeChild(imageFrame.firstChild);
            };

            let fc = sertsWrap.firstChild;
            while (fc) {
                sertsWrap.removeChild(fc);
                fc = sertsWrap.firstChild;
            }

            if (target && target.classList.contains('about_block_person_item') || 
            target.parentNode.classList.contains('about_block_person_item')) {
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                wrap.style.display = 'flex';
                experts.forEach((item, i) => {
                    if ((item == target) || (item == target.parentNode)) {
                        switch (i) {
                            case i = 0: 
                            for (let k = 0; k < sertsOrl.length; k++) {
                                let image = document.createElement('img');
                                let path = sertsOrl[k];
                                image.setAttribute('src', path);
                                sertsWrap.appendChild(image);
                            }
                            break;

                            case i = 1: 
                            for (let k = 0; k < sertsSkor.length; k++) {
                                let image = document.createElement('img');
                                let path = sertsSkor[k];
                                image.setAttribute('src', path);
                                sertsWrap.appendChild(image);
                            }
                            break;
                            case i = 2:
                                wrap.style.display = 'none';
                                break;                            
                            case i = 3:
                            for (let k = 0; k < sertsErikova.length; k++) {
                                let image = document.createElement('img');
                                let path = sertsErikova[k];
                                image.setAttribute('src', path);
                                sertsWrap.appendChild(image);
                            }
                            break;
                            case i = 4:
                            for (let k = 0; k < sertsGainullin.length; k++) {
                                let image = document.createElement('img');
                                let path = sertsGainullin[k];
                                image.setAttribute('src', path);
                                sertsWrap.appendChild(image);
                            }
                            break;
                            case i = 5:
                            for (let k = 0; k < sertsAntonov.length; k++) {
                                let image = document.createElement('img');
                                let path = sertsAntonov[k];
                                image.setAttribute('src', path);
                                sertsWrap.appendChild(image);
                            }
                            break;
                            case i = 6:
                            for (let k = 0; k < sertsKarneev.length; k++) {
                                let image = document.createElement('img');
                                let path = sertsKarneev[k];
                                image.setAttribute('src', path);
                                sertsWrap.appendChild(image);
                            }
                            break;
                        }
        
                    }

                });

                sertsWrap.style.display = 'flex';
                };

        });
        sertsWrap.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target;

            let images = sertsWrap.querySelectorAll('img');

            images.forEach(item => {
                if (target == item) {

                    const bigImage = document.createElement('img');
                    const path = target.getAttribute('src');
                    bigImage.setAttribute('src', path);
        
                    if (imageFrame.firstChild != null) {
                        imageFrame.removeChild(imageFrame.firstChild);
                    };
                    imageFrame.style.display = 'flex';
                    imageFrame.appendChild(bigImage);
        
                };

            });
               

        });

        

    };


    // =================================================================
    // Docs view
    // =================================================================

    const showDocs = () => {
        const aboutDocs = document.querySelector('.about_block_docs');
        const docs = document.querySelectorAll('.about_block_doc');

        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        wrap.style.display = 'none';
        document.body.appendChild(wrap);
        
        let imageFrame = document.createElement('div');
        imageFrame.classList.add('docs_frame');
        imageFrame.style.display = 'none';
        wrap.appendChild(imageFrame);

        wrap.addEventListener('click', (e) => {
            if (e.target === wrap) {
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                wrap.style.display = 'none';
            }
        });


        aboutDocs.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target;
            let path = '';

            if (target && target.classList.contains('about_block_doc') || 
            target.parentNode.classList.contains('about_block_doc') ||
            target.parentNode.parentNode.classList.contains('about_block_doc')) {

                docs.forEach((item, i) => {

                    if ((item == target) || (item == target.parentNode) || (item == target.parentNode.parentNode)) {

                        if (target.hasAttribute('href')) {
                            path = target.getAttribute('href');
                        };
                        if (target.parentNode.hasAttribute('href')) {
                            path = target.parentNode.getAttribute('href');
                        };
                        if (target.parentNode.parentNode.hasAttribute('href')) {
                            path = target.parentNode.parentNode.getAttribute('href');
                        };
                        
                        if (path != '') {
                            document.body.style.overflow = 'hidden';
                            document.body.style.marginRight = `${scroll}px`;

                            wrap.style.display = 'flex';
                            const bigImage = document.createElement('img');
                            bigImage.setAttribute('src', path);
            
                            if (imageFrame.firstChild != null) {
                                imageFrame.removeChild(imageFrame.firstChild);
                            };
                            imageFrame.style.display = 'flex';
                            imageFrame.appendChild(bigImage);
        
                        }
                                    
                    }
                });
            }


        });


    };



    // =================================================================
    // Grats view
    // =================================================================

    const showGrats = () => {
        const grats = document.querySelectorAll('.grats_block_doc');

        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        wrap.style.display = 'none';
        document.body.appendChild(wrap);
        
        let imageFrame = document.createElement('div');
        imageFrame.classList.add('docs_frame');
        imageFrame.style.display = 'none';
        wrap.appendChild(imageFrame);

        wrap.addEventListener('click', (e) => {
            if (e.target === wrap) {
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                wrap.style.display = 'none';
            }
        });

        grats.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                let target = e.target;
                let path = '';
                if ((item == target) || (item == target.parentNode) || (item == target.parentNode.parentNode)) {

                    if (target.hasAttribute('href')) {
                        path = target.getAttribute('href');
                    };
                    if (target.parentNode.hasAttribute('href')) {
                        path = target.parentNode.getAttribute('href');
                    };
                    if (target.parentNode.parentNode.hasAttribute('href')) {
                        path = target.parentNode.parentNode.getAttribute('href');
                    };

                    if (path != '') {
                        document.body.style.overflow = 'hidden';
                        document.body.style.marginRight = `${scroll}px`;
                        wrap.style.display = 'flex';
    
                        const bigImage = document.createElement('img');
                        bigImage.setAttribute('src', path);
            
                        if (imageFrame.firstChild != null) {
                            imageFrame.removeChild(imageFrame.firstChild);
                        };
                        imageFrame.style.display = 'flex';
                        imageFrame.appendChild(bigImage);
    
    
                    }
                };
            });
        });

    };

    // =================================================================
    // Adv counters
    // =================================================================

    const counters = () => {
        const counterClients = document.querySelector('.adv_item_counter_client');
        const counterOrders = document.querySelector('.adv_item_counter_order');
        const counterYears = document.querySelector('.adv_item_counter_year');

        let numClients = 300;
        let numOrders = 1000;
        let numYears = 16;

        let i = 0;

        let setClients = setInterval(function() {
                i++;
                if (i === numClients) {
                    clearInterval(setClients);
                };
                counterClients.innerHTML = i;
            }, 5);
    
        let y = 0;

        let setOrders = setInterval(function() {
                y++;
                if (y === numOrders) {
                    clearInterval(setOrders);
                };
                counterOrders.innerHTML = y;
            }, 0,2);

        let k = 0;

        let setYears = setInterval(function() {
                k++;
                if (k === numYears) {
                    clearInterval(setYears);
                };
                counterYears.innerHTML = k;
            }, 300);


        };

    // =================================================================
    // JSON requests
    // =================================================================

    function getDevices(wrapper) {

        const getResource = async (url) => {

            let res = await fetch(url);

            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }

            return await res.json();
        };

        getResource('db/devices.json')
            .then(res => createDevices(res.list))
            .catch(error => console.log(error));

        function createDevices(response) {
            response.forEach(item => {
                let card = document.createElement('div');
                card.classList.add('about_block_equip_item');
                card.innerHTML = `
                    <img src=${item.src} alt="">
                    <div class="about_block_equip_name">${item.title}</div>
                `;
                card.style.display = 'none';

                document.querySelector(wrapper).insertBefore(card, document.querySelector('.equip_scroll_right'));
            });

            equip = document.querySelectorAll('.about_block_equip_item');

        };

    };


    // =================================================================
    // Equipment gallery
    // =================================================================
    
    const equipmentGallery = () => {
    
        const left_btn = document.querySelector('.equip_scroll_left');
        const right_btn = document.querySelector('.equip_scroll_right');
        const left_btn_disable = document.querySelector('.equip_scroll_left_disable');
        const right_btn_disable = document.querySelector('.equip_scroll_right_disable');
        
        left_btn.style.display = 'none';
        left_btn_disable.style.display = 'flex';
        right_btn.style.display = 'flex';
        right_btn_disable.style.display = 'none';
        let currentPos = 0;

        setCurrent(currentPos);

        function setCurrent(n) {
            equip.forEach(item => {
                item.style.display = 'none';
            });
            for (let i = 0; i < 4; i++) {
            equip[n + i].style.display = 'flex';
            };
        };
        
        left_btn.addEventListener('click', () => {
            currentPos--;
            if (currentPos == 0) {
                left_btn.style.display = 'none';
                left_btn_disable.style.display = 'flex';
            };
            right_btn.style.display = 'flex';
            right_btn_disable.style.display = 'none';
            setCurrent(currentPos);
        });

        right_btn.addEventListener('click', () => {
            currentPos++;
            if (currentPos == equip.length - 4) {
                currentPos = equip.length - 4;
                right_btn.style.display = 'none';
                right_btn_disable.style.display = 'flex';
            };
            left_btn.style.display = 'flex';
            left_btn_disable.style.display = 'none';
            setCurrent(currentPos);
        });
    

    };


    let promise = new Promise((resolve, reject) => {
        getDevices('.about_block_equip');
    });



    // mobileMenu();
    arrowUp();
    slider();    
    aboutTabs();
    ndTabs();
    expertsGallery();
    showSerts();
    showDocs();
    promise
        .then (equipmentGallery());
    showGrats();
    counters();
});

