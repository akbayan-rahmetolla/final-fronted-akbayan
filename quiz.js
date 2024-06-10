function submitQuiz() {
    const answers = {
        question1: 'B',
        question2: 'C',
        question3: 'A',
        question4: 'A',
        question5: 'A',
        question6: 'B',
        question7: 'A',
        question8: 'B',
        question9: 'B',
        question10: 'B',
        question11: 'C',
        question12: 'B',
        question13: 'B',
        question14: 'B',
        question15: 'A',
        question16: 'A',
        question17: 'C',
        question18: 'C'
    };

    let score = 0;
    let totalQuestions = 18;

    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    const result = document.getElementById('result');
    result.innerHTML = `<h3>Сіздің нәтиже: ${score} / ${totalQuestions}</h3>`;

    if (score === totalQuestions) {
        playSound();
    }
}

function playSound() {
    const audio = new Audio('notification.mp3');
    audio.play();
}
