window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let equip = document.querySelectorAll('.about_block_equip_item');
    let person = document.querySelectorAll('.about_block_person_item');

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

    function createList(documents, wrap) {
        const docWrap = document.querySelector(wrap);
        documents.forEach(item => {
            let doc = document.createElement('div');
            doc.classList.add('nd_block_item');
            doc.classList.add(item.pos);

            let h3 = document.createElement('h3');
            let h3Span = document.createElement('span');
            h3Span.classList.add('nd_block_cap');
            h3.appendChild(h3Span);
            h3.append(item.title);
            doc.appendChild(h3);

            let descr = document.createElement('div');
            descr.classList.add('nd_block_descr');
            let descrSpan = document.createElement('span');
            descrSpan.innerHTML = '\"' + item.name + '\"';
            descr.appendChild(descrSpan);
            let descrHref = document.createElement('a');
            descrHref.setAttribute('href', item.src);
            let descrHrefBtn = document.createElement('div');
            descrHrefBtn.classList.add('arrow_btn');
            let descrHrefBtnImage = document.createElement('img');
            descrHrefBtnImage.setAttribute('src', 'icons/arrow.png');
            descrHrefBtnImage.setAttribute('alt', 'Arrow');
            descrHrefBtn.appendChild(descrHrefBtnImage);
            descrHref.appendChild(descrHrefBtn);
            descr.appendChild(descrHref);

            doc.appendChild(descr);

            doc.style.display = 'block';
            docWrap.appendChild(doc);
    
        })
    };

    const ndTabs = () => {
        const nd_order_items = document.querySelectorAll('.nd_order_item');
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
    // Data for "About" Block
    // =================================================================

    async function getInfo(url) {

        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return res.json();
    };



    function createBlock(response, wrapper, element, element_title, element_subtitle, endElement) {
        response.forEach(item => {
            let card = document.createElement('div');
            card.classList.add(element);
            let string = ``;
            
            if (item.src) {
                string += `<img src=${item.src} alt="${item.name}"> `
            };

            if (item.name) {
                string += ` <div class=${element_title}>${item.name}</div> `
            };

            if (item.pos) {
                string += ` <div class=${element_subtitle}>${item.pos}</div> `
            };

            if (item.title) {
                string += ` <div class=${element_title}>${item.title}</div> `
            };

            card.innerHTML = string;
            card.style.display = 'none';

            document.querySelector(wrapper).insertBefore(card, document.querySelector(endElement));
        });
   
    };

    function createGallery (block, left, right, left_dis, right_dis) {
    
        const left_btn = document.querySelector(left);
        const right_btn = document.querySelector(right);
        const left_btn_disable = document.querySelector(left_dis);
        const right_btn_disable = document.querySelector(right_dis);
        
        left_btn.style.display = 'none';
        left_btn_disable.style.display = 'flex';
        right_btn.style.display = 'flex';
        right_btn_disable.style.display = 'none';
        let currentPos = 0;

        setCurrent(currentPos);

        function setCurrent(n) {
            block.forEach(item => {
                item.style.display = 'none';
            });
            for (let i = 0; i < 4; i++) {
            block[n + i].style.display = 'flex';
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
            if (currentPos == block.length - 4) {
                currentPos = block.length - 4;
                right_btn.style.display = 'none';
                right_btn_disable.style.display = 'flex';
            };
            left_btn.style.display = 'flex';
            left_btn_disable.style.display = 'none';
            setCurrent(currentPos);
        });
    

    };

    function showCerts(experts_wrap, experts, json_data) {
            
        const expertsWrap = document.querySelector(experts_wrap);
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        wrap.style.display = 'none';
        document.body.appendChild(wrap);
        

        let certsWrap = document.createElement('div');
        certsWrap.classList.add('serts_gallery');
        certsWrap.style.display = 'none';
        wrap.appendChild(certsWrap);

        let imageFrame = document.createElement('div');
        imageFrame.classList.add('serts_frame');
        imageFrame.style.display = 'none';
        wrap.appendChild(imageFrame);



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

            let fc = certsWrap.firstChild;
            while (fc) {
                certsWrap.removeChild(fc);
                fc = certsWrap.firstChild;
            };

            if (target && target.classList.contains('about_block_person_item') || 
            target.parentNode.classList.contains('about_block_person_item')) {
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                wrap.style.display = 'flex';
                experts.forEach((item, i) => {
                    if ((item == target) || (item == target.parentNode)) {
                        for (let k = 0; k < json_data.list[i].certs.split(',').length; k++) {
                            let image = document.createElement('img');
                            let path = json_data.list[i].certs.split(',')[k];
                            image.setAttribute('src', path);
                            certsWrap.appendChild(image);
                        };
                    };
                });

                certsWrap.style.display = 'flex';
            };
        });

        certsWrap.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target;

            let images = certsWrap.querySelectorAll('img');

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


     // Personal
    
    async function personal() {
        const personal = await getInfo('../db/person.json')
        createBlock(personal.list, '.about_block_person', 'about_block_person_item', 'about_block_person_name', 'about_block_person_descr', '.person_scroll_right');
        const personList = document.querySelectorAll('.about_block_person_item');
        createGallery(personList, '.person_scroll_left', '.person_scroll_right', '.person_scroll_left_disable', '.person_scroll_right_disable');
        showCerts('.about_block_person', personList, personal);
    };
    
    // Equipment
    
    async function equipment() {
        const devices = await getInfo('../db/devices.json')
        createBlock(devices.list, '.about_block_equip', 'about_block_equip_item', 'about_block_equip_name', 'about_block_equip_descr', '.equip_scroll_right');
        const deviceList = document.querySelectorAll('.about_block_equip_item');
        createGallery(deviceList, '.equip_scroll_left', '.equip_scroll_right', '.equip_scroll_left_disable', '.equip_scroll_right_disable');
    };
    
    // Norma Docs
    
    async function normaDocs() {
        const documents = await getInfo('../db/documents.json')
        createList(documents.list, '.nd_block');
        ndTabs();

    };




    // mobileMenu();
    arrowUp();
    slider();    
    aboutTabs();
    showDocs();
    personal();
    equipment();
    showGrats();
    normaDocs();
    counters();
});

