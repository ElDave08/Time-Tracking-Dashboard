
const D_btn = document.querySelector(".D-btn");
const W_btn = document.querySelector(".W-btn");
const M_btn = document.querySelector(".M-btn");

const hours = document.querySelectorAll(".hours");
const daily = document.querySelectorAll(".daily");
const weekly = document.querySelectorAll(".weekly");
const monthly = document.querySelectorAll(".monthly");

const days = ()=>{

    for (divs of hours){
        divs.classList.add("hidden");
    }
    for (divs of daily){
        divs.classList.remove("hidden");
    }

    D_btn.classList.replace("non-selected","selected");

    W_btn.classList.add("non-selected");
    W_btn.classList.remove("selected");
    M_btn.classList.add("non-selected");
    M_btn.classList.remove("selected");
    
}

const weeks = ()=>{
    for (divs of hours){
        divs.classList.add("hidden");
    }
    for (divs of weekly){
        divs.classList.remove("hidden");
    }
    W_btn.classList.replace("non-selected","selected");

    D_btn.classList.add("non-selected");
    D_btn.classList.remove("selected");
    M_btn.classList.add("non-selected");
    M_btn.classList.remove("selected");
}

const months = ()=>{
    for (divs of hours){
        divs.classList.add("hidden");
    }
    for (divs of monthly){
        divs.classList.remove("hidden");
    }

    M_btn.classList.replace("non-selected","selected");

    W_btn.classList.add("non-selected");
    W_btn.classList.remove("selected");
    D_btn.classList.add("non-selected");
    D_btn.classList.remove("selected");
}

D_btn.addEventListener("click", days);

W_btn.addEventListener("click", weeks);

M_btn.addEventListener("click", months);

