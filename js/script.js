//Genarl Interaction

document.getElementById('menu-button').addEventListener('click', expandMenu);
function expandMenu() {
    var menu = document.getElementById('menu-content');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'contents';
        if (document.getElementById('home') || document.getElementById('work')) {
            this.innerHTML = '<img id="menu-closing" src="/media/menu_closing_green.svg"><img id="menu-closing" src="/media/menu_closing_green.svg">';
        }
        else if (document.getElementById('about') || document.getElementById('contact')) {
            this.innerHTML = '<img id="menu-closing" src="/media/menu_closing_white.svg"><img id="menu-closing" src="/media/menu_closing_white.svg">';
        }
    }
    else {
        if (document.getElementById('home') || document.getElementById('work')) {
            this.innerHTML = '<img id="menu-opening" src="/media/menu_opening.svg"><img id="menu-middle" src="/media/menu_middle_green.svg"><img id="menu-closing" src="/media/menu_closing.svg">';
            menu.style.display = 'none';
        }
        else if (document.getElementById('about') || document.getElementById('contact')) {
            this.innerHTML = '<img id="menu-opening" src="/media/menu_opening.svg"><img id="menu-middle" src="/media/menu_middle_white.svg"><img id="menu-closing" src="/media/menu_closing.svg">';
            menu.style.display = 'none';
        }
    }
}


let smallscreen = window.matchMedia('(max-width: 1255px)');
let largescreen = window.matchMedia('(min-width: 1255px)');
let middlescreen = window.matchMedia('(min-width: 880px)');
//for index.html

if (document.getElementById('home')) {
    const buttonTimeOut = setTimeout(buttonappear, 2500);
    function buttonappear() {
        document.getElementsByClassName('load')[0].style.display = 'block';
        document.getElementsByClassName('load')[1].style.display = 'block';
    }

    document.addEventListener('DOMContentLoaded', timeOut);
    let taglineTimeout;
    let nicknameTimeout;
    function timeOut(){
        taglineTimeout = setTimeout(taglineFadeLeft, 1600);
        nicknameTimeout = setTimeout(nicknameFadeLeft, 1000);
    }
    function taglineFadeLeft(){
        document.getElementById('intro').style.visibility = 'visible';
    }
    function nicknameFadeLeft(){
        document.getElementById('nickname').style.visibility = 'visible';
    }

    document.addEventListener('DOMContentLoaded', scrollDelayAppear);
    let scrollTimeOut;
    function scrollDelayAppear() {
        if (largescreen.matches) {
            document.getElementById('scroll-indicator').style.display = 'none';
        } else {
            scrollTimeOut = setTimeout(scrollAppear, 2300)
        }
    };
    

    function scrollAppear() {
        document.getElementById('scroll-indicator').style.display = 'flex';
        document.getElementById('scroll-text').style.display = 'contents'
    }

    //The entire resize function need to correct in the below para:
    window.addEventListener('resize', resizeAppear);
    function resizeAppear() {
        if (smallscreen.matches) {
            scrollTimeOut = setTimeout(scrollAppear, 0)
        } else {
            document.getElementById('scroll-text').innerText = '';
        }
    };

    document.getElementById('snap-container').addEventListener('scroll', moving);
    function moving() {
        document.getElementById('green-block-2').style.animationName = 'movedown';
        document.getElementById('green-block-1').style.opacity = 0;
        document.getElementById('green-block-2').style.opacity = 100;
    }
}

//for about.html

if (document.getElementById('about')) {
/*
    let buttonArr = [...document.getElementsByClassName('input-button')];

    let IntroChatArr = [...document.getElementById('intro-chat-group').getElementsByClassName('chat-box')];
    let ResumeChatArr = [...document.getElementById('resume-chat-group').getElementsByClassName('chat-box')];
    let ProjectChatArr = [...document.getElementById('project-chat-group').getElementsByClassName('chat-box')];
    let ContactChatArr = [...document.getElementById('contact-chat-group').getElementsByClassName('chat-box')];

    let popUpTimeOut;

    for (let i = 0; i < IntroChatArr.length; i++) {
        popUpTimeOut = setTimeout(popUp, 100 * i);
        function popUp() {
            IntroChatArr[i].style.display = 'block';
        };
    }

    function QA(arr) {
        for (let i = 0; i < arr.length; i++) {
            popUpTimeOut = setTimeout(popUp, 500 * i);
            function popUp() {
                arr[i].style.display = 'block';
            };
        };
    }

    let ChatArr = [...document.getElementsByClassName('chat-box')];
    ChatArr.forEach(a => { a.addEventListener('animationend', scroll) });
    function scroll() {
        document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;
    }

    let count = 0;
    buttonArr.forEach(a => { a.addEventListener('click', send) });
    function send() {
        count += 1;
        document.getElementsByClassName('chat-group')[buttonArr.indexOf(this)].style.order = count;
        document.getElementsByClassName('chat-group')[buttonArr.indexOf(this)].style.display = 'block';
        switch (buttonArr.indexOf(this)) {
            case 0:
                QA(ResumeChatArr);
                break;
            case 1:
                QA(ProjectChatArr);
                break;
            case 2:
                QA(ContactChatArr);
                break;
            default:
                break;
        }
    }

    //since it almost only take 0.1 s to loop from i =0 to i<IntroChatArr.length
    //so there is basically no time interval between two loops
    //the value of settimeout is exaclty the delaytime of each i-th element

    buttonArr.forEach(a => { a.addEventListener('mouseover', inputPreview) });
    function inputPreview() {
        document.getElementById('input-box').setAttribute('placeholder', document.getElementsByClassName('default-input')[buttonArr.indexOf(this)].innerText) //
    }

    buttonArr.forEach(a => { a.addEventListener('mouseout', inputPreviewInit) });
    function inputPreviewInit() {
        document.getElementById('input-box').setAttribute('placeholder', 'New Message') //
    }
*/

    document.getElementById('input-box').addEventListener('change', warning);
    document.getElementById('send-message').addEventListener('click', warning);

    function warning() {
        var x = document.getElementById('warning-bar');
        console.log(x.className);
        //document.getElementById('warning-bar').style.display ='block';
        if (x.className == 'nowarning') {
            x.classList.replace('nowarning', 'warning');
            console.log(x.className);
            setTimeout(function () { x.classList.replace('warning', 'nowarning'); console.log(x.className) }, 2500);
        }
    }

}


//for work.html

if (document.getElementById('work')) {

    let projectArr = [...document.getElementsByClassName('project-block')];
    projectArr.forEach(a => { a.addEventListener('mouseover', infoDisplay) });
    projectArr.forEach(a => { a.addEventListener('mouseout', infoHide) });
    function infoDisplay() {
        if (middlescreen.matches) {
            document.getElementsByClassName('project-info')[projectArr.indexOf(this)].style.display = 'block';
            console.log(document.getElementById('title'));
            document.getElementById('title').style.display = 'none'
        }

    }
    function infoHide() {
        console.log('a');
        document.getElementsByClassName('project-info')[projectArr.indexOf(this)].style.display = 'none';
        document.getElementById('title').style.display = 'block'
    }
}

//for contact.html

if (document.getElementById('contact')) {
document.getElementById('email').addEventListener('click',copyEmail)
function copyEmail(){
    console.log('a');
    navigator.clipboard.writeText('tsangszesze@icloud.com');
    warning();
}
function warning() {
    var x = document.getElementById('warning-bar');
    if (x.className == 'nowarning') {
        x.classList.replace('nowarning', 'warning');
        console.log(x.className);
        setTimeout(function () { x.classList.replace('warning', 'nowarning'); console.log(x.className) }, 2500);
    }
}
}


AOS.init();