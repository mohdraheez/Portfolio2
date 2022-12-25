var body = document.querySelector('body');
var box = document.querySelector('.box');
var hr0 = document.querySelector('.hr0');
var hr1 =  document.querySelector('.hr1');
var hr2 = document.querySelector('.hr2');
var hr3 = document.querySelector('.hr3');
var hr4 = document.querySelector('.hr4');
var h =  document.querySelector('.h');
var home = document.querySelector('#home');
var aboutdiv = document.querySelector('.aboutdiv');
var skillsdiv =  document.querySelector('.skillsdiv');
var about = document.querySelector('#about');
var projectdiv = document.querySelector('.projectdiv');
var skills = document.querySelector('#skills');
var contactdiv = document.querySelector('.contactdiv');
var projects = document.querySelector('#projects');
var contact = document.querySelector('#contact');

body.addEventListener('pointermove', (e) => {

    if (isMobile.any() === null) {
        var x = e.clientX;
        var y = e.clientY;
        var tempx = x / 500;
        var tempy = y / 250;
        tempx = 30 - tempx;
        tempy = -tempy;
        box.style.left = tempx + "rem";
        box.style.top = tempy + "rem";
    }
})

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

let touchstartY = 0
let touchendY = 0
var flag = 0;

hr0.classList.add('hrx');
h.classList.add('i');        
addContents();
home.classList.add('fadein');

function addContents(){
    aboutdiv.innerHTML = home.innerHTML;
    skillsdiv.innerHTML = about.innerHTML;
    projectdiv.innerHTML = skills.innerHTML;
    contactdiv.innerHTML = projects.innerHTML;
}

function removeContent(){
    aboutdiv.innerHTML = "";
   skillsdiv.innerHTML = "";
    projectdiv.innerHTML = "";
    contactdiv.innerHTML = "";
}

setTimeout(() => {
    home.classList.remove('fadein');
}, 1000)


function wheeldetector(e) {

        if (e.deltaY > 110) {
            if(flag===0){
                swipedup();
                flag=1;
                setTimeout(()=>{
                    flag=0;
                },200);
            }

        }
        else if (e.deltaY < -110) {
            if(flag===0){
                swipeddown();
                flag=1;
                setTimeout(()=>{
                    flag=0;
                },200);
            }
        }
}

document.addEventListener('wheel', wheeldetector);

function checkDirection() {

    if (touchendY < touchstartY) {
        swipedup();
    }

    if (touchendY > touchstartY) {
        swipeddown();
    }

}

document.addEventListener('touchstart', e => {
    touchstartY = e.changedTouches[0].screenY
})

document.addEventListener('touchend', e => {
    touchendY = e.changedTouches[0].screenY
    checkDirection()
})

var keyflag=0;
document.addEventListener('keydown', (e) => {
    if(keyflag===0){
        if (e.which === 40) {
            swipedup();
        }
    
        if (e.which === 38) {
            swipeddown();
        }
        keyflag = 1;
    }

    setTimeout(()=>{
        keyflag = 0;
    },300);
})


function swipedup() {
    addContents();
    var loc = window.location.hash;
    if (loc === '' || loc === '#home') {
        location.href = '#about';
        about.classList.add('fadein');
        hr1.classList.add('hrx');
        hr0.classList.remove('hrx');
        h.classList.remove('i');
        aboutdiv.classList.add('fadeoutabout');
        setTimeout(() => {
            about.classList.remove('fadein');
            aboutdiv.classList.remove('fadeoutabout');
            aboutdiv.style.visibility = 'hidden';
        }, 1000)
    }
    if (loc === '#about') {
        location.href = '#skills';
        skills.classList.add('fadein');
       hr1.classList.remove('hrx');
        hr2.classList.add('hrx');
       skillsdiv.classList.add('fadeoutskills');
        setTimeout(() => {
           skillsdiv.classList.remove('fadeoutskills');
           skillsdiv.style.visibility = 'hidden';
            skills.classList.remove('fadein');
        }, 1000)
    }
    if (loc === '#skills') {
        location.href = '#projects';
        projects.classList.add('fadein');
        hr2.classList.remove('hrx');
        hr3.classList.add('hrx');
        projectdiv.classList.add('fadeoutprojects');
        setTimeout(() => {
            projectdiv.style.visibility = 'hidden';
            projects.classList.remove('fadein');
            projectdiv.classList.remove('fadeoutprojects');
        }, 1000)
    }
    if (loc === '#projects') {
        location.href = '#contact';
        contact.classList.add('fadein');
        hr3.classList.remove('hrx');
        hr4.classList.add('hrx');
        contactdiv.classList.add('fadeoutcontact');
        setTimeout(() => {
            contactdiv.style.visibility = 'hidden';
            contact.classList.remove('fadein');
            contactdiv.classList.remove('fadeoutcontact');
        }, 1000)
    }

    if(loc==='#contact'){
        contactdiv.style.visibility = 'hidden';
    }
}


function swipeddown() {
    var loc = window.location.hash;
    removeContent();
    if (loc === '#about') {
        location.href = '#home';
        home.classList.add('fadein');
        hr0.classList.add('hrx');
       hr1.classList.remove('hrx');
        h.classList.remove('i');
        h.classList.add('i');
        aboutdiv.style.visibility = 'visible';
        setTimeout(() => {
            home.classList.remove('fadein');
        }, 1000)
    }
    if (loc === '#skills') {
        location.href = '#about';
         about.classList.add('fadein');
       hr1.classList.add('hrx');
        hr2.classList.remove('hrx');
       skillsdiv.style.visibility = 'visible';
        setTimeout(() => {
            about.classList.remove('fadein');
        }, 1000)
    }
    if (loc === '#projects') {
        location.href = '#skills';
        skills.classList.add('fadein');
        hr2.classList.add('hrx');
        hr3.classList.remove('hrx');
        projectdiv.style.visibility = 'visible';
        setTimeout(() => {
            skills.classList.remove('fadein');
        }, 1000)
    }
    if (loc === '#contact') {
        location.href = '#projects';
        projects.classList.add('fadein');
        hr3.classList.add('hrx');
        hr4.classList.remove('hrx');
        contactdiv.style.visibility = 'visible';
        setTimeout(() => {
            projects.classList.remove('fadein');
        }, 1000)
    }
}
document.addEventListener('mousemove', function (e) {
    if(e.clientX>120 && e.clientX<500){
     var imgs = [
         'r.png',
         'html.png',
         'css.png',
         'flower.png',
         'js.png'
     ]

     var rand = Math.floor(Math.random() * 5);
     let div = document.createElement('div');
     div.classList.add('div1');
     let star = document.createElement('img');
     star.classList.add('star');
     star.setAttribute("name", "star");
     star.setAttribute("src", "public/" + imgs[rand]);
     let x = e.offsetX;
     let y = e.offsetY;
     
     div.style.left = x + 'px';
     div.style.top = y + 'px';
 
     let size = Math.random() * 20;
 
     star.style.width = 20 + size + 'px';
     star.style.height = 20 + size + 'px';
 
 
     let transformValue = Math.random() * 360;
     div.style.transform = 'rotate(' + transformValue + 'deg)';
 
     div.appendChild(star);
     body.appendChild(div);
 
     setTimeout(function () {
         star.remove();
     }, 500)
    }
 })

 document.querySelector('.open').addEventListener('click',()=>{
    if(document.querySelector('.btnimg').getAttribute('src')==='public/bar.png'){
        document.querySelector('.btnimg').setAttribute('src','public/x.png')
        for(var i=0;i<5;i++){
            document.querySelector('.b'+(i+1)).classList.add('btn');
        }
    }
    else{
        document.querySelector('.btnimg').setAttribute('src','public/bar.png')
        
            for(var i=0;i<5;i++){
            document.querySelector('.b'+(i+1)).classList.add('btnout');
            }
            
            setTimeout(()=>{
                for(var i=0;i<5;i++){
                document.querySelector('.b'+(i+1)).classList.remove('btn');
                document.querySelector('.b'+(i+1)).classList.remove('btnout');
                }
            },950)
        
    }
})


for(var i=0;i<5;i++)
    document.querySelector('.b'+(i+1)).addEventListener('click',(e)=>{ 
        switchpage(e.target.classList[0]);
});


function removehrx(){
    hr0.classList.remove('hrx');
    hr1.classList.remove('hrx');
    hr2.classList.remove('hrx');
    hr3.classList.remove('hrx');
    hr4.classList.remove('hrx');
}

function switchpage(page){

    removeContent();
    removehrx();

    switch(page){
        case 'b1':
            location.href = '#home';
            home.classList.add('fadein');
            hr0.classList.add('hrx');
            h.classList.remove('i');
            h.classList.add('i');

            setTimeout(()=>{
                home.classList.remove('fadein');
            },1000);

        break;

        case 'b2':
            location.href = '#about';
            about.classList.add('fadein');
           hr1.classList.add('hrx');
            h.classList.remove('i');
            setTimeout(()=>{
                about.classList.remove('fadein');
            },1000);
        break;

        case 'b3':
            location.href = '#skills';
            skills.classList.add('fadein');
            hr2.classList.add('hrx');
            h.classList.remove('i');
            setTimeout(() => {
                skills.classList.remove('fadein');
            },1000)
        break;

        case 'b4':
            location.href = '#projects';
            projects.classList.add('fadein');
            hr3.classList.add('hrx');
            h.classList.remove('i');
            setTimeout(() => {
                projects.classList.remove('fadein');
            },1000)
        break;

        case 'b5':
            location.href = '#contact';
            contact.classList.add('fadein');
            hr4.classList.add('hrx');
            h.classList.remove('i');
            setTimeout(() => {
                contact.classList.remove('fadein');
            },1000)
        break;


    }

}