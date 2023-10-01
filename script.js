const quizData = [
    {
        question: "What is the average length of a menstrual cycle in days?",
        answers: ["21 days", "28 days", "35 days", "42 days"],
        correctAnswer: 1,
        explanation: "The average length of a menstrual cycle is 28 days. It is counted from the first day of one period to the first day of the next period."
    },
    {
        question: "What is ovulation?",
        answers: ["The start of menstruation", "The release of an egg from the ovary", "The end of menstruation", "The shedding of the uterine lining"],
        correctAnswer: 1,
        explanation: "Ovulation is the release of an egg from the ovary. It usually occurs around the middle of the menstrual cycle."
    },
    {
        question: "Which hormone is responsible for regulating the menstrual cycle?",
        answers: ["Estrogen", "Progesterone", "Testosterone", "Insulin"],
        correctAnswer: 0,
        explanation: "Estrogen is responsible for regulating the menstrual cycle. It helps in the development of the uterine lining and the release of the egg during ovulation."
    },
    {
        question: "What is PMS?",
        answers: ["Pretty Much Satisfied", "Pre-Menstrual Syndrome", "Post-Menstrual Syndrome", "Prevalent Menstrual Symptoms"],
        correctAnswer: 1,
        explanation: "PMS stands for Pre-Menstrual Syndrome. It refers to a combination of physical and emotional symptoms that many women experience before their periods."
    },
    {
        question: "What is menopause?",
        answers: ["The first occurrence of menstruation", "The end of the reproductive years in women", "A medical condition related to menstruation", "Irregular menstrual cycles"],
        correctAnswer: 1,
        explanation: "Menopause is the end of the reproductive years in women. It marks the cessation of menstrual cycles and fertility."
    },
    {
        question: "What is a common symptom of menstruation?",
        answers: ["Increased energy levels", "Mood swings", "Decreased appetite", "Improved concentration"],
        correctAnswer: 1,
        explanation: "Mood swings are a common symptom of menstruation. Hormonal fluctuations can affect mood and emotions during the menstrual cycle."
    },
    {
        question: "What is dysmenorrhea?",
        answers: ["A medical condition causing excessive menstrual bleeding", "Painful menstruation", "Absence of menstruation", "Irregular menstruation"],
        correctAnswer: 1,
        explanation: "Dysmenorrhea refers to painful menstruation. It is a common menstrual disorder characterized by cramping pain in the lower abdomen."
    },
    {
        question: "What is the purpose of the uterine lining during the menstrual cycle?",
        answers: ["To support the embryo if pregnancy occurs", "To prevent infections", "To regulate body temperature", "To store nutrients"],
        correctAnswer: 0,
        explanation: "The uterine lining supports the embryo if pregnancy occurs. If no pregnancy occurs, the lining is shed during menstruation."
    }
];

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const retakeButton = document.getElementById('retake-button');
const feedbackContainer = document.getElementById('feedback');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    retakeButton.classList.add('hide');
    showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
    resetState();
    questionContainer.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(index));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    retakeButton.classList.add('hide');
    feedbackContainer.innerText = '';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(index) {
    Array.from(answerButtons.children).forEach(button => {
        button.classList.remove('selected');
    });
    answerButtons.children[index].classList.add('selected');
    const correct = index === quizData[currentQuestionIndex].correctAnswer;
    if (correct) {
        score++;
        answerButtons.children[index].classList.add('correct');
    } else {
        const correctAnswerIndex = quizData[currentQuestionIndex].correctAnswer;
        answerButtons.children[correctAnswerIndex].classList.add('correct');
        feedbackContainer.innerText = `Incorrect! ${quizData[currentQuestionIndex].explanation}`;
    }
    nextButton.classList.remove('hide');
}

function showResult() {
    resetState();
    questionContainer.innerText = `You scored ${score} out of ${quizData.length}!`;

    if (score < quizData.length) {
        retakeButton.classList.remove('hide');
    }
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
    } else {
        showResult();
    }
});

retakeButton.addEventListener('click', () => {
    startQuiz();
});

startQuiz();

