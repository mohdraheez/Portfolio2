var body = document.querySelector('body');
var box = document.querySelector('.box');
var hr0 = document.querySelector('.hr0');
var hr1 = document.querySelector('.hr1');
var hr2 = document.querySelector('.hr2');
var hr3 = document.querySelector('.hr3');
var hr4 = document.querySelector('.hr4');
var h = document.querySelector('.h');
var home = document.querySelector('#home');
var aboutdiv = document.querySelector('.aboutdiv');
var skillsdiv = document.querySelector('.skillsdiv');
var about = document.querySelector('#about');
var projectdiv = document.querySelector('.projectdiv');
var skills = document.querySelector('#skills');
var contactdiv = document.querySelector('.contactdiv');
var projects = document.querySelector('#projects');
var contact = document.querySelector('#contact');
var preloader = document.querySelector('.preloader');


//setTimeout(()=>{
 //   preloader.style.display = 'none';
//},1000);

loader();

window.addEventListener('hashchange', function (e) {
    var loc = location.hash;
    if(loc==='#home'){
        h.classList.add('i');
    }
    else{
        h.classList.remove('i');
    }
});


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

function wheeldetector(e) {

    if (e.deltaY > 110) {
        if (flag === 0) {
            swipedup();
            flag = 1;
            setTimeout(() => {
                flag = 0;
            }, 200);
        }

    }
    else if (e.deltaY < -110) {
        if (flag === 0) {
            swipeddown();
            flag = 1;
            setTimeout(() => {
                flag = 0;
            }, 200);
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

var keyflag = 0;
document.addEventListener('keydown', (e) => {
    if (keyflag === 0) {
        if (e.which === 40) {
            swipedup();
        }

        if (e.which === 38) {
            swipeddown();
        }
        keyflag = 1;
    }

    setTimeout(() => {
        keyflag = 0;
    }, 300);
})


function swipedup() {
    var loc = window.location.hash;

    if (loc === '' || loc === '#home') {
        aboutdiv.innerHTML = home.innerHTML;
        location.href = '#about';
        about.classList.add('fadein');
        hr1.classList.add('hrx');
        hr0.classList.remove('hrx');
        h.classList.remove('i');
        aboutdiv.classList.add('fadeoutabout');
        setTimeout(() => {
            aboutdiv.innerHTML = "";
            about.classList.remove('fadein');
            aboutdiv.classList.remove('fadeoutabout');
            aboutdiv.style.visibility = 'hidden';
        }, 1000)
    }
    if (loc === '#about') {
        skillsdiv.innerHTML = about.innerHTML;
        location.href = '#skills';
        skills.classList.add('fadein');
        hr1.classList.remove('hrx');
        hr2.classList.add('hrx');
        skillsdiv.classList.add('fadeoutskills');
        setTimeout(() => {
            skillsdiv.innerHTML = "";
            skillsdiv.classList.remove('fadeoutskills');
            skillsdiv.style.visibility = 'hidden';
            skills.classList.remove('fadein');
        }, 1000)
    }
    if (loc === '#skills') {
        projectdiv.innerHTML = skills.innerHTML;
        location.href = '#projects';
        projects.classList.add('fadein');
        hr2.classList.remove('hrx');
        hr3.classList.add('hrx');
        projectdiv.classList.add('fadeoutprojects');
        setTimeout(() => {
            projectdiv.innerHTML = "";
            projectdiv.style.visibility = 'hidden';
            projects.classList.remove('fadein');
            projectdiv.classList.remove('fadeoutprojects');
        }, 1000)
    }
    if (loc === '#projects') {
        contactdiv.innerHTML = projects.innerHTML;
        location.href = '#contact';
        contact.classList.add('fadein');
        hr3.classList.remove('hrx');
        hr4.classList.add('hrx');
        contactdiv.classList.add('fadeoutcontact');
        setTimeout(() => {
            contactdiv.innerHTML = "";
            contactdiv.style.visibility = 'hidden';
            contact.classList.remove('fadein');
            contactdiv.classList.remove('fadeoutcontact');
        }, 1000)
    }

    if (loc === '#contact') {
        contactdiv.style.visibility = 'hidden';
    }
}


function swipeddown() {
    var loc = window.location.hash;
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

document.querySelector('.open').addEventListener('click', () => {
        document.querySelector('.navelem').style.visibility = 'visible';
        document.querySelector('.navelem').classList.add('navelemin');
        setTimeout(()=>{
            document.querySelector('.navelem').classList.remove('navelemin');
        },250)
})

document.querySelector('.navelemopen').addEventListener('click', () => {
    document.querySelector('.navelem').classList.add('navelemout');
        setTimeout(()=>{
            document.querySelector('.navelem').classList.remove('navelemout');
            document.querySelector('.navelem').style.visibility = 'hidden';
        },250)
})


for (var i = 0; i < 5; i++)
    document.querySelector('.b' + (i + 1)).addEventListener('click', (e) => {
        switchpage(e.target.classList[0]);
        document.querySelector('.navelem').classList.add('navelemout');
        setTimeout(()=>{
            document.querySelector('.navelem').classList.remove('navelemout');
            document.querySelector('.navelem').style.visibility = 'hidden';
        },250)
    });


function removehrx() {
    hr0.classList.remove('hrx');
    hr1.classList.remove('hrx');
    hr2.classList.remove('hrx');
    hr3.classList.remove('hrx');
    hr4.classList.remove('hrx');
}

function switchpage(page) {

    removehrx();

    switch (page) {
        case 'b1':
            location.href = '#home';
            home.classList.add('fadein');
            hr0.classList.add('hrx');
            h.classList.remove('i');
            h.classList.add('i');

            setTimeout(() => {
                home.classList.remove('fadein');
            }, 1000);

            break;

        case 'b2':
            location.href = '#about';
            about.classList.add('fadein');
            hr1.classList.add('hrx');
            h.classList.remove('i');
            setTimeout(() => {
                about.classList.remove('fadein');
            }, 1000);
            break;

        case 'b3':
            location.href = '#skills';
            skills.classList.add('fadein');
            hr2.classList.add('hrx');
            h.classList.remove('i');
            setTimeout(() => {
                skills.classList.remove('fadein');
            }, 1000)
            break;

        case 'b4':
            location.href = '#projects';
            projects.classList.add('fadein');
            hr3.classList.add('hrx');
            h.classList.remove('i');
            setTimeout(() => {
                projects.classList.remove('fadein');
            }, 1000)
            break;

        case 'b5':
            location.href = '#contact';
            contact.classList.add('fadein');
            hr4.classList.add('hrx');
            h.classList.remove('i');
            setTimeout(() => {
                contact.classList.remove('fadein');
            }, 1000)
            break;


    }

}

function loadproject() {
    location.href = 'project.html'
}

function loader() {
    var loc = window.location.hash;

    if (loc === '' || loc === '#home') {
        hr0.classList.add('hrx');
        h.classList.add('i');
        home.classList.add('fadein');
        setTimeout(() => {
            home.classList.remove('fadein');
        }, 1000)
    }

    if (loc === '#about') {
        hr1.classList.add('hrx');
        about.classList.add('fadein');
        setTimeout(() => {
            about.classList.remove('fadein');
        }, 1000)
    }

    if (loc === '#skills') {
        hr2.classList.add('hrx');
        skills.classList.add('fadein');
        setTimeout(() => {
            skills.classList.remove('fadein');
        }, 1000)
    }

    if (loc === '#projects') {
        hr3.classList.add('hrx');
        projects.classList.add('fadein');
        setTimeout(() => {
            projects.classList.remove('fadein');
        }, 1000)
    }

    if (loc === '#contact') {
        hr4.classList.add('hrx');
        contact.classList.add('fadein');
        setTimeout(() => {
            contact.classList.remove('fadein');
        }, 1000)
    }
}
