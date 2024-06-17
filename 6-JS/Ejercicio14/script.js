let array = [];

function updateDisplay() {
    document.getElementById("array-display").innerText = JSON.stringify(array);
}

function pushItem() {
    let value = prompt("Enter a value to push:");
    if (value !== null) {
        array.push(value);
        updateDisplay();
    }
}

function unshiftItem() {
    let value = prompt("Enter a value to unshift:");
    if (value !== null) {
        array.unshift(value);
        updateDisplay();
    }
}

function insertAt() {
    let index = parseInt(document.getElementById("insert-index").value);
    let value = prompt("Enter a value to insert:");
    if (value !== null && index >= 0 && index <= array.length) {
        array.splice(index, 0, value);
        updateDisplay();
    }
}

function popItem() {
    if (array.length > 0) {
        array.pop();
        updateDisplay();
    } else {
        alert("Array is empty");
    }
}

function shiftItem() {
    if (array.length > 0) {
        array.shift();
        updateDisplay();
    } else {
        alert("Array is empty");
    }
}

function removeAt() {
    let index = parseInt(document.getElementById("remove-index").value);
    if (index >= 0 && index < array.length) {
        array.splice(index, 1);
        updateDisplay();
    } else {
        alert("Invalid index");
    }
}

updateDisplay();
