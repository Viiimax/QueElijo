const input = document.querySelector("#input");
const granDiv = document.querySelector("#granDiv");
const titulo = document.querySelector("h1");
const parrafo = document.querySelector("#p")
const agregar = document.querySelector("#agregar");
const palabras = document.querySelector("#palabras");
const listo = document.querySelector("#listo");
const result = document.querySelector(".result");
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const result3 = document.querySelector(".result3");
const result4 = document.querySelector(".result4");
const result6 = document.querySelector(".result6");
const result7 = document.querySelector(".result7");
const result8 = document.querySelector(".result8");
const result9 = document.querySelector(".result9");

function carga(){
    setTimeout(() => {
    granDiv.removeAttribute("class");
    titulo.removeAttribute("class");
    parrafo.removeAttribute("class");
    granDiv.setAttribute("class", "animate__animated animate__fadeInUp");
    titulo.setAttribute("class", "animate__animated animate__fadeInDown");
    parrafo.setAttribute("class", "animate__animated animate__fadeInDown")
    }, 1000);
}
carga();


let lista = [];
agregar.addEventListener("click", function pulsar () {
    let nuevo = document.createElement("LI");
    if(/\w|\d/.test(input.value) === true){
    lista.push(input.value);
    nuevo.innerHTML = input.value;
    palabras.appendChild(nuevo);
    nuevo.setAttribute("class", "animate__animated animate__fadeInLeft")
    input.value = "";
    }
});

listo.addEventListener("click", function(){
    result.innerHTML = lista[parseInt(Math.random()*lista.length)];
    result1.innerHTML = lista[parseInt(Math.random()*lista.length)];
    result2.innerHTML = lista[parseInt(Math.random()*lista.length)];
    result3.innerHTML = lista[parseInt(Math.random()*lista.length)];
    result4.innerHTML = lista[parseInt(Math.random()*lista.length)];
    result6.innerHTML = lista[parseInt(Math.random()*lista.length)];
    result7.innerHTML = lista[parseInt(Math.random()*lista.length)];
    result8.innerHTML = lista[parseInt(Math.random()*lista.length)];
    result9.innerHTML = lista[parseInt(Math.random()*lista.length)];

    result.setAttribute("class", "animate__animated animate__fadeInRight");
    result1.setAttribute("class", "animate__animated animate__fadeInRight");
    result2.setAttribute("class", "animate__animated animate__fadeInRight");
    result3.setAttribute("class", "animate__animated animate__fadeInRight");
    result4.setAttribute("class", "animate__animated animate__fadeInRight");
    result6.setAttribute("class", "animate__animated animate__fadeInRight");
    result7.setAttribute("class", "animate__animated animate__fadeInRight");
    result8.setAttribute("class", "animate__animated animate__fadeInRight");
    result9.setAttribute("class", "animate__animated animate__fadeInRight");
    animacion();
    function animacion (){
        setTimeout(() => {
            result.removeAttribute("class");
            result1.removeAttribute("class");
            result2.removeAttribute("class");
            result3.removeAttribute("class");
            result4.removeAttribute("class");
            result6.removeAttribute("class");
            result7.removeAttribute("class");
            result8.removeAttribute("class");
            result9.removeAttribute("class");
            result.setAttribute("class", "animate__animated animate__fadeOutUp");
            result1.setAttribute("class", "animate__animated animate__fadeOutUp");
            result2.setAttribute("class", "animate__animated animate__fadeOutUp");
            result3.setAttribute("class", "animate__animated animate__fadeOutUp");
            result4.setAttribute("class", "animate__animated animate__fadeOutUp");
            result6.setAttribute("class", "animate__animated animate__fadeOutUp");
            result7.setAttribute("class", "animate__animated animate__fadeOutUp");
            result8.setAttribute("class", "animate__animated animate__fadeOutUp");
            result9.setAttribute("class", "animate__animated animate__fadeOutUp");
        }, 500);
        setTimeout(() => {
            result.removeAttribute("class");
            result1.removeAttribute("class");
            result2.removeAttribute("class");
            result3.removeAttribute("class");
            result4.removeAttribute("class");
            result6.removeAttribute("class");
            result7.removeAttribute("class");
            result8.removeAttribute("class");
            result9.removeAttribute("class");
            result.innerHTML = lista[parseInt(Math.random()*lista.length)];
            result1.innerHTML = lista[parseInt(Math.random()*lista.length)];
            result2.innerHTML = lista[parseInt(Math.random()*lista.length)];
            result3.innerHTML = lista[parseInt(Math.random()*lista.length)];
            result4.innerHTML = lista[parseInt(Math.random()*lista.length)];
            result6.innerHTML = lista[parseInt(Math.random()*lista.length)];
            result7.innerHTML = lista[parseInt(Math.random()*lista.length)];
            result8.innerHTML = lista[parseInt(Math.random()*lista.length)];
            result9.innerHTML = lista[parseInt(Math.random()*lista.length)];
            result.setAttribute("class", "animate__animated animate__fadeInLeft");
            result1.setAttribute("class", "animate__animated animate__fadeInLeft");
            result2.setAttribute("class", "animate__animated animate__fadeInLeft");
            result3.setAttribute("class", "animate__animated animate__fadeInLeft");
            result4.setAttribute("class", "animate__animated animate__fadeInLeft");
            result6.setAttribute("class", "animate__animated animate__fadeInLeft");
            result7.setAttribute("class", "animate__animated animate__fadeInLeft");
            result8.setAttribute("class", "animate__animated animate__fadeInLeft");
            result9.setAttribute("class", "animate__animated animate__fadeInLeft");
        }, 1000);
        setTimeout(() => {
            result.removeAttribute("class");
            result1.removeAttribute("class");
            result2.removeAttribute("class");
            result3.removeAttribute("class");
            result4.removeAttribute("class");
            result6.removeAttribute("class");
            result7.removeAttribute("class");
            result8.removeAttribute("class");
            result9.removeAttribute("class");
            result.setAttribute("class", "animate__animated animate__fadeOutDown");
            result1.setAttribute("class", "animate__animated animate__fadeOutDown");
            result2.setAttribute("class", "animate__animated animate__fadeOutDown");
            result3.setAttribute("class", "animate__animated animate__fadeOutDown");
            result4.setAttribute("class", "animate__animated animate__fadeOutDown");
            result6.setAttribute("class", "animate__animated animate__fadeOutDown");
            result7.setAttribute("class", "animate__animated animate__fadeOutDown");
            result8.setAttribute("class", "animate__animated animate__fadeOutDown");
            result9.setAttribute("class", "animate__animated animate__fadeOutDown");
        }, 1500);
        setTimeout(() => {
            result.innerHTML = lista[parseInt(Math.random()*lista.length)];
            result.setAttribute("class", "animate__animated animate__fadeInUp");
        }, 2000);
    }
});