import { useState } from "react";

const questions = [
  {
    question: "What is 10 + 20?",
    options: ["20", "30", "40", "50"],
    answer: "30"
  },
  {
    question: "What is 5 × 6?",
    options: ["20", "25", "30", "35"],
    answer: "30"
  },
  {
    question: "Which number is even?",
    options: ["7", "11", "15", "20"],
    answer: "20"
  },
  {
    question: "What is 100 ÷ 10?",
    options: ["5", "10", "20", "50"],
    answer: "10"
  },
  {
    question: "What is 15 + 15?",
    options: ["20", "25", "30", "35"],
    answer: "30"
  }
];

function Aptitude({ setSection }) {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {

    if (selected !== "") {
      return;
    }

    setSelected(option);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {

    if (currentQuestion === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
    setSelected("");
  };

  if (finished) {

    return (
      <div className="quiz-container">

        <div className="quiz-card">

          <h1>🎉 Test Completed!</h1>

          <h2>
            Your Score: {score} / {questions.length}
          </h2>

          <button
            onClick={() => setSection("dashboard")}
          >
            Back to Dashboard
          </button>

        </div>

      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="quiz-container">

      <div className="quiz-card">

        <p>
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <h2>{question.question}</h2>

        <div className="options">

          {question.options.map((option) => (

            <button
              key={option}
              className={
                selected === option
                  ? "selected-option"
                  : ""
              }
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>

          ))}

        </div>

        <button
          className="next-btn"
          onClick={nextQuestion}
          disabled={selected === ""}
        >
          {currentQuestion === questions.length - 1
            ? "Finish"
            : "Next"
          }
        </button>

        <button
          className="back-btn"
          onClick={() => setSection("dashboard")}
        >
          Back
        </button>

      </div>

    </div>
  );
}

export default Aptitude;