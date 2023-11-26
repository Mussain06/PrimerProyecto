let adelante = document.querySelector(".adelante");
let opciones = document.querySelector(".opciones");
let atra = document.querySelector(".atra");
let posicion = 1;

adelante.addEventListener("click", function(e){
    if(posicion == 1){
        opciones.style.transform = "translateX(-33%)";
        posicion++;
    }
    else if(posicion == 2){
        opciones.style.transform = "translateX(-66%)";
        posicion++;
    }
    else{
        opciones.style.transform = "translateX(0%)";
        posicion = 1;
    }
    

})

atra.addEventListener("click", function(e){
    if(posicion==3){
        opciones.style.transform = "translateX(-33%)";
        posicion = 2;
    }
    else if(posicion == 2){
        opciones.style.transform = "translateX(-0%)";
        posicion = 1;
    }
    else{
        opciones.style.transform = "translateX(-66%)";
        posicion = 3;
    }
})
