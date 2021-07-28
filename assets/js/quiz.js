
/** Much of the code in this file was inspired by this video tutorial: https://www.youtube.com/watch?v=riDzcEQbX6k&t=379s
 * I have edited various parts to fit the needs of the project, in particular function and variable names but also how the code works
 * i.e. we have no need of a "next" button to trigger the next question, as the next question is triggered automatically upon submitting
 * an answer for the previous question.
 */

const beginButton = document.getElementById("begin-button")
const answerButtonsElement = document.getElementById("answer-buttons")
const questionElement = document.getElementById("quiz-question")

beginButton.addEventListener("click", beginQuiz)

function beginQuiz() {
    console.log("begun");
    beginButton.classList.add("hide")
    answerButtonsElement.classList.remove('hide')
    questionElement.classList.remove('hide')
}

function nextQuestion() {

}

function chooseAnswer() {

}