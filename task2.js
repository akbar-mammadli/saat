let hour = document.querySelector('.hour');
let minut = document.querySelector('.minut');
let second = document.querySelector('.second');

setInterval(()=>{
    let date = new Date();

    let s = date.getSeconds();
    let m = date.getMinutes();
    let h = date.getHours();

    second.style.transform = 'rotateZ('+ (s*6) +'deg)';
    minut.style.transform = 'rotateZ('+ (m*6 + s / 10) +'deg)'; 
    hour.style.transform = 'rotateZ('+ (h*30 + m / 2) +'deg)';
} ,1000)