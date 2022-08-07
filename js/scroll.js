let menu = document.querySelector('#menu')
let navLink = document.querySelectorAll('.nav .nav-buttons a');
let navLinkS = document.querySelectorAll('.smallNav .nav-buttons a');
let section = document.querySelectorAll('.section');
let nav = document.querySelector('nav');

navLink.forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        let ele = document.getElementById(anchor.getAttribute("href"))
        ele.scrollIntoView({
            behavior : 'smooth'
        })
    })
})

navLinkS.forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        let ele = document.getElementById(anchor.getAttribute("href"))
        ele.scrollIntoView({
            behavior : 'smooth'
        })
        hamBurger.click()
    })
})

let cou = 2;

setInterval(() => {
    let sImg = document.getElementById('sImg')
    let eImg = document.getElementById('eImg')
    
    let eCou = cou + 1;
    if(eCou == 7){
        eCou = 1
    }

    sImg.style.background = `url(/images/gallary/gallary${cou}.jpg) center`
    eImg.style.background = `url(/images/gallary/gallary${eCou}.jpg) center`
    sImg.style.backgroundSize = `cover`
    eImg.style.backgroundSize = `cover`
    cou++;
    if(cou > 6){
        cou = 1;
    }
}, 5000);

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('sticky', window.scrollY > 0)
    if(window.scrollY > 0){
        document.getElementById('hamBurger').style.color = 'black'
        document.getElementById('logo').src = './images/logo.png'
        document.getElementById('smallLogo').src = './images/logo.png'
    }
    if(window.scrollY == 0){
        document.getElementById('logo').src = '/images/white-logo.png'
        document.getElementById('smallLogo').src = '/images/white-logo.png'
        document.getElementById('hamBurger').style.color = 'white'
    }
})

window.onscroll = ()=>{
    if((document.getElementById('header').getBoundingClientRect().y < 100) && (document.getElementById('header').getBoundingClientRect().y > -100)){
        document.querySelectorAll('.navLink').forEach(ele =>{
            ele.classList.remove('current');
            document.querySelector('a[href="header"]').classList.add('current');
        })
    }
    if((document.getElementById('story').getBoundingClientRect().y < 100) && (document.getElementById('story').getBoundingClientRect().y > -100)){
        document.querySelectorAll('.navLink').forEach(ele =>{
            ele.classList.remove('current');
            document.querySelector('a[href="story"]').classList.add('current');
        })
    }
    if((document.getElementById('menu').getBoundingClientRect().y < 100) && (document.getElementById('menu').getBoundingClientRect().y > -100)){
        document.querySelectorAll('.navLink').forEach(ele =>{
            ele.classList.remove('current');
            document.querySelector('a[href="menu"]').classList.add('current');
        })
    }
    if((document.getElementById('bookATable').getBoundingClientRect().y < 100) && (document.getElementById('bookATable').getBoundingClientRect().y > -100)){
        document.querySelectorAll('.navLink').forEach(ele =>{
            ele.classList.remove('current');
            document.querySelector('a[href="bookATable"]').classList.add('current');
        })
    }
    if((document.getElementById('gallarySlider').getBoundingClientRect().y < 100) && (document.getElementById('gallarySlider').getBoundingClientRect().y > -100)){
        document.querySelectorAll('.navLink').forEach(ele =>{
            ele.classList.remove('current');
            document.querySelector('a[href="gallarySlider"]').classList.add('current');
        })
    }
    if((document.getElementById('mainFooter').getBoundingClientRect().y < 100) && (document.getElementById('mainFooter').getBoundingClientRect().y > -100)){
        document.querySelectorAll('.navLink').forEach(ele =>{
            ele.classList.remove('current');
            document.querySelector('a[href="mainFooter"]').classList.add('current');
        })
    }

    let  toRev = document.querySelectorAll(".toRev");
    
    for(let i=0; i < toRev.length; i++){
        if((document.getElementById(toRev[i].id).getBoundingClientRect().y < 400) && (document.getElementById(toRev[i].id).getBoundingClientRect().y > -300)){
            document.getElementById(toRev[i].id).classList.add('active');
        }
    }
}

hamBurger.onclick = ()=>{
    navBtn.classList.toggle('nav-buttons-active');
    document.querySelector('nav').classList.toggle('bugOpen');

    if((nav.className == 'bugOpen') && (window.scrollY == 0)){
        smallLogo.src = './images/logo.png'
        hamBurger.style.color = 'black'
    }
    else if((nav.className == 'bugOpen') && (window.scrollY > 0)){
        smallLogo.src = './images/logo.png'
        hamBurger.style.color = 'black'
    }
    
    if((nav.className !== 'bugOpen') && (window.scrollY == 0)){
        smallLogo.src = './images/white-logo.png'
        hamBurger.style.color = 'white'
    }    
    if((nav.className !== 'bugOpen') && (window.scrollY > 0)){
        smallLogo.src = './images/logo.png'
        hamBurger.style.color = 'black'
    }    
}