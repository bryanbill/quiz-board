const div = document.getElementById("quiz-container");

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
