let bars = document.querySelector(".bars");
let xbars = document.querySelector(".x-bar");
let nav = document.querySelector(".nav");
let body = document.querySelector("body")


bars.addEventListener("click", function(e){
    nav.style.transform = "translateX(0%)";
    nav.style.opacity = 1; 
    body.style.overflowY = "hidden";
})

xbars.addEventListener("click",function(e){
    nav.style.transform = "translateX(100%)";
    nav.style.opacity = 0;
    body.style.overflowY = "scroll"
    ;
})
        
    

