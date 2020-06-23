function evetnListeners() {
    const showBtn = document.getElementById("show-btn");
    const questionCard = document.querySelector(".question-card");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("question-form");
    const feedback = document.querySelector(".feedback");
    const questionInput = document.getElementById("question-input");
    const answerInput = document.getElementById("answer-input");
    const questionList = document.getElementById("questions-list");
    let data = [];
    let id = 1;
    //new ui instance
    const ui = new UI();
    // show questions
    showBtn.addEventListener("click", function() {
      ui.showQuestion(questionCard);
    });
    //hide questions
    closeBtn.addEventListener("click", function() {
      ui.hideQuestion(questionCard);
    });
    //add question
    form.addEventListener("submit", function(event) {
      event.preventDefault();
        console.log({a:questionInput.value,b:answerInput.value});
        
      const questionValue = questionInput.value;
      const answerValue = answerInput.value;
  
      if (questionValue === "" || answerValue === "") {
        feedback.classList.add("alert-danger", "showItem");
        feedback.textContent = `cannot add empty values`;
        setTimeout(function() {
          feedback.classList.remove("alert-danger", "showItem");
        }, 3000);
      } else {
        const question = new Question(id, questionValue, answerValue);
        data.push(question);
        id++;
        ui.addQuestion(questionList, question);
        ui.clearFields(questionInput, answerInput);
        console.log(data);
      }
    });
    // work with question
    questionList.addEventListener("click", function(event) {
      event.preventDefault();
  
      if (event.target.classList.contains("delete-flashcard")) {
        questionList.removeChild(
          event.target.parentElement.parentElement.parentElement
        );
      } else if (event.target.classList.contains("show-answer")) {
        event.target.nextElementSibling.classList.toggle("showItem");
      } else if (event.target.classList.contains("edit-flashcard")) {
        // delete question
        let id = event.target.dataset.id;
        questionList.removeChild(
          event.target.parentElement.parentElement.parentElement
        );
        ui.showQuestion(questionCard);
        // specific question
        const tempQuestion = data.filter(function(item) {
          return item.id === parseInt(id);
        });
        // rest data
        let tempData = data.filter(function(item) {
          return item.id !== parseInt(id);
        });
        // console.log(data);
  
        data = tempData;
        // console.log(data);
  
        questionInput.value = tempQuestion[0].title;
        answerInput.value = tempQuestion[0].answer;
      }
    });
  }
  //run when document is loaded
  
  document.addEventListener("DOMContentLoaded", function() {
    evetnListeners();
  });
  

//run when document is loaded

document.addEventListener("DOMContentLoaded", function () {
    evetnListeners();
});

/**
 * ---------------------------------------------------
 */

function UI() { }

const _APP_SHOW_ITEM_CLASS = 'showItem'

/**
 * Show Question 
 * @param {DOM Element} element 
 */
UI.prototype.showQuestion = function (element) {
    element.classList.add(_APP_SHOW_ITEM_CLASS)
}

/**
 * Hide Question
 * @param {DOM Element} element 
 */
UI.prototype.hideQuestion = function (element) {
    element.classList.remove(__APP_SHOW_ITEM_CLASS)
}

/**
 * Add Question 
 * @param {DOM Element} element 
 * @param {Question} question 
 */
UI.prototype.addQuestion = function (element, question) {
    const div = document.createElement("div")
    div.classList.add("col-md-4")
    div.innerHTML = `<div class="card card-body flashcard my-3">
    <h4 class="text-capitalize">${question.title}?</h4>
    <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
    <h5 class="answer mb-3">${question.answer}</h5>
    <div class="flashcard-btn d-flex justify-content-between">
    
    <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="${
        question.id
        }">edit</a>
    <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
    </div>
   </div>;`

    element.appendChild(div);

}

/**
 * Clear field
 * @param {Question} question 
 * @param {Answer} answer 
 */

UI.prototype.clearFields = function (question, answer) {
    question.value = "";
    answer.value = "";
};

/**
 * Question Contructor
 * @param {Number} id 
 * @param {String} title 
 * @param {String} answer 
 */
function Question(id, title, answer) {
    this.id = id;
    this.title = title;
    this.answer = answer;
}