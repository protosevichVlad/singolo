//----------------------------------------HEADER----------------------------------------------

function change_color_text_header(){
    a_anchors.forEach(item=>item.style.color = "#ffffff");
    this.style.color = "#f06c64";
}

let a_anchors = Array.from(document.getElementById("header-n").getElementsByTagName('a'));
let save_index_red_text = 0;
a_anchors[0].style.color = "#f06c64";

for(let i = 0; i < a_anchors.length; i++){
    a_anchors[i].onclick = change_color_text_header;
}

//--------------------------------SLIDER-----------------------------------------------------

function click_on_chev(){
    if(slider_1){
        iphones.style = 'background: url(assets/slider-2.png);height: 513px;'
        iphone.forEach(elem => elem.style = 'display: none');
        slider.style = 'background-color: #648bf0; border-bottom: 6px solid #74b9ff';
        slider_1 = false
    }else{
        iphones.style = '';
        iphone.forEach(elem => elem.style = '');
        slider.style = '';
        slider_1 = true;
    }
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

let iphones = Array.from(document.getElementsByClassName('iphones'))[0];
let slider = Array.from(document.getElementsByClassName('slider'))[0];
let iphone = Array.from(document.getElementsByClassName('iphone'));
let iphone_corpus = Array.from(document.getElementsByClassName('iphone-corpus'));

iphone_corpus.forEach(elem => elem.onclick = chlick_on_iphone)

let slider_1 = true;
     

//--------------------------------PORTFOLIO--------------------------------------------------

function change_color_text_portfolio(){
    tags_portfolio.forEach(function(item){
        item.style.color = "#666d89";
        item.style.borderColor = "#666d89";
    });
    this.style.color = "#c5c5c5";
    this.style.borderColor  = '#c5c5c5';

    let temp = img_form_portfolio[0].cloneNode();
    temp.onclick = change_border_image_portfolio;
    parent_images.removeChild(img_form_portfolio[0]);
    parent_images.insertBefore(temp, img_form_portfolio[12]);
    img_form_portfolio = Array.from(document.getElementsByClassName('img-for-portfolio'));
}

function change_border_image_portfolio(){
    img_form_portfolio.forEach(function(item){
        item.style.borderWidth= "0px";
        item.style.left = "0px";
        item.style.top = "0px";
    });
    console.log('asdasd');


    this.style.borderWidth = "5px";
    this.style.left = "-5px";
    this.style.top = "-5px";
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
    name.value = '';
    email.value = '';
    subject.value = '';
    discribe.value = '';
    document.body.removeChild(document.getElementById('message'));
}

let name = document.getElementById('f-name');
let email = document.getElementById('f-email');
let subject = document.getElementById('f-subject');
let discribe = document.getElementById('f-discribe');