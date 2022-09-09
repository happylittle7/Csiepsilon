const mask = document.querySelector(".team_window_mask");
const trig = document.querySelectorAll(".card");
const closeButton = document.querySelector(".close_button");
const body = document.querySelector("body");

function openCard(i){
    body.classList.add("body_stick");
    mask.classList.add("mask_active");
    trig[i].querySelector(".team_card").classList.add("team_card_active");
    closeButton.classList.add("close_button_active")
}

function closeCard(){
    body.classList.remove("body_stick");
    mask.classList.remove("mask_active");
    for(let j = 0; j < trig.length; j++){
        trig[j].querySelector(".team_card").classList.remove("team_card_active");
    }
    closeButton.classList.remove("close_button_active");
}

// open card
for(let i = 0; i < trig.length; i++){
    trig[i].addEventListener("click", ()=>{
        openCard(i);
    })
}

// close card
mask.addEventListener("click", ()=>{
    closeCard();
})
closeButton.addEventListener("click", ()=>{
    closeCard();
})
