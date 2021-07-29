
/** Much of the code in this file was inspired by this video tutorial: https://www.youtube.com/watch?v=riDzcEQbX6k&t=379s
 * I have edited various parts to fit the needs of the project, in particular function and variable names 
 * to make it easier in my view to know what everything does, but also how the code works
 */


/**Below we set our variables. */
const beginButton = document.getElementById("begin-button")

const nextButton = document.getElementById("next-button")

/**Here, I differ from the code in the tutorial video by using two separate variables for elements of the quiz. 
 * This is partly for my own custom formatting and styling preferences, but also to accomodate the fact I'm using the Bootstrap 
 * grid system to position my buttons.
 */
const answerButtonsElement = document.getElementById("answer-buttons")
const questionContainerElement = document.getElementById("quiz-question")

const questionElement = document.getElementById("question-text")

/**These variables are taken directly from the tutorial video mentioned above, and are used to shuffle the order
 * of the questions.
 */
let shuffledQuestions, currentQuestionIndex

/**Below is our event listener for starting the game by clicking the begin button */
beginButton.addEventListener("click", beginQuiz)

/**Below is our function for starting the quiz. */
function beginQuiz() {
    beginButton.classList.add("hide")
    /**The below code is what gets us our randomly sorted questions by ensuring a completely random array using mathrandom minus 5.
     * This gives us a number greater or less than zero 50% of the time, ensuring it swings either way fairly.
      */
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    /**The line below ensures we start at the first question in our array */
    currentQuestionIndex = 0
    /**Below we're removing the hide class from the question and the answer buttons */
    answerButtonsElement.classList.remove('hide')
    questionContainerElement.classList.remove('hide')
    nextQuestion()
}

/**Below is our function for showing the next question. Remember to do this automatically when submitting the previous answer or
 * closing the pop-up window.
 */
function nextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("quiz-button")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", chooseAnswer)
        answerButtonsElement.appendChild(button)
    })
 }

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function chooseAnswer() {

}

/**Below is where we store our questions as an array of objects of arrays of objects. Yes, you read that correctly */
const questions = [
    {
        question: "Where did the earliest known battle in British history take place?",
        answers: [
            {text: "Crickley Hill", correct: true},
            {text: "Stow-on-the-Wold", correct: false},
            {text: "London", correct: false}
        ]
    }
]