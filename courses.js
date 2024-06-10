document.addEventListener('DOMContentLoaded', function() {
    // Event listener for "click"
    document.querySelectorAll('.btn-learn-more').forEach(function(button) {
        button.addEventListener('click', function() {
            const courseId = this.getAttribute('data-course');
            alert('Курс ' + courseId + ' туралы толығырақ мәлімет!');
        });
    });

    // Event listener for "mouseover"
    document.querySelectorAll('.course-card').forEach(function(card) {
        card.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f0f8ff';
            const soundFile = this.getAttribute('data-sound');
            playSound(soundFile);
        });

        card.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });

    // Event listener for "keypress"
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            alert('Enter пернесі басылды!');
        }
    });

    // Function to play sound
    function playSound(soundFile) {
        const audio = new Audio(soundFile);
        audio.play();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.navbar').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Click event
    document.getElementById("courseButton").addEventListener("click", function() {
        const courseList = document.getElementById("courseList");
        const newCourse = document.createElement("li");
        newCourse.textContent = "Жаңа курс";
        courseList.appendChild(newCourse);
        playSound();
    });

    // Mouseover event
    document.getElementById("courseList").addEventListener("mouseover", function(event) {
        if (event.target.tagName === "LI") {
            event.target.style.backgroundColor = "lightblue";
        }
    });

    document.getElementById("courseList").addEventListener("mouseout", function(event) {
        if (event.target.tagName === "LI") {
            event.target.style.backgroundColor = "";
        }
    });

    // Keypress event
    document.getElementById("newLesson").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const programList = document.getElementById("programList");
            const newLesson = document.createElement("li");
            newLesson.textContent = event.target.value;
            programList.appendChild(newLesson);
            event.target.value = "";
            playSound();
        }
    });

    // Function to play sound
    function playSound() {
        const audio = new Audio("notification.mp3");
        audio.play();
    }
});

