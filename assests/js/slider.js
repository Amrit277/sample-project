let slide_text1 = document.getElementById('slide-text1');
let slide_text2 = document.getElementById('slide-text2');
let slide_text3 = document.getElementById('slide-text3');

let slideBtn1 = document.getElementById('slideBtn1');
let slideBtn2 = document.getElementById('slideBtn2');
let slideBtn3 = document.getElementById('slideBtn3');

let vMenu1 = document.getElementById('vMenu1');
let vMenu2 = document.getElementById('vMenu2')

let sliderTextBox = document.querySelector('.sliderTextBox')
let header = document.getElementById('header');
let hamBurger = document.getElementById('hamBurger');
let navBtn = document.getElementById('navBtn');

window.addEventListener('load', ()=>{
    slide_text1.style.transform = 'translateY(70px)';
    slide_text3.style.transform = 'translateY(-10px)';

    vMenu1.style.display = 'none'
    vMenu2.style.display = 'none'
    function myFunction(x) {
        if (x.matches) {
            slide_text1.style.transform = 'translateY(55px)';
            slide_text3.style.transform = 'translateY(-10px)';
        }else{
            slide_text1.style.transform = 'translateY(70px)';
            slide_text3.style.transform = 'translateY(-10px)';
        }
      }
      
      var x = window.matchMedia("(max-width: 430px)")
      myFunction(x)
      x.addListener(myFunction)
})

window.addEventListener('load', ()=>{
    slide_text1.style.transform = 'translateY(70px)';
    slide_text3.style.transform = 'translateY(-10px)';

    vMenu1.style.display = 'none'
    vMenu2.style.display = 'none'
    function myFunction(x) {
        if (x.matches) {
            slide_text1.style.transform = 'translateY(35px)';
            slide_text3.style.transform = 'translateY(-10px)';
        }
      }
      
      var x = window.matchMedia("(max-width: 300px)")
      myFunction(x)
      x.addListener(myFunction)
})

slideBtn1.addEventListener('click', ()=>{
    header.style.background = 'url(/images/slider1.jpg)';
    header.style.backgroundSize = 'cover'
    
    slideBtn1.style.backgroundColor = 'rgb(255, 255, 255)';
    slideBtn2.style.backgroundColor = 'rgba(111, 111, 111, 0.823)';
    slideBtn3.style.backgroundColor = 'rgba(111, 111, 111, 0.823)';
    
    slide_text1.textContent = 'Welcome To';
    slide_text2.textContent = 'Grand';
    slide_text3.textContent = 'Restaurant & Bar Since 1987';
    
    slide_text3.style.display = ''
    vMenu1.style.display = 'none'
    vMenu2.style.display = 'none'
})

slideBtn2.addEventListener('click', ()=>{
    header.style.background = 'url(/images/slider2.jpg)';
    header.style.backgroundSize = 'cover'
    slideBtn2.style.backgroundColor = 'rgb(255, 255, 255)';
    slideBtn1.style.backgroundColor = 'rgba(111, 111, 111, 0.823)';
    slideBtn3.style.backgroundColor = 'rgba(111, 111, 111, 0.823)';

    slide_text1.textContent = 'Get Ready';
    slide_text2.textContent = 'To Fell The Taste';
    
    slide_text3.style.display = 'none'
    vMenu1.style.display = ''
    vMenu2.style.display = 'none'
})

slideBtn3.addEventListener('click', ()=>{
    header.style.background = 'url(/images/slider3.jpg)';
    header.style.backgroundSize = 'cover'
    slideBtn3.style.backgroundColor = 'rgb(255, 255, 255)';
    slideBtn1.style.backgroundColor = 'rgba(111, 111, 111, 0.823)';
    slideBtn2.style.backgroundColor = 'rgba(111, 111, 111, 0.823)';

    slide_text1.textContent = 'Get Ready';
    slide_text2.textContent = '& Join Us';

    slide_text3.style.display = 'none'
    vMenu1.style.display = 'none'
    vMenu2.style.display = ''
})

let count = 2;

setInterval(() => {
    let current = document.getElementById('slideBtn' + count);
    current.click();
    count++;
    if(count > 3){
        count = 1;
    }
}, 5000);

vMenu1.addEventListener('click', ()=>{
    document.getElementById('menu').scrollIntoView({
        behavior : 'smooth'
    })
})

vMenu2.addEventListener('click', ()=>{
    document.getElementById('bookATable').scrollIntoView({
        behavior : 'smooth'
    })
})

if(window.matchMedia('(max-width: 1000px)').matches){
    vMenu2.addEventListener('click', ()=>{
        document.getElementById('mediumBookATable').scrollIntoView({
            behavior : 'smooth'
        })
    })
}

if(window.matchMedia('(max-width: 550px)').matches){
    vMenu2.addEventListener('click', ()=>{
        document.getElementById('smallBookATable').scrollIntoView({
            behavior : 'smooth'
        })
    })
}