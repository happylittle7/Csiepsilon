const mask = document.getElementsByClassName("team_window_mask")[0];
const trig = document.querySelectorAll(".card")[0];
trig.addEventListener("click", ()=>{
    mask.classList.add("mask_active");
})


mask.addEventListener("click", ()=>{
    mask.classList.remove("mask_active");
})