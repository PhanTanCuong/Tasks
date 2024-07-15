const questions = [
    {
        questions:"Which date is Cuong's Bithday?",
        image:"images/question_img.png",
        answers:[
            {text:"31/07",correct:true},
            {text:"31/01",correct:false},
            {text:"31/12",correct:false},
            {text:"30/12",correct:false}
        ]
    },
    {
        questions:"Which date is Cuong's Bithday?",
        image:null,
        answers:[
            {text:"31/07",correct:true},
            {text:"31/01",correct:false},
            {text:"31/12",correct:false},
            {text:"30/12",correct:false}
        ]
    },
    {
        questions:"I’m going on holiday on Saturday.This time next week I……on a beach in the sea.",
        image:null,
        answers:[
            {text:"should be lying",correct:false},
            {text:"will lie",correct:false},
            {text:"am lying",correct:true},
            {text:"will be lying",correct:false}
        ]
    }
];

const questionElement =document.getElementById("question");
const answerButton =document.getElementById("answer-buttons");
const  nextButton=document.getElementById("next-btn");
const questionImage=document.getElementById("question-image");

let currentQuestionIndex=0;
let score=0;

// Methods
//startQuiz(): display an app in 1st question
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";// After finish doing test and replay the quiz. The quiz should display Nextbtn instead Replay-btn
    showQuestion();
}

//showQuestion(): display each question informations
function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1; //The current question number
    questionElement.innerHTML=questionNo + ". " + currentQuestion.questions;//Display the question

    //Display question image 
    if (currentQuestion.image) {
        questionImage.src = currentQuestion.image;
        questionImage.style.display = "block";
    } else {
        questionImage.style.display = "none";
    }

    //Display the answers for each question
    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;//Infor of child anwser
        button.classList.add("btn");
        answerButton.appendChild(button);

        //Gán giá trị correct của answer cho giá trị của answer-button
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }

        //Click answer eventListener
        button.addEventListener("click",selectAnswer); //selectAnswer()

    });

}


//resetState(): reset the state when move to next question
function resetState(){
        nextButton.style.display="none";
        while(answerButton.firstChild){
            answerButton.removeChild(answerButton.firstChild); //Remove anwser-buttons of the prervious question
        }
}

//selectAnswer(): Select the invidual answer-button for each question. After check the correct value of answer is true/false
function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorerect=selectedBtn.dataset.correct==="true"; //isCorrect flag var: Check the correct value of selectedBtn

    if(isCorerect){
        selectedBtn.classList.add("correct");//If true create class .correct
        score++;

    }else{
        selectedBtn.classList.add("incorrect");//If true create class .incorrect
    }
    //Set for user only click 1 button, then show the correct answer button
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;//Allow user only to click one button
    });
    nextButton.style.display="block";
}

//showScore()
function showScore(){
    resetState();
    questionElement.innerHTML=`Your scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Test Again";
    nextButton.style.display="block";
}


//handleNextButton()
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

//nextButton eventListener
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();