
/** Much of the code in this file was inspired by this video tutorial: https://www.youtube.com/watch?v=riDzcEQbX6k&t=379s
 * I have edited various parts to fit the needs of the project, in particular function and variable names 
 * to make it easier in my view to know what everything does, but also how the code works
 */


/**Below we set our variables. */

const beginButton = document.getElementById("begin-button")

const nextButton = document.getElementById("next-button")

const nextButtonContainer = document.getElementById("next-button-container")


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

/**I've changed the below from what was originally a "let" variable inside the incrementScore function to a 
 * "var" variable in order to be able to not only access it outside of the function but also so as to be able to 
 * reassign it (otherwise I'd have used "const") for the purposes of resetting the score when restarting the quiz.
 */

var oldScore = parseInt(document.getElementById("score").innerText);

/**Below is our event listener for starting the game by clicking the begin button */

beginButton.addEventListener("click", beginQuiz)
nextButton.addEventListener("click", () => {
    console.log("clicked")
    currentQuestionIndex++
    setNextQuestion()
})

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
    setNextQuestion()
    if (beginButton.innerText === "Restart") {
        oldScore = "0";
        document.getElementById("score").innerText = `${oldScore}`
    }
}

/**Below is our function for showing the next question.
 */

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

/**The function below shows our question on clicking either the begin button, or the next button. This is where we set the data of the
 *  answer to correct if appropriate, for this to later translate to a pop-up and/or score incrementation if it's correct. This is 
 * called in the setNextQuestion function and the event listener for the next button.
 */

function showQuestion(question) {
    questionElement.innerText = question.question
    answerButtonsElement.classList.remove("hide")
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        /**Below is where we give the answer buttons the class they need for styling */
        button.classList.add("button-style")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", chooseAnswer)
        answerButtonsElement.appendChild(button)
    })
 }

/**The resetState function below is where we clear the playing area of the "next" button to make way for the next question */

function resetState() {
    nextButton.classList.add("hide")
    nextButtonContainer.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

/**Here's where we register the selection of an answer. As well as setting the data to what we need it to be, we also remove and add
 * hide classes and change the button text to restasrt as appropriate.
 */

function chooseAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    // setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
        nextButtonContainer.classList.add("hide")
    } else {
        beginButton.innerText = "Restart"
        beginButton.classList.remove("hide")
    }
    /**Below I've coded the various answer buttons to show or hide the other buttons and quiz elements as appropriate */
    answerButtonsElement.classList.add("hide")
    nextButton.classList.remove("hide")
    nextButtonContainer.classList.remove("hide")
    /**Below I've added some feedback elements for the user. As well as a pop-up informing the user of the result of their
     * selection, the question text changes to reflect the result and the score is incremented by one for a correct answer.
     * Also, rather than iterate through the wrong answer buttons to show a "wrong" message for each of them, I've taken 
     * advantage of the use of dataset, used extensively in the tutorial video credited at the beginning of this file for 
     * functionality I didn't use for this project, to use the != comparison operator to get the wrong answer buttons to do 
     * what I want.
     */

    if (selectedButton.dataset = correct) {
        questionElement.innerText = "Correct!"
        alert("Correct!")
        incrementScore()
    } else if (selectedButton.dataset != correct) {
        questionElement.innerText = "Wrong!"
        alert("Whoops, that's wrong!")
    }
}

/**The below function sets our classes as appropriate, depending on the answer given */

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

/** The below function is called by the above one; it clears existing classes from the buttons as necessary */

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

/**Here's where we increment the score for a correct answer. This code was partly inspired by Code Institute's
 * Rosie Odenkirk walkthrough project: https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/3b2af8636ea54a4d9dc45126f7498633/?child=first
 */

function incrementScore() {
  
    document.getElementById("score").innerText = ++oldScore;
  
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
    },
    {
        question: "The Battle of Stow-on-the-Wold marked the end of which war?",
        answers: [
            {text: "The First English Civil War", correct: true},
            {text: "The Crimean War", correct: false},
            {text: "The Wars of the Roses", correct: false}
        ]
    },
    {
        question: "The Wars of the Roses were one of the main inspirations for which major television series?",
        answers: [
            {text: "Game of Thrones", correct: true},
            {text: "Downton Abbey", correct: false},
            {text: "Love Island", correct: false}
        ]
    },
    {
        question: "The Battle of Nibley Green was fought to determine ownership of which castle?",
        answers: [
            {text: "Berkeley Castle", correct: true},
            {text: "Sudeley Castle", correct: false},
            {text: "Barnard Castle", correct: false}
        ]
    },
    {
        question: "Which royal member of the House of Lancaster was executed after the Battle of Tewkesbury?",
        answers: [
            {text: "Prince Edward", correct: true},
            {text: "Margaret of Anjou", correct: false},
            {text: "Richard of Gloucester", correct: false}
        ]
    },
    {
        question: "Which Anglo-Saxon kingdom won the Battle of Deorham?",
        answers: [
            {text: "Wessex", correct: true},
            {text: "Northumbria", correct: false},
            {text: "Hwicce", correct: false}
        ]
    },
    {
        question: "Beverston Castle had its defences slighted by which side in the English Civil War?",
        answers: [
            {text: "Parliament", correct: true},
            {text: "The Royalists", correct: false},
            {text: "The Scottish Covenanters", correct: false}
        ]
    },
]