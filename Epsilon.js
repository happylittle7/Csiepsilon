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

function TypingAnimaton(TypingLocation){
    let titleTexts = ["About us"], totalText, titleLocation = [".intro-title"],
        titleTag = titleLocation[TypingLocation], titleText = titleTexts[TypingLocation];
    const title = document.querySelector(titleTag).querySelector("h2");
    for(let i = 1; i < titleText.length+1; i++){
        setTimeout( ()=>{
            totalText = titleText.slice(0, i);
            title.innerHTML = totalText;
        }, 100*i + baffa);
    }
}

/*      
        calculating coordinate of each event 
        and initializing each event flag
 */
var eventCoordinate = [], eventFlag = [], eventHandler;
const eventPoints = document.querySelectorAll(".checkPoint");
const eventNum = eventPoints.length;
const headerHeight = document.querySelector(".container").getBoundingClientRect().top;
for(let i = 0; i < eventNum; i++){
    let elem = eventPoints[i];
    let rect = elem.getBoundingClientRect();
    eventCoordinate.push(rect.top + window.pageYOffset - headerHeight);
    eventFlag.push(false);
}

/*      telling device      */
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

    /*      analyzing eventHandler     */
    switch(true){
        case scrolly <= eventCoordinate[0]:
            eventHandler = 0;
            break;
        default:
            eventHandler = 1;
            if(!eventFlag[1]){
                TypingAnimaton(1 - 1);
                eventFlag[1] = true;
            }
    }
    /*      header transparent     */
    const header = document.querySelector(".header");
    if(eventHandler != 0){
        header.classList.add("headerScroll");
    }else{
        header.classList.remove("headerScroll");
    }

    console.log(scrolly, eventHandler);
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
