const div = document.getElementById("quiz-container");
// Create Javascript questions
const questions = [
  {
    question: "What is the correct syntax for referring to an external script called 'main.js'?",
    answers: {
      a: "script src='main.js'",
      b: "script href='main.js'",
      c: "script file='main.js'",
      d: "script link='main.js'",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the correct syntax for adding a comment in Javascript?",
    answers: {
      a: "// This is a comment",
      b: "<code><-- This is a comment --></code>",
      c: "'This is a comment",
      d: "**This is a comment**",
    },
    correctAnswer: "a",
  },
  {
    question: "All the following are examples of valid Javascript variable names EXCEPT:",
    answers: {
      a: "2names",
      b: "first_name",
      c: "variable",
      d: "variable-one",
    },
    correctAnswer: "d",
  },
  {
    question: "Define the correct order of execution for the following code:",
    answers: {
      a: "a, b, c",
      b: "b, a, c",
      c: "c, a, b",
      d: "a, c, b",
    },
    correctAnswer: "c",
  },
  {
    question: "The following are ways NOT to write an IF statement in Javascript, EXCEPT:",
    answers: {
      a: "if (i == 5)",
      b: "if i == 5",
      c: "if i = 5",
      d: "if i = 5 then",
    },
    correctAnswer: "a",
  }
]


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
    const userAnswer = (answer.querySelector(selector) || {}).value;
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

  // Check if user passed or failed
  const percentage = Math.floor((numCorrect / questions.length) * 100);
  if (percentage >= 80) {
    document.getElementById("status").innerHTML = `<h1 class="text-center">Congratulations! You passed the quiz!</h1>`;
  }
  else if (percentage >= 50) {
    document.getElementById("status").innerHTML = "You fairly Passed";
  }
  else {
    document.getElementById("status").innerHTML = "You Failed";
  }


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
        type="radio"
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

function profile() {
  // Generate random user profiles
  let profiles = [
    {
      name: "John Doe",
      age: "25",
      avatar: "https://i.pravatar.cc/300",
    },
    {
      name: "Jane Doe",
      age: "25",
      avatar: "https://i.pravatar.cc/300",
    },
    {
      name: "Minny Doe",
      age: "25",
      avatar: "https://i.pravatar.cc/300",
    }
  ];

  // Get the profile containers
  const avatarContainer = document.getElementById("avatar");
  const nameContainer = document.getElementById("username");
  const index = Math.floor(Math.random() * profiles.length);
  avatarContainer.innerHTML = `<img src="${profiles[index].avatar}" alt="avatar" height="40" width="40" />`;
  nameContainer.innerHTML = `${profiles[index].name}`;
}
/**
 * Call the createQuiz and profile functions
 */
profile();
createQuiz(questions);
