let array1 = ["🍔", "🥙", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥩"];
let foundPizza = false;
let array1Updated = array1.map((item) => {
    if (foundPizza) {
        return "🍺";
    }
    if (item === "🍕") {
        foundPizza = true;
    }
    return item;
});
console.log(array1Updated);

let array2 = ["🍕", "🍕", "🍍", "🍕"];
let hasPineapple = array2.includes("🍍");
console.log(hasPineapple);

let array3 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
let array3Updated = array3.filter((item) => item !== "🍍");
console.log(array3Updated);

let array4 = ["🍓", "🥝", "🍓", "🥝", "🍓"];
let array4Updated = array4.map((item) => (item === "🍓" ? "🍄" : item));
console.log(array4Updated);

let array5 = ["🌶", "🥛", "🌶", "🥛", "🌶", "🥛"];
let array5Updated = [];
array5.forEach((item) => {
    array5Updated.push(item);
    if (item === "🌶") {
        array5Updated.push("🥵");
    }
});
console.log(array5Updated);

let array6 = ["🎴", "🎴", "🎴", "🎴"];
let array6Updated = [];
for (let i = 0; i < array6.length; i++) {
    array6Updated.push(array6[i]);
    if (i < array6.length - 1) {
        array6Updated.push("🃏");
    }
}
console.log(array6Updated);
