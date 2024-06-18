const questions = [
    {
        question: "¿Cuál de las siguientes opciones no es un editor de código?",
        answers: [
            { text: "vim", correct: false },
            { text: "vscode", correct: false },
            { text: "emacs", correct: false },
            { text: "word", correct: true },
        ],
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        answers: [
            { text: "Marte", correct: false },
            { text: "Júpiter", correct: true },
            { text: "Saturno", correct: false },
            { text: "Neptuno", correct: false },
        ],
    },
    {
        question: "¿Cuál es el lenguaje de programación más utilizado?",
        answers: [
            { text: "Python", correct: true },
            { text: "Java", correct: false },
            { text: "C#", correct: false },
            { text: "Ruby", correct: false },
        ],
    },
];

const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = "";
    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    if (questions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    questionContainerElement.classList.add("hide");
    resultContainer.classList.remove("hide");
    scoreElement.innerText = score;
}

startQuiz();
