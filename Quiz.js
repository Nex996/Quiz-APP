class Quiz {
  score = 0;
  questions;
  indexQuestion = 0;
  numCorrect = 0;
  numWrong = 0;
  constructor(questions) {
    //Prosledjujemo niz questions koji sadrzi objekte tipa Question
    this.questions = questions;
  }

  reset(){
    this.score=0;
    this.indexQuestion=0;
    this.numCorrect=0;
    this.numWrong=0;
    boxes.forEach(box => {
      box.style.background = "yellow";
      box.innerHTML="";
    });

  }

  // createQuestionHolder(){
  //   let content=`<div class="question-holder">
  //   <header><p class="question-text"></p></header>
  //   <main class="options">
   
  //   </main>
  //   <footer><p class="question-number"></p></footer>
  // </div>`

  // quizView.innerHTML=content;
  // }

createCategoryBtn(){
  questionHolder.style.display="flex";
  let categories=[];
  allQuestions.forEach((q) => {
    if (categories.indexOf(q.category) === -1) {
      categories.push(q.category);
    }
  });
  let content="";
  categories.forEach(cat=>{
    content+=`<button class="category">${cat}</button>`.trim()
  })
  questionText.innerHTML=`<h1>Izaberi kategoriju</h1>`.trim()
  main.className="displayCategories";
  main.innerHTML=content;
}

  createViewQuestion() {
    let content = "";
    this.questions.forEach((question, index) => {
      content += `<div id=${index} class="box"></div>`;
    });
    viewQuestion.innerHTML = content;
  }

  getCurrentQuestion() {
    let current = this.questions[this.indexQuestion];
    current.options = Utils.randomize(current.options);
    return current;
  }

  isEnd() {
    return this.indexQuestion === this.questions.length;
  }

  verify(answer, element, elements) {
    let currentQuestion = this.getCurrentQuestion();
    if (answer === currentQuestion.correctAnswer) {
      this.numCorrect++;
      this.score += currentQuestion.points;
      boxes[this.indexQuestion].style.background = "green";
      boxes[this.indexQuestion].innerHTML = this.
      indexQuestion + 1;
      element.style.background = "green";
      elements.forEach((element) => {
        if (element.innerHTML !== currentQuestion.correctAnswer) {
          element.style.background = "red";
        }
      });
    } else {
      this.numWrong++;
      boxes[this.indexQuestion].style.background = "red";
      boxes[this.indexQuestion].innerHTML = this.indexQuestion + 1;
      elements.forEach((element) => {
        element.innerHTML !== currentQuestion.correctAnswer
          ? (element.style.background = "red")
          : (element.style.background = "green");
      });
    }
    currentQuestion.content.push(questionText.innerHTML);
    currentQuestion.content.push(main.innerHTML);
    currentQuestion.content.push(questionNumber.innerHTML);
   


    this.indexQuestion++;
  }
}


let quiz = new Quiz(questions);
