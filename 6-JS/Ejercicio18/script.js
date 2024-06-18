let interruptor = document.getElementById("interruptor");
let bombilla = document.getElementById("bombilla");

interruptor.addEventListener("click", toggleLight);

function toggleLight() {
    if (interruptor.src.includes("boff.jpg")) {
        interruptor.src = "./images/bon.jpg";
        bombilla.src = "./images/on.jpg";
    } else {
        interruptor.src = "./images/boff.jpg";
        bombilla.src = "./images/off.jpg";
    }
}
