
    /*      header transparent     */
window.addEventListener("scroll", () =>{
    let scrolly = window.scrollY;
    
    const header = document.querySelector(".header");
    if(scrolly != 0){
        header.classList.add("headerScroll");
    }else{
        header.classList.remove("headerScroll");
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

