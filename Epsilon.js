/*
const mask = document.getElementsByClassName("mask")[0];
const trig = document.querySelector(".card");
trig.addEventListener("click", ()=>{
    mask.classList.remove("mask-close");
})


mask.addEventListener( "click", () => {
    mask.classList.add("mask-close");
})
*/
var TypingBarBlink = setInterval( ()=>{
    const TypingBar = document.querySelector(".intro-title").querySelector("span");
    if(TypingBar.style.visibility == "visible"){
        TypingBar.style.visibility = "hidden";
    }else{
        TypingBar.style.visibility = "visible";
    }
}, 1000)

function TypingAnimaton(){
    let titleText = ["About us"], totalText;  
    const title = document.querySelector(".intro-title").querySelector("h2");
    for(let i = 1; i < titleText[0].length+1; i++){
        setTimeout( ()=>{
            totalText = titleText[0].slice(0, i);
            title.innerHTML = totalText;
        }, 100*i + baffa);
    }
}
var eventCoordinate = [], eventFlag = [];
const eventPoints = document.querySelectorAll(".checkPoint");
const eventNum = eventPoints.length;
for(let i = 0; i < eventNum; i++){
    let elem = eventPoints[i];
    let rect = elem.getBoundingClientRect();
    eventCoordinate.push(rect.top + window.pageYOffset);
    eventFlag.push(false);
}


var parent, scrolly, baffa;
if(window.matchMedia && window.matchMedia('(max-device-width: 960px)').matches){
    parent = window;
    baffa = 0;
}else{
    parent = document.querySelector(".container");   
    baffa = 500;
}

parent.addEventListener("scroll", () =>{
    if(window.matchMedia && window.matchMedia('(max-device-width: 960px)').matches){
        scrolly = parent.scrollY;
    }else{ 
        scrolly = parent.scrollTop;
    }
    
    const header = document.querySelector(".header");
    if(scrolly != 0){
        header.classList.add("headerScroll");
    }else{
        header.classList.remove("headerScroll");
    }
    console.log(scrolly);
    if(scrolly > eventCoordinate[0] && !eventFlag[0]){
        TypingAnimaton();
        eventFlag[0] = true;
    }
})


/*      side-bar      */
const bar = document.querySelector(".menu-bar");
const ulList = document.querySelector(".ul-list");
const ulMask = document.querySelector(".ul-mask");
const menuBar = document.querySelector(".menu-bar");

function removeClass(){
    ulList.classList.remove("ul-list_active");
    ulMask.classList.remove("ul-mask_active");
    menuBar.classList.remove("menu-bar_active");
}
function addClass(){
    ulList.classList.add("ul-list_active");
    ulMask.classList.add("ul-mask_active");
    menuBar.classList.add("menu-bar_active");
}

bar.addEventListener("click", () => {
    if(ulList.classList.contains("ul-list_active")){
        removeClass();
    }else{
        addClass();
    }
})
ulMask.addEventListener("click", () => {
    removeClass();
})
