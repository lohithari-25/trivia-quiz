const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris"
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: "4"
    },
    {
        question: "What is the capital of Spain?",
        answers: ["Madrid", "Lisbon", "Rome", "Athens"],
        correct: "Madrid"
    },
    {
        question:"What is the largest lake in the world?",
        answers:["Caspian Sea","Baikal","Lake Superior","Ontario"],
        correct:"Baikal"
    },
    {
        question:"Which planet in the solar system is known as the Red Planet ?",
        answers:["Venus","Earth","Mars", "Jupiter"
        
        
       ]
    }
];

let currentQuestion = 0;

function loadQuestion(index) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `
        <div class="card quiz-card active">
            <div class="card-body">
                <h5 class="card-title">${questions[index].question}</h5>
                ${questions[index].answers.map((answer, i) => `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="quizOptions" id="quizOption${i}" value="${answer}">
                        <label class="form-check-label" for="quizOption${i}">${answer}</label>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion(currentQuestion);
    document.getElementById('prevButton').disabled = false;

    if (currentQuestion === questions.length - 1) {
        document.getElementById('nextButton').style.display = 'none';
        document.getElementById('submitButton').style.display = 'inline-block';
    }
}

function prevQuestion() {
    currentQuestion--;
    loadQuestion(currentQuestion);
    document.getElementById('nextButton').style.display = 'inline-block';
    document.getElementById('submitButton').style.display = 'none';

    if (currentQuestion === 0) {
        document.getElementById('prevButton').disabled = true;
    }
}

function submitQuiz() {
    const selectedAnswer = document.querySelector('input[name="quizOptions"]:checked');
    if (selectedAnswer) {
        alert(`You selected: ${selectedAnswer.value}`);
    } else {
        alert('Please select an answer');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion(currentQuestion);
});
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        alert('Please fill out all fields');
        return;
    }

    
    const toast = new bootstrap.Toast(document.getElementById('feedbackToast'));
    toast.show();

    
    document.getElementById('feedbackForm').reset();
});