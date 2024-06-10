document.addEventListener('DOMContentLoaded', function() {
    // Джумботрон түймесін басқан кезде хабарлама көрсету
    const learnMoreButton = document.querySelector('.btn-primary');
    learnMoreButton.addEventListener('click', function() {
        alert('Біз туралы бетке өту!');
    });

    // Кесте жолына тінтуірдің көрсеткішін апарған кезде түсін өзгерту
    const tableRows = document.querySelectorAll('.table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f0f0f0';
        });
        row.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });

    // Фотоларға басқан кезде хабарлама көрсету
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            alert('Бұл - ' + this.alt);
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.navbar').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
    });
});

function playSound() {
    const audio = new Audio("notification.mp3");
    audio.play();
}

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
                newLesson.className = "list-group-item d-flex justify-content-between align-items-center";
                newLesson.innerHTML = `${event.target.value} <span class="badge badge-primary badge-pill">${new Date().toLocaleTimeString()}</span>`;
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