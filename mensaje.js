let button = document.querySelector(".submit");
let respuesta = document.querySelector(".respuesta");
let input = document.querySelector(".input");

button.addEventListener("click", function(e){
    if(input.value.includes("@gmail.com")){
        let respu = `<span class = "verde">Se ha enviado su correo</span>`;
        respuesta.innerHTML = respu;
    }
    else{
        let respu = `<span class = "rojo">Lo que ha introducido no es correcto</span>`;
        respuesta.innerHTML = respu;
    }
})