let questions = [
  {
    question: "What is the capital of India?",
    answers: {
      a: "New Delhi",
      b: "Mumbai",
      c: "Chennai",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the capital of Pakistan?",
    answers: {
      a: "Islamabad",
      b: "Karachi",
      c: "Lahore",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the capital of China?",
    answers: {
      a: "Beijing",
      b: "Shanghai",
      c: "Tianjin",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the capital of Russia?",
    answers: {
      a: "Moscow",
      b: "St. Petersburg",
      c: "Novosibirsk",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the capital of France?",
    answers: {
      a: "Paris",
      b: "Lyon",
      c: "Marseille",
    },
    correctAnswer: "a",
  },
];

/**
 * Checks for the answers given by a user
 *
 * @returns void
 */

function check() {}

/**
 * Resets the questions and answers in the DOM
 * @returns void
 */
function reset() {
  window.location.reload();
}

/**
 * Creates the questions and answers in the DOM
 * @param {Array} questions
 */
function createQuiz(questions) {
  let injected = [];
  // inject number of questions
  const numberOfQuestions = questions.length;

  document.getElementById("numberOfQuestions").innerHTML = numberOfQuestions;

  // create questions
  questions.forEach((question, index) => {
    let answers = [];
    for (x in question.answers) {
      // Push each answer into the answers div
      answers.push(
        `<div class="answer">
        <label> <input
        type="checkbox"
        name="${"q" + index}"
        value="${x}"
       /> ${question.answers[x]}</label>
    </div>`
      );
    }

    injected.push(
      `<div id="quiz" name="quiz"class="m-2 quiz-container blue-grey">
        <div class="wrapper">
          <div class="flex-column justify-evenly align-start">
            <p class="title">${question.question}</p>

            <div class="answers">
            ${answers.join("")}</div>
          </div>
        </div>
       
      </div>`
    );
  });

  // Inject the HTML into the DOM
  div.innerHTML = injected.join("");
}

/**
 * Call the createQuiz function
 */
createQuiz(questions);
