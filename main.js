// main.js
import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let currentUser = "";

// Elements
const startBtn = document.getElementById("startQuiz");
const usernameInput = document.getElementById("username");
const lastScoreDiv = document.getElementById("last-score");
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

// Fetch questions from Firestore
async function fetchQuestions() {
  const querySnapshot = await getDocs(collection(db, "questions"));
  questions = querySnapshot.docs.map(doc => doc.data());
}

// Fetch last score for a user
async function fetchLastScore(username) {
  const userRef = doc(db, "scores", username);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    lastScoreDiv.innerText = `Last Score for ${username}: ${userSnap.data().score}`;
  } else {
    lastScoreDiv.innerText = `No previous score for ${username}`;
  }
}

// Save score to Firestore
async function saveScore(username, score) {
  await setDoc(doc(db, "scores", username), { score });
}

// Show question
function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    questionEl.innerText = `Quiz Finished! Your Score: ${score}`;
    optionsEl.innerHTML = "";
    saveScore(currentUser, score);
    return;
  }

  const q = questions[currentQuestionIndex];
  questionEl.innerText = q.question;

  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      if (opt === q.answer) score++;
      currentQuestionIndex++;
      showQuestion();
    };
    optionsEl.appendChild(btn);
  });
}

// Event listeners
startBtn.addEventListener("click", async () => {
  currentUser = usernameInput.value.trim();
  if (!currentUser) {
    alert("Please enter your name!");
    return;
  }

  await fetchLastScore(currentUser);
  await fetchQuestions();

  quizContainer.style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
});
let s = 0; // ✅ now it’s defined
console.log(s);
