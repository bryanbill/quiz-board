const questions = [
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
function createQuiz(questions) {}

/**
 * Call the createQuiz function
 */
createQuiz(questions);
