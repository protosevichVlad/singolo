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

//--------------------------------SLIDER-----------------------------------------------------

function animation(dir){
    animation_is_running = true;
    let delay = 30;
    let i = -2;
    let j = 42;
    let array_starts = iphones.map(iphone => iphone.style.left);
    setTimeout(function run(){
        i += j;
        j--;
        iphones.forEach((iphone, index) => {
            iphone.style.left = parseInt(array_starts[index]) + i * dir + 'px';
        });
        if(i < 880) {
            setTimeout(run, delay);
        }else{
            animation_is_running = false;
        }
    }, delay);
}

function click_on_left_chev(){
    if(animation_is_running) return; 
    if(slider_1){
        iphones[2].style.left = '-1220px';
        // slider.style.backgroundColor = '#648bf0';
        slider.classList.add('slider-2-background');
        animation(1);
    }else{
        iphones[0].style.left = '-880px';
        iphones[1].style.left = '-687px';
        slider.classList.remove('slider-2-background');        
        animation(1);
        
    }

    
    slider_1 = !slider_1;
    
}

function click_on_right_chev(){
    if(animation_is_running) return; 
    if(slider_1){
        iphones[2].style.left = '540px';
        slider.classList.add('slider-2-background');
        animation(-1);
    }else{
        iphones[0].style.left = '880px';
        iphones[1].style.left = '1073px';
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
let iphone_corpus = Array.from(document.getElementsByClassName('iphone-corpus'));

iphone_corpus.forEach(elem => elem.onclick = chlick_on_iphone)
iphones.push(document.querySelector('img.slider-2'))
iphones.forEach(iphone => iphone.style.left = window.getComputedStyle(iphone).left);

let slider_1 = true;
let animation_is_running = false     

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
                                '<div id="message" style="position: fixed; top:0px; left:0px; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.5); z-index: 11; display: flex; justify-content: center; align-items: center; "> ' +
                                    '<div class="content" style="padding:40px; background-color: white; border-radius: 10px; width: 500px; height: 200px; display: flex; flex-direction: column; justify-content: space-around; align-items: center; color: black">' +   
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