// JavaScript функциялары осы жерде орналасады (қажет болса)

// Reveal анимациясы
document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal');

    function revealElements() {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('visible');
            } else {
                reveals[i].classList.remove('visible');
            }
        }
    }

    window.addEventListener('scroll', revealElements);
    revealElements(); // Бет жүктелген кезде анимация қосу
});
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.navbar').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
    });
});
