document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#cards img");
    
    images.forEach((img) => {
        img.addEventListener("mouseenter", function() {
            this.src = "./images/card-front.png"; 
        });

        img.addEventListener("mouseleave", function() {
            this.src = "./images/card-back.png"; 
        });
    });
});
