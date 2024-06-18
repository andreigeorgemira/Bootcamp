let food = 50;
let fun = 50;
let happiness = 50;
let strength = 50;
let energy = 50;

function updateBars() {
    document.getElementById("food-bar").style.width = food + "%";
    document.getElementById("food-percentage").innerText = food + "% Full";

    document.getElementById("fun-bar").style.width = fun + "%";
    document.getElementById("fun-percentage").innerText = fun + "% Fun";

    document.getElementById("happiness-bar").style.width = happiness + "%";
    document.getElementById("happiness-percentage").innerText = happiness + "% Happiness";

    document.getElementById("strength-bar").style.width = strength + "%";
    document.getElementById("strength-percentage").innerText = strength + "% Strength";

    document.getElementById("energy-bar").style.width = energy + "%";
    document.getElementById("energy-percentage").innerText = energy + "% Energy";
}

function updateHappiness() {
    happiness = (food + fun + strength + energy) / 4;
}

function eat() {
    if (food < 100) food += 10;
    updateHappiness();
    updateBars();
}

function play() {
    if (fun < 100) fun += 10;
    updateHappiness();
    updateBars();
}

function fight() {
    if (strength < 100) strength += 10;
    updateHappiness();
    updateBars();
}

function sleep() {
    if (energy < 100) energy += 10;
    updateHappiness();
    updateBars();
}

updateBars();