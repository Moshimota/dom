let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let menu = document.querySelector('.menu');

btn1.onclick = () => {
    btn1.style.display = 'none';
    btn2.style.display = 'block';
    menu.style.display = 'block';
}

btn2.onclick = () => {
    btn2.style.display = 'none';
    btn1.style.display = 'block';
    menu.style.display = 'none';
}