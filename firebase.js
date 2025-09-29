// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseConfig = {
 apiKey: "AIzaSyCRtZ3H7T7OflOZUgpiwsgC6WC_ckZYDyY",
  authDomain: "quiz-app-a4ab7.firebaseapp.com",
  projectId: "quiz-app-a4ab7",
  storageBucket: "quiz-app-a4ab7.firebasestorage.app",
  messagingSenderId: "907905093309",
  appId: "1:907905093309:web:e98663382d93b5eba8f1d4",
  measurementId: "G-BGZJ8QB50N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
