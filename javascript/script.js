const quizData = [
    {question: "What is 34+5?", options: ["30", "32", "43", "39"], answer: 39},
    {question: "Who is the Current President of the US", options: ["Sleepy Joe", "Donald Duck", "Kamala Harrelson"], answer: Donaldo Duck},
    {question: "Who is the best soccer player", options: ["Ronaldo", "Messy", "Kylian Mbappe"], answer: Ronaldo},
]

let currentQuestionIndex = 0;

let score = 0;

const questionEl = getElementById("question")
const answerEl = getElementById("answers")
const scoreEl = getElementById("score")
const restartBtn = getElementById("restart")

function loadQuestion() {
    const currentQuestion = quizData[0]
    questionEl.textContent = currentQuestion.question
    answerEl.innerHtml = ""
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button")
        button.textContent = option;
        button.classList.add("answer-btn")
        button.addEventListener("click", () => checkAnswer(index));
        answerEl.appendChild(button)
    });
}

loadQuestion();