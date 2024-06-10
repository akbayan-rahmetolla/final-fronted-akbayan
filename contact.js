document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Форманы жібергеннен кейін анимация қосу
        form.classList.add("animated");

        // Хабарламаны көрсету
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";

        // Форманы тазалау
        form.reset();

        // Анимация біткеннен кейін классды алып тастау
        setTimeout(function() {
            form.classList.remove("animated");
        }, 2000);
    });
});
