/*jslint node:true*/
"use strict";

/*global alert*/





document.querySelector('#nameofQuiz').innerText = `Unit 2 Lesson 2 Quiz`


async function getQuizData() {
    try {
        const response = await fetch('../lessontwoquiz.json')
        return await response.json() // Return the JSON object
    } catch (error) {
        console.error(error)

    }
} 



let allInfo = document.querySelectorAll("li") 

allInfo.forEach(element => {

    
element.addEventListener('click', quizInfo)

})




let quizData = {}
getQuizData().then(data => quizData = data)


function quizInfo(event){
   let quizChoice = quizData.quizQuestions.find(lessontwoquiz => {
       return event.target.id === lessontwoquiz.thequestion.toLowerCase()
          
       
    }) 
    console.log(quizChoice)




const question = {
    stem: `${quizChoice.thequestion}`, 
    stem2: `${quizChoice.questionDetail}`,
    option1: `${quizChoice.response1}`, 
    option2: `${quizChoice.response2}`, 
    correct: `${quizChoice.correctResponse}`,
    option3: `${quizChoice.response3}`,  
    display: () => {
        document.querySelector("#stem").textContent = question.stem
        document.querySelector("#stem2").textContent = question.stem2
        document.querySelector("#answer1").textContent = question.option1
        document.querySelector("#answer2").textContent = question.option2
        document.querySelector("#answer3").textContent = question.option3
    }, 

    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector(".feedback").textContent = "You are Correct!"

        } else 
        document.querySelector(".feedback").textContent = "That is wrong. Try again?"
    }


}

document.querySelector('#answer1').addEventListener('click', () => question.check(1) )
document.querySelector('#answer2').addEventListener('click', () => question.check(2) )
document.querySelector('#answer3').addEventListener('click', () => question.check(3) )

question.display()


}


