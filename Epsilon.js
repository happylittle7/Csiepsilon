
const mask = document.getElementsByClassName("team_window_mask")[0];
const trig = document.querySelector(".card");
trig.addEventListener("click", ()=>{
    mask.classList.add("mask_active");
})


mask.addEventListener("click", ()=>{
    mask.classList.remove("mask_active");
})

var TypingBarBlink = setInterval( ()=>{
    const TypingBar = document.querySelector(".section-title").querySelector("span");
    if(TypingBar.style.visibility == "visible"){
        TypingBar.style.visibility = "hidden";
    }else{
        TypingBar.style.visibility = "visible";
    }
}, 1000)

/*      get title and push into titletexts      */
var titlePos = document.querySelectorAll(".section-title"), titleTexts = [];
for(let i = 0; i < titlePos.length; i++){
    let titleText = titlePos[i].querySelector("h2").getAttribute("id");
    titleTexts.push(titleText);
}

function TypingAnimaton(TypingLocation){
    let titleLocation = document.querySelectorAll(".section-title"), titleTag = titleLocation[TypingLocation].querySelector("h2"), 
        insertText = titleTexts[TypingLocation], totalText;
    for(let i = 1; i < insertText.length+1; i++){
        setTimeout( ()=>{
            totalText = insertText.slice(0, i);
            titleTag.innerHTML = totalText;
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
for(let i = 0; i < eventNum; i++){
    let elem = eventPoints[i].querySelector(".section-title");
    let rect = elem.getBoundingClientRect();
    eventCoordinate.push(rect.top + window.pageYOffset);
    eventFlag.push(false);
}

/*      telling device      */
var scrolly, baffa;
if(window.matchMedia && window.matchMedia('(max-device-width: 960px)').matches){
    baffa = 0;
}else{
    baffa = 500;
}

window.addEventListener("scroll", () =>{
    scrolly = window.scrollY;

    /*      analyzing eventHandler     */
    switch(true){
        case scrolly > eventCoordinate[2]:
            eventHandler = 2;
            if(!eventFlag[eventHandler]){
                TypingAnimaton(eventHandler);
                eventFlag[eventHandler] = true;
            }
            break;
        
        case scrolly > eventCoordinate[1]:
            eventHandler = 2;
            if(!eventFlag[eventHandler]){
                TypingAnimaton(eventHandler);
                eventFlag[eventHandler] = true;
            }
            break;
        
        case scrolly > eventCoordinate[0]:
            eventHandler = 1;
            if(!eventFlag[eventHandler]){
                TypingAnimaton(eventHandler);
                eventFlag[eventHandler] = true;
            }
            break;

        default:
            eventHandler = 0;
            if(!eventFlag[eventHandler]){
                TypingAnimaton(eventHandler);
                eventFlag[eventHandler] = true;
            }
            break;
           
    }
    console.log(eventHandler);
    /*      header transparent     */
    const header = document.querySelector(".header");
    if(scrolly != 0){
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
