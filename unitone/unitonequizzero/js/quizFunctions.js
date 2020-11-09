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



document.querySelector('#nameofQuiz').innerText = `Unit 1 Lesson 1 Quiz`




let quizData = {}
getQuizData().then(data => quizData = data)





document.querySelector('#number1').textContent = `${number1}`
document.querySelector('#question1').textContent = `${question1}`
document.querySelector('#questionDetail1').textContent = `${questionDetail1}`
document.querySelector('#answer1').textContent = `${answers1.a}`
document.querySelector('#answer2').textContent = `${answers1.b}`
document.querySelector('#answer3').textContent = `${answers1.c}`



//let quizQuestion1 = document.querySelector

//quizQs.forEach(element => {

    
//element.addEventListener('click', quizInfo)

    
//})


/*
function question1(event){
   let quizChoice = quizData.quizQuestions.find(quizquestions => {
       return event.target.id === quizquestions.number1.toLowerCase()
       
       
    }) 
    console.log(quizChoice)


    document.querySelector('#number1').textContent = `${quizChoice.number1}`
    document.querySelector('#question1').textContent = `${quizChoice.question1}`
    document.querySelector('#questionDetail1').textContent = `${quizChoice.questionDetail1}`
    document.querySelector('#answer1').textContent = `${quizChoice.answers1.a}`
    document.querySelector('#answer2').textContent = `${quizChoice.answers1.b}`
    document.querySelector('#answer3').textContent = `${quizChoice.answers1.c}`


  }

  
  document.querySelector('#question_1').addEventListener('click', () => question1() )


/*
  function question2(event){
    let quizChoice = quizData.quizQuestions.find(quizquestions => {
        return event.target.id === quizquestions.number2.toLowerCase()
        
        
     }) 
     console.log(quizChoice)
 */
 
 //    document.querySelector('#questionNumber2').textContent = `${number2}`
 //    document.querySelector('#question2').textContent = `${question2}`
 //    document.querySelector('#questionDetail2').textContent = `${questionDetail2}`
 //    document.querySelector('#answer1').textContent = `${answers2.a}`
  //   document.querySelector('#answer2').textContent = `${answers2.b}`
   //  document.querySelector('#answer3').textContent = `${answers2.c}`
 
 
   //}


   //document.querySelector('#answer1').addEventListener('click', () => question2() )

/*

   function question3(event){
    let quizChoice = quizData.quizQuestions.find(quizquestions => {
        return event.target.id === quizquestions.number3.toLowerCase()
        
        
     }) 
     console.log(quizChoice)
 
 
     document.querySelector('#questionNumber3').textContent = `${quizChoice.number3}`
     document.querySelector('#question3').textContent = `${quizChoice.question3}`
     document.querySelector('#questionDetail3').textContent = `${quizChoice.questionDetail3}`
     document.querySelector('#answer1').textContent = `${quizChoice.answers3.a}`
     document.querySelector('#answer2').textContent = `${quizChoice.answers3.b}`
     document.querySelector('#answer3').textContent = `${quizChoice.answers3.c}`
 
 
   }
/*
   
   document.querySelector('#answer1').addEventListener('click', () => question3() )


   
   function question4(event){
    let quizChoice = quizData.quizQuestions.find(quizquestions => {
        return event.target.id === quizquestions.number4.toLowerCase()
        
        
     }) 
     console.log(quizChoice)
 
 
     document.querySelector('#questionNumber4').textContent = `${quizChoice.number4}`
     document.querySelector('#question4').textContent = `${quizChoice.question4}`
     document.querySelector('#questionDetail4').textContent = `${quizChoice.questionDetail4}`
     document.querySelector('#answer1').textContent = `${quizChoice.answers4.a}`
     document.querySelector('#answer2').textContent = `${quizChoice.answers4.b}`
     document.querySelector('#answer3').textContent = `${quizChoice.answers4.c}`
 
 
   }


   document.querySelector('#answer1').addEventListener('click', () => question4() )



   function question5(event){
    let quizChoice = quizData.quizQuestions.find(quizquestions => {
        return event.target.id === quizquestions.number5.toLowerCase()
        
        
     }) 
     console.log(quizChoice)
 
 
     document.querySelector('#questionNumber5').textContent = `${quizChoice.number5}`
     document.querySelector('#question5').textContent = `${quizChoice.question5}`
     document.querySelector('#questionDetail5').textContent = `${quizChoice.questionDetail5}`
     document.querySelector('#answer1').textContent = `${quizChoice.answers5.a}`
     document.querySelector('#answer2').textContent = `${quizChoice.answers5.b}`
     document.querySelector('#answer3').textContent = `${quizChoice.answers5.c}`
 
 
   }


   document.querySelector('#answer1').addEventListener('click', () => question5() )


   function question6(event){
    let quizChoice = quizData.quizQuestions.find(quizquestions => {
        return event.target.id === quizquestions.number6.toLowerCase()
        
        
     }) 
     console.log(quizChoice)
 
 
     document.querySelector('#questionNumber6').textContent = `${quizChoice.number6}`
     document.querySelector('#question6').textContent = `${quizChoice.question6}`
     document.querySelector('#questionDetail6').textContent = `${quizChoice.questionDetail6}`
     document.querySelector('#answer1').textContent = `${quizChoice.answers6.a}`
     document.querySelector('#answer2').textContent = `${quizChoice.answers6.b}`
     document.querySelector('#answer3').textContent = `${quizChoice.answers6.c}`
 
 
   }


   document.querySelector('#answer1').addEventListener('click', () => question6() )


/*


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

*/
