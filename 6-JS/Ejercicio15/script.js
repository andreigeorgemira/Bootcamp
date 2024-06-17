$(document).ready(function() {
    $("#button1").click(function() {
        $("#para1").toggleClass("red-text");
    });
});

document.getElementById("button2").addEventListener("click", function() {
    var para2 = document.getElementById("para2");
    para2.classList.toggle("blue-text");
});
