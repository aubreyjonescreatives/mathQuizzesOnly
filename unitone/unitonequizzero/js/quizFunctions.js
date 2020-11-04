/*jslint node:true*/
"use strict";

/*global alert*/



document.querySelector('#nameofQuiz').innerText = `Unit 1 Lesson 1 Quiz`


let questionsCorrect = 1
let message  



async function getQuizData() {
  try {
      const response = await fetch('../json/quizquestions.json')
      return await response.json() // Return the JSON object
  } catch (error) {
      console.error(error)

  }
} 




let quizQs = document.querySelectorAll("a") 

quizQs.forEach(element => {

    
element.addEventListener('click', quizInfo)

    
})


let quizData = {}
getQuizData().then(data => quizData = data)


function quizInfo(event){
   let quizChoice = quizData.quizQuestions.find(quizquestions => {
       return event.target.id === quizquestions.number.toLowerCase()
       
       
    }) 
    console.log(quizChoice)


    document.querySelector('#questionNumber').textContent = `${quizChoice.number}`
    document.querySelector('#question').textContent = `${quizChoice.question}`
    document.querySelector('#questionDetail').textContent = `${quizChoice.questionDetail}`
    document.querySelector('#answer1').textContent = `${quizChoice.answers.a}`
    document.querySelector('#answer2').textContent = `${quizChoice.answers.b}`
    document.querySelector('#answer3').textContent = `${quizChoice.answers.c}`


  }


  let possibilities = document.querySelectorAll("#choices") 

  possibilities.forEach(element => {
  
      
  element.addEventListener('click', possibleAnswers)
  
  })

function possibleAnswers(event) {
  let userChoice 
  let theChoices = quizData.quizQuestions.find(quizquestions => {
    return quizquestions.incorrectChoice1
    return quizquestions.incorrectChoice2
    return quizquestions.correct
    
}) 
let wrongChoices1 = `${theChoices.incorrectChoice1}`
let wrongChoices2 = `${theChoices.incorrectChoice2}`
let correctChoice = `${theChoices.correct}`



console.log(`These are the wrong answers: ${wrongChoices1} and ${wrongChoices2}.`)
console.log(`The correct answer is: ${correctChoice}.`)


if (userChoice === correctChoice) {questionsCorrect++} 
else if (userChoice === wrongChoices1 || userChoice === wrongChoices2) {questionsCorrect--}


message = `You have ${questionsCorrect} correct.`
console.log(message)






}  



function responseFeatures1() {
  let checkmark = document.getElementById("icon1")
  checkmark.classList.add("material-icons-toggle")
  let checkColor = document.getElementById("answer-1")
  checkColor.classList.toggle("answerChoice-2")



  function user(userChoice) {
    if (userChoice === `${theChoices.correct}`) {
        document.querySelector(".feedback").textContent = "You are Correct!"
        questionsCorrect++
    } else 
    document.querySelector(".feedback").textContent = "That is wrong. Try again?"
  }


}

document.querySelector('#answer1').addEventListener('click', () => responseFeatures1() )


function responseFeatures2() {
  let checkmark = document.getElementById("icon1")
  checkmark.classList.add("material-icons-toggle")
  let checkColor = document.getElementById("answer-2")
  checkColor.classList.toggle("answerChoice-2")



  function user(userChoice) {
    if (userChoice === `${theChoices.correct}`) {
        document.querySelector(".feedback").textContent = "You are Correct!"
        questionsCorrect++
    } else 
    document.querySelector(".feedback").textContent = "That is wrong. Try again?"
  }




}

document.querySelector('#answer2').addEventListener('click', () => responseFeatures2() )



function responseFeatures3() {
  let checkmark = document.getElementById("icon1")
  checkmark.classList.add("material-icons-toggle")
  let checkColor = document.getElementById("answer-3")
  checkColor.classList.toggle("answerChoice-2")



  function user(userChoice) {
    if (userChoice === `${theChoices.correct}`) {
        document.querySelector(".feedback").textContent = "You are Correct!"
        questionsCorrect++
    } else 
    document.querySelector(".feedback").textContent = "That is wrong. Try again?"
  }




}

document.querySelector('#answer3').addEventListener('click', () => responseFeatures3() )


