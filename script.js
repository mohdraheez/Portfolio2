document.querySelector('body').addEventListener('pointermove', (e) => {

    if (isMobile.any() === null) {
        var x = e.clientX;
        var y = e.clientY;
        var tempx = x / 500;
        var tempy = y / 250;
        tempx = 30 - tempx;
        tempy = -tempy;
        document.querySelector('.box').style.left = tempx + "rem";
        document.querySelector('.box').style.top = tempy + "rem";
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

document.querySelector('.hr0').classList.add('hrx');
document.querySelector('.h').classList.add('i');        
document.querySelector('.aboutdiv').innerHTML = document.querySelector('.home').innerHTML;
document.querySelector('.skillsdiv').innerHTML = document.querySelector('.about').innerHTML;
document.querySelector('.projectdiv').innerHTML = document.querySelector('.skills').innerHTML;
document.querySelector('.contactdiv').innerHTML = document.querySelector('.projects').innerHTML;
document.querySelector('#home').classList.add('fadein');

setTimeout(() => {
    document.querySelector('#home').classList.remove('fadein');
}, 1000)


function wheeldetector(e) {

    if (flag === 0) {
        flag = 1;
        if (e.deltaY > 24) {
            swipedup();
        }
        else if (e.deltaY < -24) {
            swipeddown();
        }
        setTimeout(() => {
            flag = 0;
        }, 300)

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
    },500);
})


function swipedup() {
    var loc = window.location.hash;
    if (loc === '' || loc === '#home') {
        location.href = '#about';
        document.querySelector('#about').classList.add('fadein');
        document.querySelector('.hr1').classList.add('hrx');
        document.querySelector('.hr0').classList.remove('hrx');
        document.querySelector('.h').classList.add('fadeout');
        document.querySelector('.aboutdiv').classList.add('fadeoutabout');
        setTimeout(() => {
            document.querySelector('.h').classList.remove('fadeout');
            document.querySelector('.h').classList.remove('i');
            document.querySelector('#about').classList.remove('fadein');
            document.querySelector('.aboutdiv').classList.remove('fadeoutabout');
            document.querySelector('.aboutdiv').style.visibility = 'hidden';
        }, 1000)
    }
    if (loc === '#about') {
        location.href = '#skills';
        document.querySelector('#skills').classList.add('fadein');
        document.querySelector('.hr1').classList.remove('hrx');
        document.querySelector('.hr2').classList.add('hrx');
        document.querySelector('.skillsdiv').classList.add('fadeoutskills');
        setTimeout(() => {
            document.querySelector('.skillsdiv').classList.remove('fadeoutskills');
            document.querySelector('.skillsdiv').style.visibility = 'hidden';
            document.querySelector('#skills').classList.remove('fadein');
        }, 1000)
    }
    if (loc === '#skills') {
        location.href = '#projects';
        document.querySelector('#projects').classList.add('fadein');
        document.querySelector('.hr2').classList.remove('hrx');
        document.querySelector('.hr3').classList.add('hrx');
        document.querySelector('.projectdiv').classList.add('fadeoutprojects');
        setTimeout(() => {
            document.querySelector('.projectdiv').style.visibility = 'hidden';
            document.querySelector('#projects').classList.remove('fadein');
            document.querySelector('.projectdiv').classList.remove('fadeoutprojects');
        }, 1000)
    }
    if (loc === '#projects') {
        location.href = '#contact';
        document.querySelector('#contact').classList.add('fadein');
        document.querySelector('.hr3').classList.remove('hrx');
        document.querySelector('.hr4').classList.add('hrx');
        document.querySelector('.contactdiv').classList.add('fadeoutcontact');
        setTimeout(() => {
            document.querySelector('.contactdiv').style.visibility = 'hidden';
            document.querySelector('#contact').classList.remove('fadein');
            document.querySelector('.contactdiv').classList.remove('fadeoutcontact');
        }, 1000)
    }
}


function swipeddown() {
    var loc = window.location.hash;
    if (loc === '#about') {
        location.href = '#home';
        document.querySelector('#home').classList.add('fadein');
        document.querySelector('.hr0').classList.add('hrx');
        document.querySelector('.hr1').classList.remove('hrx');
        document.querySelector('.h').classList.remove('i');
        document.querySelector('.h').classList.add('i');
        document.querySelector('.aboutdiv').style.visibility = 'visible';
        setTimeout(() => {
            document.querySelector('#home').classList.remove('fadein');
        }, 1000)
    }
    if (loc === '#skills') {
        location.href = '#about';
         document.querySelector('#about').classList.add('fadein');
        document.querySelector('.hr1').classList.add('hrx');
        document.querySelector('.hr2').classList.remove('hrx');
        document.querySelector('.skillsdiv').style.visibility = 'visible';
        setTimeout(() => {
            document.querySelector('#about').classList.remove('fadein');
        }, 1000)
    }
    if (loc === '#projects') {
        location.href = '#skills';
        document.querySelector('#skills').classList.add('fadein');
        document.querySelector('.hr2').classList.add('hrx');
        document.querySelector('.hr3').classList.remove('hrx');
        document.querySelector('.projectdiv').style.visibility = 'visible';
        setTimeout(() => {
            document.querySelector('#skills').classList.remove('fadein');
        }, 1000)
    }
    if (loc === '#contact') {
        location.href = '#projects';
        document.querySelector('#projects').classList.add('fadein');
        document.querySelector('.hr3').classList.add('hrx');
        document.querySelector('.hr4').classList.remove('hrx');
        document.querySelector('.contactdiv').style.visibility = 'visible';
        setTimeout(() => {
            document.querySelector('#projects').classList.remove('fadein');
        }, 1000)
    }
}

