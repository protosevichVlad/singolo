//----------------------------------------HEADER----------------------------------------------
window.addEventListener('scroll', onScroll);
window.onload = onScroll;

function onScroll(){
    let currentPosition = window.scrollY;
    let heder_size = document.querySelector('header').offsetHeight;
    let divs = document.querySelectorAll('body>div');
    let navigation = document.querySelectorAll('#header-n>a');

    divs.forEach((el)=>{
        if(el.offsetTop - heder_size  <= currentPosition && (el.offsetTop + el.offsetHeight) > currentPosition){
            navigation.forEach((a)=>{
                a.classList.remove('active_nav');
                if(a.getAttribute('href').substring(1) === el.getAttribute('id')){
                    a.classList.add('active_nav');   
}
            })
        }
    });

}

let bg_menu_open = false;
let bg_botton = document.querySelector("body > header > div.container > div")
let bg_menu = document.querySelector("body > header > div.menu-bg")

bg_botton.addEventListener('click', (event)=>{
    if(bg_menu_open){
        bg_botton.classList.remove('burger-button-open');
        bg_menu.classList.remove('menu-bg-open');
    }else{
        bg_botton.classList.add('burger-button-open');
        bg_menu.classList.add('menu-bg-open');
    }
    bg_menu_open = !bg_menu_open;
});

document.querySelector("body > header > div.menu-bg").addEventListener('click', (event) => {
    if(bg_menu_open){
        bg_botton.classList.remove('burger-button-open');
        bg_menu.classList.remove('menu-bg-open');
        bg_menu_open = !bg_menu_open;
    }
});

//--------------------------------SLIDER-----------------------------------------------------

function animation(dir){
    animation_is_running = true;
    let delay = 30;
    let i = 0;
    let array_starts = iphones.map(iphone => iphone.style.left);
    setTimeout(function run(){
        i += 20;
        iphones.forEach((iphone, index) => {
            iphone.style.left = parseInt(array_starts[index]) + i * dir + 'px';
        });
        if(i < width_iphones) {
            setTimeout(run, delay);
        }else{
            animation_is_running = false;
        }
    }, delay);
}

function edit_start_data(){
    width_iphones = parseInt(iphones_d.offsetWidth);    
    iphones.forEach(iphone => iphone.style = '');
    iphones.forEach(iphone => iphone.style.left = window.getComputedStyle(iphone).left);
    start_position_first_iphone = parseInt(iphones[0].style.left);
    start_position_second_iphone = parseInt(iphones[1].style.left); 
    start_position_third_iphone = parseInt(iphones[2].style.left);
}

function click_on_left_chev(){
    if(animation_is_running) return; 
    if(slider_1){
        iphones[2].style.left = (start_position_third_iphone - 2* width_iphones) + 'px';
        // slider.style.backgroundColor = '#648bf0';
        slider.classList.add('slider-2-background');
        animation(1);
    }else{
        iphones[0].style.left = -width_iphones + start_position_first_iphone + 'px';
        iphones[1].style.left = -width_iphones + start_position_second_iphone + 'px' ;
        slider.classList.remove('slider-2-background');        
        animation(1);
        
    }
    slider_1 = !slider_1;   
}

function click_on_right_chev(){
    if(animation_is_running) return; 
    if(slider_1){
        iphones[2].style.left = start_position_third_iphone + 'px';
        slider.classList.add('slider-2-background');
        animation(-1);
    }else{
        iphones[0].style.left = width_iphones + start_position_first_iphone + 'px';
        iphones[1].style.left = width_iphones + start_position_second_iphone + 'px';
        slider.classList.remove('slider-2-background');
        animation(-1);
    }
    slider_1 = !slider_1;
}

function chlick_on_iphone(){
    let style_for_screen = 'background: #000';
    let this_iphone = Array.from(this.getElementsByClassName('screen-iphone'))[0];
    if(this_iphone.style.length){
        this_iphone.style = '';
    }else{
        this_iphone.style = style_for_screen;
    }
}

let iphones_d = document.querySelector("body > div.slider > div > div.iphones");
let slider = document.querySelector("body > div.slider");
let iphones = Array.from(document.getElementsByClassName('iphone'));
let width_iphones = parseInt(iphones_d.offsetWidth);
let iphone_corpus = Array.from(document.getElementsByClassName('iphone-corpus'));

iphone_corpus.forEach(elem => elem.onclick = chlick_on_iphone)
iphones.push(document.querySelector('img.slider-2'))
iphones.forEach(iphone => iphone.style.left = window.getComputedStyle(iphone).left);

let start_position_first_iphone = parseInt(iphones[0].style.left)
let start_position_second_iphone = parseInt(iphones[1].style.left); 
let start_position_third_iphone = parseInt(iphones[2].style.left);

let slider_1 = true;
let animation_is_running = false     




window.matchMedia('(max-width: 1019px)').addListener(edit_start_data);
window.matchMedia('(max-width: 767px)').addListener(edit_start_data);
window.matchMedia('(max-width: 374px)').addListener(edit_start_data);


//--------------------------------PORTFOLIO--------------------------------------------------

function change_color_text_portfolio(){
    if('active_tag' == this.classList[0]) return;
    tags_portfolio.forEach(function(item){
        item.classList.remove('active_tag');
    });
    this.classList.add('active_tag');


    let temp = img_form_portfolio[0].cloneNode();
    temp.onclick = change_border_image_portfolio;
    parent_images.removeChild(img_form_portfolio[0]);
    parent_images.insertBefore(temp, img_form_portfolio[12]);
    img_form_portfolio = Array.from(document.getElementsByClassName('img-for-portfolio'));
}

function change_border_image_portfolio(){
    img_form_portfolio.forEach(function(item){
        item.classList.remove('active_image');
    });
    this.classList.add('active_image');
}

let img_form_portfolio = Array.from(document.getElementsByClassName('img-for-portfolio'));
let tags_portfolio = Array.from(document.getElementById("portfolio-tags").getElementsByTagName('li'));
let parent_images = document.getElementById("portfolio-images");

tags_portfolio.forEach(element => element.onclick = change_color_text_portfolio);

img_form_portfolio.forEach(element => element.onclick = change_border_image_portfolio);

//----------------------------get-a-quote------------------------------------

function sumbmit_form(){
    let subject_message = subject.value == '' ? 'Без темы' : 'Тема: ' + subject.value;
    let discribe_message = discribe.value == '' ? 'Без описания' : 'Описание: ' + discribe.value;

    document.body.insertAdjacentHTML('beforeend',
                                '<div id="message"> ' +
                                    '<div class="content">' +   
                                        '<h3>Письмо отправлено</h3>'+
                                        '<h4>' + subject_message + '</h4>'+
                                        '<p style="position: relative; top:0px;">' + discribe_message + '</p>'+
                                        '<button onclick="message_button_click()"style="width: 100px">OK</button>'+
                                    '</div>'+
                                '</div>');
    return false;
}

function message_button_click(){
    form.reset();
    document.body.removeChild(document.querySelector('#message'));
}

let name = document.querySelector('#f-name');
let email = document.querySelector('#f-email');
let subject = document.querySelector('#f-subject');
let discribe = document.querySelector('#f-discribe');
let form = document.querySelector('form');