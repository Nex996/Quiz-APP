let quizView=document.querySelector('.quiz-view');
let questionText = document.querySelector(".question-text");
let questionNumber = document.querySelector(".question-number");
let options;
let main = document.querySelector("main");
let viewQuestion = document.querySelector(".view-questions");
let questionHolder = document.querySelector(".question-holder");
let startBtn=document.querySelector('#startQuiz');
let welcome=document.querySelector('.welcome');
// let againBtn=document.querySelector('.startAgain');
let boxes;
let categoryBtns;



startBtn.addEventListener("click", start)//Start quiz button





againBtn.addEventListener("click",function(){
  viewQuestion.innerHTML="";
  againBtn.style.display="none"
  quiz.reset();
  start();
})



 function init(){
   quiz.createViewQuestion();
   boxes = document.querySelectorAll(".box");
   startQuiz()

 }



function startQuiz() {
  let currentQuestion = quiz.getCurrentQuestion();//Choose current question
  currentQuestion.creationOptions();//Create options box for current question
  questionText.innerHTML = currentQuestion.text;//Set question text 
  options = document.querySelectorAll(".option-text");//Select all options boxes
  options.forEach((element) => {
    element.style.background = "yellow";//and reset color for next question
    element.style.border = "1px solid transparent";//border too
  });
  options.forEach(function (option, index) {//Set option text in the option boxes
    option.innerHTML = currentQuestion.options[index];
    option.onclick = checkAnswer;
  });
  questionNumber.innerHTML = `Question ${quiz.indexQuestion + 1} of ${
    quiz.questions.length
  }`;
}

function checkAnswer() {
  let element = this;
  element.style.border = "6px solid orange";
  let elements = options;
  let answer = this.innerHTML;
  quiz.verify(answer, element, elements);
  !quiz.isEnd() ? setTimeout(startQuiz, 500) : displayResult();
}

function displayResult() {
  questionText.innerHTML="";
    againBtn.style.display="block"
  options.forEach(function (option) {
    option.onclick = null;
  });
  main.classList.add("displayResult");
  main.innerHTML = `<p>Broj tacnih odgovora je: ${quiz.numCorrect}</p>`;
  main.innerHTML += `<p>Broj netacnih odgovora je: ${quiz.numWrong}</p>`;
  main.innerHTML += `<p>Vas rezultat je ${quiz.score}</p>`;
  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      let id = box.getAttribute("id");
      main.className="options"
      this.style.border = "6px solid orange";
      questionText.innerHTML = questions[id].content[0];
      main.innerHTML = questions[id].content[1];
      questionNumber.innerHTML = questions[id].content[2];


    });

  });
}



function getQuestions(category){
questions=allQuestions.filter(q=>{
  return q.category===category;
})
quiz.questions=questions;
main.className="options";
init();


}

function start () {
 quiz.createCategoryBtn();
  welcome.style.display="none"
  viewQuestion.style.display="flex";
  categoryBtns=document.querySelectorAll('.category');
  categoryBtns.forEach(btn=>{
    btn.addEventListener("click",function(){getQuestions(btn.innerHTML)})
  })
}