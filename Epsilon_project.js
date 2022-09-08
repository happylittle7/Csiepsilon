const mask = document.querySelector(".team_window_mask");
const trig = document.querySelectorAll(".card");

for(let i = 0; i < trig.length; i++){
    trig[i].addEventListener("click", ()=>{
        mask.classList.add("mask_active");
        trig[i].querySelector(".team_card").classList.add("team_card_active");
    })
}

mask.addEventListener("click", ()=>{
    mask.classList.remove("mask_active");
    for(let j = 0; j < trig.length; j++){
        trig[j].querySelector(".team_card").classList.remove("team_card_active");
    }
})
