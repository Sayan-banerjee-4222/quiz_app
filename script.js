import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");

let questions = [];
let currentQuestionIndex = 0;

// Fetch questions from Firestore
async function fetchQuestions() {
  try {
    const questionsCollectionRef = collection(db, "questions");
    const snapshot = await getDocs(questionsCollectionRef);
    questions = snapshot.docs.map(doc => doc.data());
    console.log("Questions loaded:", questions);

    if (questions.length > 0) {
      showQuestion(currentQuestionIndex);
    } else {
      quizContainer.innerHTML = "<p>No questions found in Firestore.</p>";
    }
  } catch (error) {
    console.error("Error fetching questions:", error);
    quizContainer.innerHTML = "<p>Error loading questions. Check console.</p>";
  }
}

// Display a question
function showQuestion(index) {
  const q = questions[index];
  if (!q) return;

  quizContainer.innerHTML = `
    <h2>Q${index + 1}: ${q.question}</h2>
    <ul>
      ${q.options.map((opt, i) => `<li><button onclick="checkAnswer(${i})">${opt}</button></li>`).join("")}
    </ul>
  `;
}

// Check answer and go to next
window.checkAnswer = function(optionIndex) {
  const q = questions[currentQuestionIndex];
  if (q.correctIndex === optionIndex) {
    alert("Correct!");
  } else {
    alert(`Wrong! Correct answer: ${q.options[q.correctIndex]}`);
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(currentQuestionIndex);
  } else {
    quizContainer.innerHTML = "<h2>Quiz Finished!</h2>";
  }
}

// Start quiz button
document.addEventListener("DOMContentLoaded", function() {
  const startBtn = document.getElementById("start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", fetchQuestions);
  } else {
    console.error("Start button not found");
    fetchQuestions(); // Auto-start if button not found
  }
});
