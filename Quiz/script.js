const questions = [
    {
        questions:"Which date is Cuong's Bithday?",
        answers:[
            {text:"31/07",correct:true},
            {text:"31/01",correct:false},
            {text:"31/12",correct:false},
            {text:"30/12",correct:false}
        ]
    },
    {
        questions:"Which date is Cuong's Bithday?",
        answers:[
            {text:"31/07",correct:true},
            {text:"31/01",correct:false},
            {text:"31/12",correct:false},
            {text:"30/12",correct:false}
        ]
    }
];

const questionElement =document.getElementById("question");
const answerButton =document.getElementById("answer-buttons");
const  nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;