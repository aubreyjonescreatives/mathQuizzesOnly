import { quizQuestions } from '../json/quizquestions.js'

document.querySelector('#nameofQuiz').innerText = `Unit 1 Lesson 1 Quiz`

let questionsCorrect = 0
let message
let quizChoice = null
let userChoice = null

/* async function getQuizData() {
  try {
      const response = await fetch('../json/quizquestions.json')
      return await response.json() // Return the JSON object
  } catch (error) {
      console.error(error)

  }
}  */

let quizQs = document.querySelectorAll('a')

quizQs.forEach((element) => {
  element.addEventListener('click', quizInfo)
})

// let quizData = {}
// getQuizData().then(data => quizData = data)

function quizInfo(event) {
  quizChoice = quizQuestions.find((quizquestion) => {
    return event.target.id === quizquestion.number.toLowerCase()
  })
  console.log(quizChoice)

  document.querySelector('#questionNumber').textContent = `${quizChoice.number}`
  document.querySelector('#question').textContent = `${quizChoice.question}`
  document.querySelector(
    '#questionDetail',
  ).textContent = `${quizChoice.questionDetail}`
  document.querySelector('#answer1').textContent = `${quizChoice.answers.a}`
  document.querySelector('#answer2').textContent = `${quizChoice.answers.b}`
  document.querySelector('#answer3').textContent = `${quizChoice.answers.c}`
}

let possibilities = document.querySelectorAll('.answerChoice')
console.log(possibilities)
possibilities.forEach((element) => {
  element.addEventListener('click', possibleAnswers)
})

function possibleAnswers(event) {
  let idLength = event.target.id.length
  let userChoiceNum = event.target.id.charAt(idLength - 1)

  if (userChoiceNum == 1) userChoice = 'a'
  if (userChoiceNum == 2) userChoice = 'b'
  if (userChoiceNum == 3) userChoice = 'c'

  /*   let theChoices = quizQuestions.map(quizquestion => {
    return quizquestion.incorrectChoice1
    return quizquestion.incorrectChoice2
    return quizquestion.correct
     */

  // let wrongChoices1 = `${theChoices.incorrectChoice1}`
  // let wrongChoices2 = `${theChoices.incorrectChoice2}`
  // let correctChoice = `${theChoices.correct}`

  console.log(`These are the wrong answers: ${quizChoice.incorrectChoice1}
 and ${quizChoice.incorrectChoice2}.`)
  console.log(`The correct answer is: ${quizChoice.correct}.`)

  if (userChoice === quizChoice.correct) {
    questionsCorrect++
  } else if (
    userChoice === quizChoice.incorrectChoice1 ||
    userChoice === quizChoice.incorrectChoice2
  ) {
    questionsCorrect--
  }

  message = `You have ${questionsCorrect} correct.`
  console.log(message)
}

function responseFeatures1() {
  let checkmark = document.getElementById('icon1')
  checkmark.classList.add('material-icons-toggle')
  let checkColor = document.getElementById('answer-1')
  checkColor.classList.toggle('answerChoice-2')

  function user(userChoice) {
    if (userChoice === `${theChoices.correct}`) {
      document.querySelector('.feedback').textContent = 'You are Correct!'
      questionsCorrect++
    } else
      document.querySelector('.feedback').textContent =
        'That is wrong. Try again?'
  }
}

document
  .querySelector('#answer1')
  .addEventListener('click', () => responseFeatures1())

function responseFeatures2() {
  let checkmark = document.getElementById('icon1')
  checkmark.classList.add('material-icons-toggle')
  let checkColor = document.getElementById('answer-2')
  checkColor.classList.toggle('answerChoice-2')

  function user(userChoice) {
    if (userChoice === `${theChoices.correct}`) {
      document.querySelector('.feedback').textContent = 'You are Correct!'
      questionsCorrect++
    } else
      document.querySelector('.feedback').textContent =
        'That is wrong. Try again?'
  }
}

document
  .querySelector('#answer2')
  .addEventListener('click', () => responseFeatures2())

function responseFeatures3() {
  let checkmark = document.getElementById('icon1')
  checkmark.classList.add('material-icons-toggle')
  let checkColor = document.getElementById('answer-3')
  checkColor.classList.toggle('answerChoice-2')

  function user(userChoice) {
    if (userChoice === `${theChoices.correct}`) {
      document.querySelector('.feedback').textContent = 'You are Correct!'
      questionsCorrect++
    } else
      document.querySelector('.feedback').textContent =
        'That is wrong. Try again?'
  }
}

document
  .querySelector('#answer3')
  .addEventListener('click', () => responseFeatures3())
