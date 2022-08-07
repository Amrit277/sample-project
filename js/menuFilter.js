let filAll = document.getElementById('filAll');
let filBreakfast = document.getElementById('filBreakfast');
let filLunch = document.getElementById('filLunch');
let filDinner = document.getElementById('filDinner');
let filSweet = document.getElementById('filSweet');
let filSnacks = document.getElementById('filSnacks');
let filSel = document.querySelector('.filSel');
let foodItems = document.querySelector('.foodItems');
let lastList = document.querySelectorAll('.lastList');

let foodItem = document.querySelectorAll('.foodItem')
let breakfast = document.querySelectorAll('.breakfast');
let lunch = document.querySelectorAll('.lunch');
let dinner = document.querySelectorAll('.dinner');
let snacks = document.querySelectorAll('.snacks');
let sweet = document.querySelectorAll('.sweet');

// console.log(breakfast[0].innerHTML)

filAll.addEventListener('click', ()=>{
    foodItem.forEach(ele => {
        ele.classList.add('nonVisible');
    });
    filSel.classList.remove('filSel')
    filAll.classList.add('filSel');
    filSel = document.querySelector('.filSel');
    foodItem.forEach(ele => {
        ele.classList.remove('nonVisible');
    });
    lastList.forEach(ele=>{
        ele.classList.add('nonVisible')
    })
})

filBreakfast.addEventListener('click', ()=>{
    foodItem.forEach(ele => {
        ele.classList.add('nonVisible');
        ele.classList.remove('visible')
    });
    filSel.classList.remove('filSel')
    filBreakfast.classList.add('filSel')
    filSel = document.querySelector('.filSel');
    breakfast.forEach(ele=>{
        ele.classList.remove('nonVisible')
        ele.classList.add('visible')
    })
})

filLunch.addEventListener('click', ()=>{
    foodItem.forEach(ele => {
        ele.classList.add('nonVisible');
        ele.classList.remove('visible');
    });
    filSel.classList.remove('filSel')
    filLunch.classList.add('filSel')
    filSel = document.querySelector('.filSel');
    lunch.forEach(ele=>{
        ele.classList.remove('nonVisible')
        ele.classList.add('visible')
    })
})

filDinner.addEventListener('click', ()=>{
    foodItem.forEach(ele => {
        ele.classList.add('nonVisible');
        ele.classList.remove('visible')
    });
    filSel.classList.remove('filSel')
    filDinner.classList.add('filSel')
    filSel = document.querySelector('.filSel');
    dinner.forEach(ele=>{
        ele.classList.remove('nonVisible');
        ele.classList.add('visible')
    })
})

filSweet.addEventListener('click', ()=>{
    foodItem.forEach(ele => {
        ele.classList.add('nonVisible');
        ele.classList.remove('visible')
    });
    filSel.classList.remove('filSel')
    filSweet.classList.add('filSel')
    filSel = document.querySelector('.filSel');
    sweet.forEach(ele=>{
        ele.classList.remove('nonVisible');
        ele.classList.add('visible')
    })
})

filSnacks.addEventListener('click', ()=>{
    foodItem.forEach(ele => {
        ele.classList.add('nonVisible');
        ele.classList.remove('visible')
    });
    filSel.classList.remove('filSel')
    filSnacks.classList.add('filSel')
    filSel = document.querySelector('.filSel');
    snacks.forEach(ele=>{
        ele.classList.remove('nonVisible');
        ele.classList.add('visible')
    })
})