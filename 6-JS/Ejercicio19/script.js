let gameStatus = {
    food: 50,
    fun: 50,
    happiness: 50,
    strength: 50,
    energy: 50
};

function updateBars() {
    const statusElements = [
        { id: "food-bar", value: gameStatus.food, text: "Full" },
        { id: "fun-bar", value: gameStatus.fun, text: "Fun" },
        { id: "happiness-bar", value: gameStatus.happiness, text: "Happiness" },
        { id: "strength-bar", value: gameStatus.strength, text: "Strength" },
        { id: "energy-bar", value: gameStatus.energy, text: "Energy" }
    ];

    statusElements.forEach(element => {
        document.getElementById(element.id).style.width = element.value + "%";
        document.getElementById(element.id.replace('-bar', '-percentage')).innerText = `${element.value}% ${element.text}`;
    });

    checkGameOver();
}

function updateHappiness() {
    gameStatus.happiness = (gameStatus.food + gameStatus.fun + gameStatus.strength + gameStatus.energy) / 4;
}

function adjustStatus(stat, amount) {
    gameStatus[stat] = Math.max(0, Math.min(100, gameStatus[stat] + amount));
    updateHappiness();
    updateBars();
}

function decreaseStat(stat, decreaseRate) {
    setInterval(() => {
        adjustStatus(stat, - Math.floor(Math.random() * (decreaseRate.max - decreaseRate.min + 1)) + decreaseRate.min);
    }, decreaseRate.interval);
}

function eat() {
    adjustStatus('food', 10);
}

function play() {
    adjustStatus('fun', 10);
}

function fight() {
    adjustStatus('strength', 10);
}

function sleep() {
    adjustStatus('energy', 10);
}

function checkGameOver() {
    if (gameStatus.happiness == 0) {
        document.getElementById('container').style.display = 'none';
        document.getElementById('game-over').style.display = 'block';
    }
}

function restarGame() {
    gameStatus = {
        food: 50,
        fun: 50,
        happiness: 50,
        strength: 50,
        energy: 50
    };
    document.getElementById('container').style.display = 'grid';
    document.getElementById('game-over').style.display = 'none';
    updateBars();
}

decreaseStat('food', { min: 1, max: 5, interval: 4000 });
decreaseStat('fun', { min: 1, max: 5, interval: 6000 });
decreaseStat('strength', { min: 1, max: 5, interval: 8000 });
decreaseStat('energy', { min: 1, max: 5, interval: 10000 });

updateBars();
