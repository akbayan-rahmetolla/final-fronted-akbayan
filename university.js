document.addEventListener("DOMContentLoaded", function() {
    const universityCards = document.querySelectorAll(".university-card");

    universityCards.forEach(function(card) {
        card.addEventListener("mouseenter", function() {
            playSound(card.dataset.sound);
            const img = card.querySelector(".animated-img");
            img.classList.add("visible");
        });

        card.addEventListener("mouseleave", function() {
            const img = card.querySelector(".animated-img");
            img.classList.remove("visible");
        });
    });

    function playSound(soundFile) {
        const audio = new Audio(soundFile);
        audio.play();
    }
});
