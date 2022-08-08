let themeBtn =  document.getElementById('themeBtn');
let themeBall =  document.getElementById('themeBall');
let themeCss =  document.getElementById('themeCss');
let logo = document.getElementById('logo');
let themeIcon = document.getElementById('themeIcon')

localStorage.setItem('theme', 'light')

if(localStorage.getItem('theme') == 'dark'){
    // Locate The Changes Css File
    themeCss.href = './assests/css/theme.css'
}
else if(localStorage.getItem('theme') == 'light'){
    themeCss.href = ''
}

themeBtn.addEventListener('click', ()=>{
    // Checking For Current Theme
    if(localStorage.getItem('theme') == 'light'){
        localStorage.setItem('theme', 'dark')
    }

    else if(localStorage.getItem('theme') == 'dark'){
        localStorage.setItem('theme', 'light')
    }

    console.log(localStorage.getItem('theme'));

    // Applying Theme style
    if(localStorage.getItem('theme') == 'dark'){
        themeCss.href = './assests/css/theme.css';
        logo.src = './images/logo.png';
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    else if(localStorage.getItem('theme') == 'light'){
        themeCss.href = ''
        logo.src = './images/white-logo.png'
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun')
    }
})
