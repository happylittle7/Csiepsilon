
var TypingBarBlink = setInterval( ()=>{
    const TypingBar = document.querySelectorAll(".section-title");
    TypingBar.forEach(Element => {
        let TypingBarPos = Element.querySelector("span");
        if(TypingBarPos.style.visibility == "visible"){
            TypingBarPos.style.visibility = "hidden";
        }else{
            TypingBarPos.style.visibility = "visible";
        }
    });
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
    
})
