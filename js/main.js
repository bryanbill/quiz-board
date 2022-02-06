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

function check() {
  // Hold correct scores
  let numCorrect = 0;

  // Get the answers from the DOM
  const answers = div.querySelectorAll(".answers");

  questions.forEach((question, index) => {
    // find selected answer
    const answer = answers[index];
    const selector = `input[name=${"q" + index}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    const c = document.getElementsByName("quiz");

    // if answer is correct
    if (userAnswer === question.correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      c[
        index
      ].innerHTML = `${c[index].innerHTML}  <div class="text-right mr-10px ">
      <img
        src="./assets/tick.png"
        alt="tick"
        id=${index}-tick,
        height="20"
        width="20"
      />
    </div>`;
    }
    // if answer is wrong or blank
    else {
      c[
        index
      ].innerHTML = `${c[index].innerHTML}  <div class="text-right mr-10px ">
      <img
        src="./assets/wrong.png"
        alt="tick"
        id=${index}-tick,
        height="20"
        width="20"
      />
    </div>`;
    }
  });

  // show number of correct answers out of total
  document.getElementById("correctCount").innerHTML = numCorrect;
}

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
