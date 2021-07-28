
const prev1 = document.getElementById('prev-btn1');
const next1 = document.getElementById('next-btn1');
const prev2 = document.getElementById('prev-btn2');
const next2 = document.getElementById('next-btn2');
const slide1 = document.querySelector('.slide-one');
const slide2 = document.querySelector('.slide-two');


prev1.addEventListener('click', changeState);
next1.addEventListener('click', changeState);
prev2.addEventListener('click', changeState1);
next2.addEventListener('click', changeState1);

function changeState(){
    if(slide2.classList.contains(".active")){
        slide1.classList.remove("active");
        slide2.classList.add("active");

    }
    else{
        slide1.classList.add("active");
        slide2.classList.remove("active");
    }
}

function changeState1(){
    if(slide1.classList.contains(".active")){
        slide2.classList.remove("active");
        slide1.classList.add("active");

    }
    else{
        slide2.classList.add("active");
        slide1.classList.remove("active");
    }
}
    

