const mask = document.getElementsByClassName("mask")[0];
const trig = document.querySelector(".card");
trig.addEventListener("click", ()=>{
    mask.classList.remove("mask-close");
})


mask.addEventListener( "click", () => {
    mask.classList.add("mask-close");
})

window.addEventListener("scroll", () =>{
    let scrolly = window.scrollY;
    const header = document.querySelector(".header");
    if(scrolly != 0){
        header.classList.add("headerScroll");
    }else{
        header.classList.remove("headerScroll");
    }
})

const bar = document.querySelector(".menu-bar");
const ulList = document.querySelector(".ul-list");
bar.addEventListener("click", () => {
    if(ulList.classList.contains("ul-listOpen")){
        ulList.classList.remove("ul-listOpen");
    }else{
        ulList.classList.add("ul-listOpen");
    }
})