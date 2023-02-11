const quizes = [
  {
    id: 1,
    question: "1 + 1 = ?",
    answers: [1, 2, 3, 4],
  },
  {
    id: 2,
    question: "2 + 2 = ?",
    answers: [2, 3, 4, 5],
  },
  {
    id: 3,
    question: "3 + 3 = ?",
    answers: [3, 4, 5, 6],
  },
];
// render quiz
const quizzContainer = document.querySelector(".quiz-container");
quizes.map((quizz) => {
  quizzContainer.innerHTML += `
    <div class="quiz-item">
    <h3>Câu ${quizz.id}: ${quizz.question}</h3>
    <div class="quiz-answer" id="c${quizz.id}"></div>
    </div>
    `;
  // load answer from quizz.answer
  let quizzAnswer = document.querySelector(`#c${quizz.id}`);
  quizz.answers.map((answer) => {
    quizzAnswer.innerHTML += `
        <div class="quiz-answer-item">
            <input type="radio" name="${quizz.id}">
            <label>${answer}</label>
        </div>  
        `;
  });
});

//random cau tra loi
const randomButton = document.querySelector("#btn");
// ham random(1,4)
let randomNumber = () => {
  return Math.floor(Math.random() * 4) + 1;
};
// loai bo checked tu lan click truoc
let removeChecked = () => {
  ["c1", "c2", "c3"].map((id) => {
    arrChild = document.querySelectorAll(`#${id} .quiz-answer-item`);
    Array.from(arrChild).map((child) => {
      if (child.querySelector("input").hasAttribute("checked")) {
        child.querySelector("input").removeAttribute("checked");
      }
    });
  });
};
// random cau tra loi
let randomAnswer = () => {
  removeChecked();
  ["c1", "c2", "c3"].map((id) => {
    let childQuiz = document.querySelector(
      `#${id} .quiz-answer-item:nth-child(${randomNumber()})`
    );
    childQuiz.querySelector("input").setAttribute("checked", "checked");
  });
};
// them event vao button random
randomButton.addEventListener("click", randomAnswer);
